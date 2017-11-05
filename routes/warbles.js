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
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/users/:userId/warbles", function(req, res, next) {
  db.Warble
    .find({ userId: req.params.user_id })
    .then(function(warbles) {
      res.status(200).json(warbles);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/users/:userId/warbles", function(req, res, next) {
  const newWarble = {
    message: req.body.message,
    userId: req.params.userId
  };
  db.Warble
    .create(newWarble)
    .then(function(warble) {
      res.status(201).json(warble);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/users/:userId/warbles/:warbleId", function(req, res, next) {
  db.Warble
    .findByIdAndRemove(req.params.warbleId)
    .then(function(warble) {
      res.status(204).json({ message: "Warble Deleted" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
