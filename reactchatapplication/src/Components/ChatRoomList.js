import React from "react";
import { ListGroup } from "react-bootstrap";
export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoomList: [...this.props.chatRoomList],
      selectedRoom: ""
    };
  }

  setRoom = e => {
    this.setState({ selectedRoom: e.target.value });
  };

  render() {
    return (
      <div className="chatRoomList">
        <ListGroup className="roomList">
          <ListGroup.Item disabled>
            <b>Room List</b>
          </ListGroup.Item>
          {this.state.chatRoomList.map((val, ctr) => {
            return (
              <React.Fragment key={ctr}>
                <ListGroup.Item action onClick={this.setRoom} value={val}>
                  {val}
                </ListGroup.Item>
              </React.Fragment>
            );
          })}
        </ListGroup>
        Selected room {this.state.selectedRoom}
      </div>
    );
  }
}
