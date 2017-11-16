const express = require("express");
const router = express.Router();
const db = require("../models");

// router.get("/:userId", function(req, res, next) {
//   db.User
//     .findById(req.params.userId)
//     .then(function(user) {
//       res.status(200).json(user);
//     })
//     .catch(function(err) {
//       res.send(err);
//     });
// });

router.patch("/", function(req, res, next) {
  db.User
    .findByIdAndUpdate(req.params.userId)
    .then(function(user) {
      res.status(200).json(user);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/", function(req, res, next) {
  db.User
    .findByIdAndRemove(req.params.userId)
    .then(function() {
      res.status(204).json({ message: "Deleted" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
