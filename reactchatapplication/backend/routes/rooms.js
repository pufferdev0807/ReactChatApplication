const express = require("express");
const server = express.Router();

let roomModel = require("../models/room");
server.route("/").get((req, res, next) => {
  roomModel.find({}, (err, doc) => {
    if (err) next(err);
    res.json(doc);
  });
});

module.exports = server;
