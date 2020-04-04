import React from "react";
import { ListGroup } from "react-bootstrap";
import { socket } from "../../App";
export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [...this.props.userList],
    };
  }

  componentDidMount = () => {
    console.log("Updated");
    socket.on("updateList", (data) => {
      this.setState({ userList: [...data] });
    });
  };

  component;
  render() {
    return (
      <div>
        <ListGroup className="userList">
          <ListGroup.Item disabled>
            <b>User List</b>
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
