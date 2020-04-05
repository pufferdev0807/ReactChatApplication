const express = require("express");
const server = express.Router();

let eventHistoryModel = require("../models/event");

server.route("/").get((req, res, next) => {
  eventHistoryModel.find({}, (err, doc) => {
    if (err) next(err);
    res.json(doc);
  });
});

module.exports = server;
