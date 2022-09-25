const express = require("express");
const bcrypt = require("bcryptjs");
const server = express.Router();

let userModel = require("../models/user");
server.route("/login").post((req, res, next) => {
    userModel.findOne({ Email: req.body.Username }, (err, doc) => {
        if (err) next(err);
        else {
            if (doc !== null)
                bcrypt.compare(req.body.Password, doc.Password, (err, isRight) => {
                    console.log(`comparing... result: ${isRight}`);
                    if (isRight) {
                        delete doc.Password;
                        res.json(doc)
                    }
                    else res.json({ msg: 'Invalid Credentials!' })
                })
        }
    })
})
// Registration Route Disabled/Not In Use
server.route("/register").post((req, res, next) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);
        else bcrypt.hash(req.body.Password, salt, (err, hash) => {
            if (err) next(err);
            else userModel.create({ Username: req.body.Username, Email: req.body.Email, Password: hash, Role: 0 }, (err, doc) => {
                if (err) next(err);
                else res.json(doc);
            })
        })
    })
});
module.exports = server;