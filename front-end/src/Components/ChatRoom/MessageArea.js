import React from "react";
import { socket } from "../../App";

class MessageArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltext: [...this.props.alltext],
    };
  }

  componentDidUpdate() {
    let msgArea = document.getElementById("messageArea");
    msgArea.scrollTop = msgArea.scrollHeight;
  }
  componentDidMount() {
    socket.on("response", (data) => {
      this.setState({ alltext: [...this.state.alltext, data] });
    });
  }

  render() {
    return (
      <>
        <div>
          {`Welcome to ${this.props.room} chatroom!`}<br />
          {`All messages are being logged.`}
          <br /><br />
          {this.state.alltext !== []
            ? this.state.alltext.map((val, ctr) => {
              return (
                <div className="entry" key={ctr}>
                  <p>
                    <b>{val.by}: </b>{"   "}
                    {val.msg} -
                    <small><i > {val.time}</i></small>
                  </p>
                </div>
              );
            })
            : "no room"}
        </div>
      </>
    );
  }
}

export default MessageArea;
