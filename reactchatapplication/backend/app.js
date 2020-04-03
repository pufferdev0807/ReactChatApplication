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

mongoose.connect(
  conf,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    else console.log("Successfully connected to onntected to remote DB");
  }
);

io.on("connection", socket => {
  socket.on("message", data => {
    room = data.room;
    msg = data.msg;
    socket.join(`${room}`);
    console.log(data);
    io.to(`${room}`).emit("response", data);
  });
  socket.on("usersListUpdate", data => {
    room = data.room;
    name = data.name;
    io.to(`${room}`).emit("updateList", data);
  });
});

var writeStream = fs.createWriteStream(path.join(__dirname, "http.log"), {
  flags: "a"
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

app.use("/api", userRoute);

app.use((req, res) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  eventHistoryModel().create({
    type: "REQUEST ERROR",
    user: `Generic Client`,
    PPID: 1111
  });
});

server.listen(port, () => `API running @ port ${port}`);
