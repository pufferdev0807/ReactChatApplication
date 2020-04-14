const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let conf = require("./conf/dbconf");

let userModel = require("./models/user");
let chatHistoryModel = require("./models/chat");
let eventHistoryModel = require("./models/event");
let roomModel = require("./models/room");
mongoose.connect(
  conf,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    else { }
  }
);

mongoose.set('useCreateIndex', true);
let userList = {};

roomModel.find({}, { status: false }, (err, doc) => {
  if (err) throw err;
  else {
    doc.map(value => {
      return userList[value.Name] = [];
    });
  }
})

io.on("connection", (socket) => {
  eventHistoryModel.create(
    {
      type: "CONNECTION",
      PPID: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5),
    },
    (err, doc) => {
      if (err) { }
    }
  );

  socket.on("message", (data) => {
    room = data.room;
    msg = data.msg;
    by = data.by;
    chatHistoryModel.create(
      {
        msg,
        by,
        room,
      },
      (err, doc) => {
        if (err) {
          eventHistoryModel.create(
            {
              type: "ERROR",
              user: data.by,
              PPID: Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substr(0, 5),
            },
            (err, doc) => {
              if (err) { }
            }
          );
        }
      }
    );
    io.to(`${room}`).emit("response", data);
  });

  socket.on("usersListUpdate", (data) => {
    room = data.room;
    socket.join(`${room}`);
    eventHistoryModel.create(
      {
        type: "JOINED",
        user: data.name,
        PPID: Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(0, 5),
      },
      (err, doc) => {
        if (err) { }
      }
    );
    userList[room] = [...userList[room], data.name];
    io.to(`${room}`).emit("updateList", userList[data.room]);
  });

  socket.on("user-disconnect", (data) => {
    if (typeof data.room !== "undefined" || typeof data.name !== "undefined") {
      room = data.room;
      socket.leave(room);
      eventHistoryModel.create(
        {
          type: "DISCONNECT",
          user: data.name,
          PPID: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5),
        },
        (err, doc) => {
          if (err) { }
        }
      );
      userList[room] = userList[room].filter((usr) => usr !== data.name);
      io.to(`${room}`).emit("updateList", userList[room]);
      console.log(userList[room]);
    } else {
    }
  });
});

var writeStream = fs.createWriteStream(path.join(__dirname, "http.log"), {
  flags: "a",
});

const messageRoute = require("./routes/messages");
const eventRoute = require("./routes/events");
const roomRoute = require("./routes/rooms");
const userRoute = require("./routes/users");

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(cors());
app.use(morgan("common", { stream: writeStream }));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/chatlog", messageRoute);
app.use("/api/events", eventRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/users", userRoute);

app.use((req, res, next) => {
  if (res.status === 200) res.status = 404
  next()
});

app.use((err, req, res, next) => {
  let error = new Error("Unable to fetch requested data...");
  res.json(error)
})

server.listen(port, () => `API running @ port ${port}`);
