import React from "react";
import { ListGroup } from "react-bootstrap";
import { socket } from "../App";
export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentDidMount() {
    socket.on("usersListUpdate", data => {
      console.log("frontend received a response " + data.name);
      this.setState({ userList: [...this.state.userList, data.name] });
    });
  }
  render() {
    return (
      <div>
        <ListGroup className="userList">
          <ListGroup.Item disabled>
            <b>Users List</b>
          </ListGroup.Item>
          {this.state.userList.map((val, ctr) => {
            return (
              <React.Fragment key={ctr}>
                <ListGroup.Item>{val}</ListGroup.Item>
              </React.Fragment>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}
