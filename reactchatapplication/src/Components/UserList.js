import React from "react";
import { ListGroup } from "react-bootstrap";

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [
        "Igor",
        "Josh",
        "Kevin",
        "Klifford",
        "David",
        "Jin",
        "Emma",
        "Davina",
        "John"
      ]
    };
  }

  render() {
    return (
      <div className="userList">
        <ListGroup className="userList">
          <ListGroup.Item disabled>
            <b>Users List</b>
          </ListGroup.Item>
          {this.state.usersList.map((val, ctr) => {
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
