import React from "react";
import { socket } from "../App";
import { Form, Button, InputGroup } from "react-bootstrap";

class MessageComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      room: this.props.room,
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
        sender: this.state.name,
        msg: this.state.msg,
        room: this.state.room
      };
      console.log(
        `${message.name} emitting message: ${message.msg} in room ${message.room}`
      );
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
