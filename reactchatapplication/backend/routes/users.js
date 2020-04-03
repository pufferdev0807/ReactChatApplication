const express = require("express");
const bcrypt = require("bcryptjs");
const server = express.Router();

server.route("/user").get((req, res, next) => {});

module.exports = server;
