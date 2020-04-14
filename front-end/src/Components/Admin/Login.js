import React from "react";
import {
  Form,
  Col,
  Button,
  Container,
  Row,
} from "react-bootstrap";
import AdminLanding from "./AdminLanding";
import Axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      navLocation: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      Axios.post('http://localhost:3001/api/users/login', {
        Username: this.state.username,
        Password: this.state.password
      })
        .then((response) => {
          if (response.data.msg === "Invalid Credentials!") {
          }
          else {
            this.setState({ navLocation: "loggedIn" });
          }
        })
        .catch((error) => {
        })
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  whichToRender = () => {
    if (this.state.navLocation === "") {
      return (
        <Container fluid className="landingContainer">
          <Col>
            <Row className="justify-content-md-center">
              <h1>Admin Login</h1>
            </Row>
            <Row className="justify-content-md-center">
              <Form>
                <Form.Group>
                  Username:
                  <Form.Control onChange={this.handleChange} id="username" type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group>
                  Password:
                  <Form.Control onChange={this.handleChange} id="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={this.handleSubmit} variant="light" type="submit">
                  Login
                </Button>
              </Form>
            </Row>
          </Col>
        </Container>
      );
    } else if (this.state.navLocation === "loggedIn") {
      return <AdminLanding></AdminLanding>;
    }
  };

  render() {
    return <this.whichToRender />;
  }
}

export default Login;
