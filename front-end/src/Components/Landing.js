import React from "react";
import LoginModal from "react-login-modal";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import RoomList from "./RoomList";
import Room from "./ChatRoom/Room";
import { socket } from "../App";
import NotificationSystem from "react-notification-system";
import Login from "./Admin/Login";
import AdminLanding from "./Admin/AdminLanding";
import Axios from "axios";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: undefined,
      name: undefined,
      navLocation: "",
      userList: [],
    };
  }

  /*Notification system module by Igor Prado, displays messages to the user
  telling them to enter username/select a room
  */
  notificationSystem = React.createRef();
  addNotification = (event) => {
    const notification = this.notificationSystem.current;
    if (this.state.name === undefined || this.state.name === "") {
      notification.addNotification({
        message: "Please enter a username.", //message to be displayed
        level: "error", //type of notification (success, error, warning, info)
      });
    } else if (
      this.state.selectedRoom === undefined ||
      this.state.selectedRoom === ""
    ) {
      notification.addNotification({
        message: "Please select a room to join.",
        level: "error",
      });
    } else {
      this.setState(
        {
          navLocation: "NameSet",
          userList: [...this.state.userList, this.state.name],
        },
        () => {
          let message = {
            room: this.state.selectedRoom,
            name: this.state.name,
          };
          socket.emit("usersListUpdate", message);
        }
      );
    }
  };

  selectionMade = (roomChange) => {
    this.setState({ selectedRoom: roomChange });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  sendLastEmit = () => {
    socket.emit("user-disconnect", {
      name: this.state.name,
      room: this.state.selectedRoom,
    });
  };

  componentDidMount() {
    window.addEventListener("beforeunload", this.sendLastEmit);
  }

  componentWillUnmount() {
    this.sendLastEmit();
    window.removeEventListener("beforeunload", this.sendLastEmit);
  }

  onEnterKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      this.addNotification();
    }
  };
  setLocLogin = () => {
    this.setState({ navLocation: "loginScreen" });
  };

  handleSignup = (username, email, password) => {
    Axios.post('http://localhost:3001/api/users/register', {
        Username: username,
        Password: password,
        Email: email
      })
        .then((response) => {
          if (response.data.msg === "Invalid Credentials!") {
          }
          else {
            if(response.data.Role === 1) {
              this.setState({ navLocation: "Admin", name: username });
            } else if (response.data.Role === 2) {

            } else {
              this.setState({ navLocation: "NormalUser", name: username });
            }
          }
        })
        .catch((error) => {
        })
  };
  handleLogin = (username, password) => {
    if (username !== "" && password !== "") {
      Axios.post('http://localhost:3001/api/users/login', {
        Username: username,
        Password: password
      })
        .then((response) => {
          if (response.data.msg === "Invalid Credentials!") {
          }
          else {
            if(response.data.Role === 1) {
              this.setState({ navLocation: "Admin", name: response.data.Username });
            } else if (response.data.Role === 2) {

            } else {
              this.setState({ navLocation: "NormalUser", name: response.data.Username });
            }
          }
        })
        .catch((error) => {
        })
    }
  };

  whichToRender = () => {
    if (this.state.navLocation === "") {
      return (
          <LoginModal
            handleSignup={this.handleSignup}
            handleLogin={this.handleLogin}
          />
      );
    } else if (this.state.navLocation === "NormalUser") {
      return (
        <Container fluid className="landingContainer">

          <Col>

            <Row className="justify-content-md-center">
              <h1 className="display-5">Chat Application</h1>
            </Row>
            <Row className="justify-content-center">
              <InputGroup className="w-25">
                <InputGroup.Text>Name:</InputGroup.Text>
                <Form.Control
                  onKeyDown={this.onEnterKey}
                  // onChange={this.handleChange}
                  disabled={true}
                  value={this.state.name}
                  type="text"
                  placeholder="Enter Username"
                />
                <Button onClick={this.addNotification} variant="light">
                  Enter Team!
                </Button>
                <NotificationSystem ref={this.notificationSystem} />
              </InputGroup>
            </Row>
            <br />
            <Row className="row justify-content-center">
              <b>Selected Team: {this.state.selectedRoom}</b>
            </Row>
            <br />
            <Row className="row justify-content-center">
              <RoomList
                onRoomSelect={this.selectionMade}
              ></RoomList>
            </Row>
            <br />
            {/* <Row className="row justify-content-center">
              <Button className="adminButt" variant="light" onClick={this.setLocLogin}>
                Admin Panel
              </Button>
            </Row> */}
          </Col>
        </Container >
      )
    } else if (this.state.navLocation === "Admin") {
      return (
        <AdminLanding/>
      )
    } else if (this.state.navLocation === "NameSet") {
      return (
        <Room
          name={this.state.name}
          selectedRoom={this.state.selectedRoom}
          userList={this.state.userList}
        />
      );
    } else if (this.state.navLocation === "loginScreen") {
      return <Login />;
    }
  };
  render() {
    return <this.whichToRender />;
  }
}
