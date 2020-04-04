import React from "react";
import socketIOClient from "socket.io-client";
import "./app-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Landing";
import NotificationSystem from 'react-notification-system';

let socket;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoomList: [
        "General",
        "Gaming",
        "NSFW",
        "Politics",
        "Anime",
        "Epic Seven",
        "COVID-19",
      ],
    };

    //socket = socketIOClient("remotehost:3001"); //IP for when deployed goes here
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
