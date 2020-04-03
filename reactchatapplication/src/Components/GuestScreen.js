import React from "react";
import MessageArea from "./MessageArea";
import MessageComposer from "./MessageComposer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltext: [],
      room: this.props.selectedRoom,
      name: this.props.name
    };
  }
  render() {
    return (
      <>
        <div className="chatContainer">
          <h1 className="display-5 justfy-content-md-center">
            {this.state.room}
          </h1>
          <MessageArea alltext={this.state.alltext}></MessageArea>
          <MessageComposer
            room={this.state.room}
            name={this.state.name}
          ></MessageComposer>
        </div>
      </>
    );
  }
}
