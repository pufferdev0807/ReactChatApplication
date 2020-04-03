const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema(
  {
    type: {
      type: String,
      enum: ["CONNECTED", "JOINED", "ERROR"],
      required: true,
    },
    Date: {
      type: Date,
      default: Date.now,
    },
    User: {
      type: String,
      required: true,
    },
    PPID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Event;
