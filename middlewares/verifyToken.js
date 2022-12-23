const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  let token = req.headers.authorization;
  //check if token use Bearer
  if(/\s/.test(token)){
    token = token.split(" ")[1];
  }

  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).json({
        message: err.message,
      });
    }

    req.user = decoded;
    return next();
  });
};
