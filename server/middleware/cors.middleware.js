const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-type,Accept,X-Access-Token,X-Key, Authorization"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
};

module.exports = cors;
