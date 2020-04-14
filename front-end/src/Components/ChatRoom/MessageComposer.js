import React from "react";
import { socket } from "../../App";
import { Form, Button, InputGroup } from "react-bootstrap";
import moment from "moment";

class MessageComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      room: this.props.room,
      msg: "",
    };
    this.handleFields = this.handleFields.bind(this);
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => { };

  sendMessage = () => {
    let time = moment().format("HH:mm:ss");
    if (this.state.msg !== "") {
      console.log(`length of message is ${this.state.msg.length} characters`)
      if (this.state.msg.length < 2000) {
        let message = {
          by: this.state.name,
          msg: this.state.msg,
          room: this.state.room,
          time: time,
        };
        socket.emit("message", message);
        this.setState({ msg: '' });
      }
      else {
        alert(`Character (${this.state.msg.length}) limit of 2000 exceeded`);
      }
    }
  };

  onEnterKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.sendMessage();
    }
  };
  render() {
    return (
      <InputGroup>
        <Form.Control
          bsPrefix
          as="textarea"
          name="msg"
          className="composeField"
          value={this.state.msg}
          onKeyDown={this.onEnterKey}
          onChange={this.handleFields}
          type="text"
          placeholder="Type here..."
        />
        <Button bsPrefix className="composeButton" type="submit" onClick={this.sendMessage}>
          Send
        </Button>
      </InputGroup>
    );
  }
}

export default MessageComposer;
