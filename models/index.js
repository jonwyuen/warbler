const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/warbler");

module.exports.User = require("./user");
module.exports.Warble = require("./warble");
