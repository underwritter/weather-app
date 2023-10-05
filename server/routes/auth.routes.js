const Router = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const router = new Router();

router.post(
  "/registration",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Пароль должен содержать от 3 до 12 символов").isLength({
      min: 3,
      max: 12,
    }),
    check("name"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({message: "Uncorrect request", errors});
      }
      const {email, password, name} = req.body;

      if (!(email && password && name)) {
        res.status(400).send("All input is required");
      }

      const candidate = await User.findOne({email});
      if (candidate) {
        return res.status(400).json({
          message: `Пользователь с данным email ${email} уже существует`,
          success: false,
        });
      }

      encryptedPassword = await bcrypt.hash(password, 8);

      const user = await User.create({
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign(
        {user_id: user._id, email},
        config.get("secretKey"),
        {
          expiresIn: "9999d",
        }
      );
      user.token = token;

      res
        .status(200)
        .json({message: "Пользователь успешно создан", success: true});
    } catch (err) {
      console.log(err);
      res.send({message: "Server error"});
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if (!user) {
      return res.status(404).json({message: "Пользователь не найден"});
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({message: "Неверный пароль"});
    }
    const token = jwt.sign({id: user.id}, config.get("secretKey"), {
      expiresIn: "10h",
    });
    user.token = token;

    return res.json({
      token,
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.send({message: "Server error"});
  }
});

module.exports = router;
