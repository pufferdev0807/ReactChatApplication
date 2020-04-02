import React from "react";
import GuestScreen from "./Components/GuestScreen";
import socketIOClient from "socket.io-client";
import "./app-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
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
      ],
      nameIsSet: false
    };
    socket = socketIOClient("localhost:3001");
  }

  location = () => {
    if (this.state.nameIsSet) {
      return (
        <div className="chatContainer">
          <Button variant="dark" className="adminBtn">
            Admin Login
          </Button>
          <GuestScreen />
        </div>
      );
    } else {
      return <Landing chatRoomList={this.state.chatRoomList} />;
    }
  };

  render() {
    return this.location();
  }
}

export { App, socket };
