import Modal from "react-bootstrap/Modal";
import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import Axios from "axios";

const ShowAddModal = (props) => {
  let show = props.show;
  let retrieve = props.retrieve;
  let handleClose = props.handleClose;
  let handleNoSaveCloseAdd = props.handleNoSaveCloseAdd;
  let roomName = "";
  let stat = "Active";
  let addRoom = () => {
    if (roomName !== "") {
      Axios.post("http://localhost:3001/api/rooms/add-room", {
        Name: roomName,
        Status: stat,
      })
        .then((response) => {
          alert("Room has been added!")
        })
        .catch((error) => {
        });
    }
    else {
      alert("Room name cannot be empty!")
    }
  };


  let handlePillChange = (value) => {
    if (stat !== undefined)
      stat = value;
  };
  let handleChange = (event) => {
    roomName = event.target.value;
  };

  handleClose = () => {
    addRoom();
    handleNoSaveCloseAdd();
    retrieve();
  }
  return (
    <>
      <Modal animation={true} show={show} onHide={handleNoSaveCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Room Name:
          <Form.Control
            required
            onChange={handleChange}
            type="text"
            placeholder="Enter Room Name"
          />
          <br></br>
          Status:
          <Nav variant="pills" defaultActiveKey="Active">
            <Nav.Item>
              <Nav.Link onSelect={handlePillChange} eventKey="Active">
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={handlePillChange} eventKey="Inactive">
                Inactive
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleNoSaveCloseAdd}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Add Room
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowAddModal;

