let mongoose = require("mongoose")
const express = require("express");
const server = express.Router();

let roomModel = require("../models/room");
server.route("/").get((req, res, next) => {
  const notInc = {
    __v: false,
    updatedAt: false,
  };
  roomModel.find({}, notInc, (err, doc) => {
    if (err) next(err);
    res.json(doc);
  });
});

server.route("/add-room").post((req, res, next) => {
  console.log(req.body);
  roomModel.create(
    {
      Name: req.body.Name,
      Status: req.body.Status,
    },
    (err, doc) => {
      if (err) next(err);
      else res.json(doc);
    }
  );
});

server.route("/edit-room").patch((req, res, next) => {
  id = mongoose.Types.ObjectId(req.body._id)
  roomModel.findByIdAndUpdate(id, req.body, { new: true }, (err, doc) => {
    if (err) print(err)
    else res.json(doc)
  })
})

// Delete All Entries Disabled/Not In Use
server.route("/delete-all").delete((req, res) => {
  roomModel.deleteMany({}, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  })
})

module.exports = server;
