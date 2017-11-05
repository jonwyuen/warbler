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

router.post("/login", function(req, res, next) {});

module.exports = router;
