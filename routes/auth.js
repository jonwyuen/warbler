require("dotenv").load();
const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

router.post("/signup", function(req, res, next) {
  db.User
    .create(req.body)
    .then(function(user) {
      const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(201).json({
        token,
        userId: user.id,
        username: user.usernmae,
        profileImage: user.profileImage
      });
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
});

router.post("/login", function(req, res, next) {
  db.User.findOne({ username: req.body.username }).then(function(user) {
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (isMatch) {
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
        res
          .status(200)
          .json({
            token,
            userId: user.id,
            username: user.usernmae,
            profileImage: user.profileImage
          });
      }
    });
  });
});

exports.signin = function(req, res) {
  db.User
    .findOne({ email: req.body.email })
    .then(function(user) {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch) {
          var token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
          res.status(200).json({
            userId: user.id,
            username: user.username,
            profileImageUrl: user.profileImageUrl,
            token
          });
        } else {
          res.status(400).json({ message: "Invalid Email/Password." });
        }
      });
    })
    .catch(function(err) {
      res.status(400).json({ message: "Invalid Email/Password" });
    });
};

module.exports = router;
