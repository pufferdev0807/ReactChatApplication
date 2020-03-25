const express = require('express');
const server = express.Router();

let chatHistoryModel = require('../models/chat');

server.route('/chatlog').get((req, res, next)=>{
    chatHistoryModel().find({}, (err, doc)=>{
        if(err) next(err);
        res.json(doc);
    });
})

module.exports = server;