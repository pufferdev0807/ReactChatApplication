import React from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import ChatRoomList from "./ChatRoomList";
import GuestScreen from "./GuestScreen";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoomList: [...this.props.chatRoomList],
      selectedRoom: undefined,
      name: undefined,
      isLoggedIn: false
    };
  }
  selectionMade = roomChange => {
    this.setState({ selectedRoom: roomChange });
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleClick = () => {
    if (this.state.name === undefined || this.state.name === "") {
      console.log("Name must be set.");
    } else if (
      this.state.selectedRoom === undefined ||
      this.state.selectedRoom === ""
    ) {
      console.log("Room must be set.");
    } else {
      this.setState({ isLoggedIn: true });
    }
  };
  whichToRender = () => {
    if (!this.state.isLoggedIn) {
      return (
        <Container className="landingContainer">
          <Col>
            <Row className="justify-content-md-center">
              <h1 className="display-5 p-3">Chat Application</h1>
            </Row>
            <Row className="row justify-content-center" sm={2}>
              <InputGroup>
                <InputGroup.Text>Name:</InputGroup.Text>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter Username"
                />
                <Button onClick={this.handleClick} variant="dark">
                  Enter
                </Button>
              </InputGroup>
            </Row>
            <Row>
              <br />
            </Row>
            <Row className="row justify-content-center" sm={3}>
              <Col>
                <ChatRoomList
                  onRoomSelect={this.selectionMade}
                  chatRoomList={this.state.chatRoomList}
                ></ChatRoomList>
              </Col>
              <Col sm={1}>Selected Room:{this.state.selectedRoom}</Col>
            </Row>
          </Col>
        </Container>
      );
    } else
      return (
        <GuestScreen
          name={this.state.name}
          selectedRoom={this.state.selectedRoom}
        />
      );
  };
  render() {
    return <this.whichToRender />;
  }
}
