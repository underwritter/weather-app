const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const User = require("./models/user");
const authRouter = require("./routes/auth.routes");
const app = express();
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware");
const auth = require("./middleware/auth.middleware");

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.get("/api/auth/get_user", auth, async (req, res) => {
  const id = req.user.id;
  const user = await User.findById(id);

  res.json(user);
});

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));

    app.listen(PORT, () => {
      console.log("Server started on port ", PORT);
    });
  } catch (e) {}
};

start();
