const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema(
  {
    Username: {
      type: String,
      unique: true,
      required: true,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Role: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", User);
