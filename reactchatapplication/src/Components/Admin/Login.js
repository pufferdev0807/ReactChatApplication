import React from "react";
import {
  FormControl,
  FormGroup,
  Form,
  Col,
  Button,
  Container,
  Row,
} from "react-bootstrap";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
    authenticated: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <Container className="landingContainer">
        <Col>
          <Row className="justify-content-md-center">
            <h1>Admin Login</h1>
          </Row>
          <Row className="justify-content-md-center">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                Username:
                <FormControl placeholder="Username" />
              </FormGroup>
              <FormGroup>
                Password:
                <FormControl placeholder="Password" />
              </FormGroup>
              <Button type="submit">Login</Button>
            </Form>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Login;
