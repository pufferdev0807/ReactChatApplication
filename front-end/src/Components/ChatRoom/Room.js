import React from "react";
import MessageArea from "./MessageArea";
import MessageComposer from "./MessageComposer";
import UserList from "./UserList";
import { Container, Col, Row } from "react-bootstrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltext: [],
      room: this.props.selectedRoom,
      name: this.props.name,
      userList: this.props.userList
    };
  }
  render() {
    return (
      <Container fluid className="fill">
        <h1 className="justify-content-center backgroundGray display-4 pb-3">{this.state.room}</h1>
        <Row>
          <Col id="messageArea" className="messageWindow" md={10} sm={12}>
            <MessageArea room={this.state.room} alltext={this.state.alltext} />
          </Col>
          <Col className="d-none d-sm-block">
            <UserList userList={this.state.userList} md={2} />
          </Col>
        </Row>
        <MessageComposer room={this.state.room} name={this.state.name}></MessageComposer>
      </Container>
    );
  }
}
