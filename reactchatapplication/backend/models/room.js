const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Room = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Room;
