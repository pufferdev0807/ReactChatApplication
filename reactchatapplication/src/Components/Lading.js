import React from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import ChatRoomList from "./ChatRoomList";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoomList: [...this.props.chatRoomList],
      nameIsSet: this.props.nameIsSet,
      selectedRoom: ""
    };
  }

  selectionMade = () => {
    this.setState({ nameIsSet: true, selectedRoom: "RoomClicked!!" });
    console.log(this.state.selectedRoom);
  };

  render() {
    return (
      <Container className="landingContainer">
        <Row className="justify-content-md-center">
          <h1 className="display-4">Chat Application</h1>
        </Row>
        <Row>
          <Col className="ml-4 pt-2" sm={8}>
            <InputGroup>
              <InputGroup.Text>Name:</InputGroup.Text>
              <Form.Control type="text" placeholder="Enter Username" />
              <Button onClick={this.selectionMade} variant="dark">
                Enter
              </Button>
            </InputGroup>
          </Col>
          <Col sm={3}>
            <ChatRoomList chatRoomList={this.state.chatRoomList}></ChatRoomList>
          </Col>
        </Row>
      </Container>
    );
  }
}
