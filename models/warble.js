const mongoose = require("mongoose");
const User = require("./user");

const warbleSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      maxLength: 140
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const Warble = mongoose.model("Warble", warbleSchema);

module.exports = Warble;
