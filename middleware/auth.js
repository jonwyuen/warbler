require("dotenv").load();
const jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        next();
      } else {
        res.status(401).send("Please log in first");
      }
    });
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.ensureCorrectUser = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded.user_id === req.params.id) {
        next();
      } else {
        console.log(decoded.user_id);
        console.log(req.params.id);
        res.status(401).send("Unauthorized");
      }
    });
  } catch (err) {
    res.status(401).send(err);
  }
};

module.exports = exports;
