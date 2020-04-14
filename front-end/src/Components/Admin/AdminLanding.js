import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EventHistory from "./EventHistory";
import ChatHistory from "./ChatHistory";
import RoomManager from "./RoomManager";

class AdminLanding extends React.Component {
  state = {
    location: "eventHistory",
  };

  whichToRender = () => {
    if (this.state.location === "" || this.state.location === undefined) {
      return null;
    } else if (this.state.location === "eventHistory") {
      return <EventHistory></EventHistory>;
    } else if (this.state.location === "chatHistory") {
      return <ChatHistory></ChatHistory>;
    } else if (this.state.location === "roomManager") {
      return <RoomManager></RoomManager>;
    }
  };

  setLocation(value) {
    this.setState({ location: value });
  }
  render() {
    return (
      <>
        <Container fluid className="adminContainer">
          <Col>
            <Row className="justify-content-md-end" sm={12}>
              <Button href="/" size="sm" type="button" variant="light">
                Logout
              </Button>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <Row sm={3} className="justify-content-md-end">
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => this.setLocation("eventHistory")}
                  >
                    Event History
                  </Button>
                </Row>
              </Col>
              <Col>
                <Row sm={3} className="justify-content-md-center">
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => this.setLocation("chatHistory")}
                  >
                    Chat History
                  </Button>
                </Row>
              </Col>
              <Col>
                <Row sm={3} className="justify-content-md-start">
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => this.setLocation("roomManager")}
                  >
                    Rooms
                  </Button>
                </Row>
              </Col>
            </Row>
            <br />
            <Row className="justify-content-md-center">
              <this.whichToRender />
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default AdminLanding;
