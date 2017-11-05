const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/warbles", function(req, res, next) {
  db.Warble
    .find()
    .sort({ createdAt: "desc" })
    .limit(100)
    .then(function(warbles) {
      res.status(200).json(warbles);
    });
});

module.exports = router;
