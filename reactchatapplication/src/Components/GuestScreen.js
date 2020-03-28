import React from "react";
import MessageArea from "./MessageArea";
import MessageComposer from "./MessageComposer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltext: [],
      msg: "",
      room: ""
    };
  }
  render() {
    return (
      <>
        <h1>Chat Room Name</h1>
        <MessageArea alltext={this.state.alltext}></MessageArea>
        <MessageComposer></MessageComposer>
      </>
    );
  }
}
