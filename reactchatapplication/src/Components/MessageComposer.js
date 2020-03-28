import React from "react";
import { socket } from "../App";
import { Form, Button, InputGroup } from "react-bootstrap";

class MessageComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ msg: event.target.value });
  };

  sendMessage = () => {
    if (this.state.msg !== "") {
      let message = {
        msg: this.state.msg,
        room: "Queefy Kingdom"
      };
      console.log(`emitting message: ${message.msg} in room ${message.room}`);
      socket.emit("message", message);
    }
  };

  render() {
    return (
      <InputGroup className="composeArea">
        <Form.Control
          size="lg"
          className="composeField"
          onChange={this.handleChange}
          type="text"
          placeholder="Type here..."
        />
        <Button variant="dark" onClick={this.sendMessage}>
          Send
        </Button>
      </InputGroup>
    );
  }
}

export default MessageComposer;
