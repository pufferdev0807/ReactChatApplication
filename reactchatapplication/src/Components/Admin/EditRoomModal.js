import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form, Nav } from "react-bootstrap";

class EditRoomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      roomName: "",
      stat: undefined
    }
  }
  componentDidMount() {
    console.log("edit modal loaded!")
  }
  handleChange = (event) => {
    this.setState({ roomName: event.target.value });
  };
  // Shows or hide the Drawer
  handleToggle = () => this.setState({ open: !this.state.open });

  handlePillChange = (value) => {
    this.setState({ stat: value });
    console.log(`Status ${this.state.stat} RoomName ${this.state.roomName}`);
  };
  // Closes the drawer
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <>
        <Modal animation={true} show={this.state.open} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Room Name:
          <Form.Control
              required
              onChange={this.handleChange}
              type="text"
              placeholder="Enter Room Name"
            />
            <br></br>
          Status:
          <Nav variant="pills" defaultActiveKey="Active">
              <Nav.Item>
                <Nav.Link onSelect={this.handlePillChange} eventKey="Active">
                  Active
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onSelect={this.handlePillChange} eventKey="Inactive">
                  Inactive
              </Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditRoomModal;