import React from "react";
import socketIOClient from "socket.io-client";
import "./app-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Lading";

let socket;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoomList: [
        "General Chat",
        "Gaming",
        "18+",
        "Politics",
        "Anime",
        "Star-Trek",
        "COVID-19"
      ]
    };

    //socket = socketIOClient("184.145.64.148:3001"); IP for when deployed goes here
    socket = socketIOClient("localhost:3001"); // Used for Testing
  }
  render() {
    return (
      <>
        <Landing chatRoomList={this.state.chatRoomList} />
      </>
    );
  }
}

export { App, socket };
