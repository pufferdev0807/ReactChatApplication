const express = require("express");
const server = express.Router();

server.route("/").get((req, res, next) => { });

module.exports = server;
