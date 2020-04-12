import Modal from "react-bootstrap/Modal";
import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import Axios from "axios";

const ShowEditModal = (props) => {
  let show = props.show;

  let handleClose = props.handleClose;
  let handleNoSaveClose = props.handleNoSaveClose;
  let data, roomName, roomid, stat;
  if (props.data !== undefined) {
    data = props.data
    roomName = data.n;
    roomid = data.i;
    stat = data.s;
    console.log(`Status ${stat} RoomName ${roomName} RoomID: ${roomid}`);
  }

  let editRoom = () => {
    Axios.patch("http://localhost:3001/api/rooms/edit-room", {
      Name: roomName,
      _id: roomid,
      Status: stat
    }).then((response) => {
      console.log(`${response.data} has been edited successfully`);
    }).catch((error) => {
      console.log(`${error}`);
    })
  };

  handleClose = () => {
    editRoom();
  }
  let handlePillChange = (value) => {
    if (stat !== undefined)
      stat = value;
  };
  let handleChange = (event) => {
    roomName = event.target.value;
  };
  return (
    <>
      <Modal animation={false} show={show} onHide={handleNoSaveClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Room Name:
          <Form.Control
            required
            name="room"
            defaultValue={roomName !== undefined ? roomName : ""}
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
          <Button variant="secondary" onClick={handleNoSaveClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowEditModal;
