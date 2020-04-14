import React from "react";
import { MDBDataTable } from "mdbreact";
import { Col, Row, Container, Button } from "react-bootstrap";
import ShowAddModal from "./AddRoomModal";
import ShowEditModal from "./EditRoomModal";
import Axios from "axios";

class RoomManager extends React.Component {
  state = {
    columns: [],
    rows: [],
    show: false,
    showAdd: false,
    objData: undefined
  };
  componentDidMount() {
    this.retrieveRooms();
  }
  retrieveRooms = () => {
    Axios.get("http://localhost:3001/api/rooms")
      .then((response) => {
        let dataColumns = [];
        Object.keys(response.data[0]).map((item) => {
          let newColumnEntry = {
            label: item,
            field: item,
            sort: "asc",
            width: 150
          };
          return dataColumns.push(newColumnEntry);
        });
        dataColumns.push({ label: "Action", field: "editField", sort: "asc" })
        let newRes = []
        response.data.map(item => {
          let newObj = {
            n: item.Name,
            s: item.Status,
            i: item._id
          }
          item.editField = <Button onClick={() => this.handleClickEdit(newObj)} size="sm" variant="light">Edit</Button>
          return newRes.push(item)
        })
        this.setState({ columns: dataColumns, rows: [...newRes] });
      })
      .catch((error) => { });
  };
  handleNoSaveClose = () => {
    this.setState({ show: false })
    this.retrieveRooms();
  };
  handleNoSaveCloseAdd = () => {
    this.setState({ showAdd: false });
    this.retrieveRooms();
  }
  handleClose = () => {
    this.setState({ show: false });
    this.retrieveRooms();
  }
  handleCloseAdd = () => {
    this.setState({ showAdd: false });
    this.retrieveRooms();
  }
  handleShow = () => this.setState({ show: false });
  handleShowAdd = () => { this.setState({ showAdd: true }) }
  handleClickEdit = (data) => {
    this.setState({ show: true, objData: data })
  };
  handleClickAdd = () => {
    this.setState({ showAdd: true })
  }
  render() {
    return (
      <>
        <Container>
          <Col>
            <Row className="justify-content-md-center pt-4">
              <h1 className="text-white">Room Manager</h1>
            </Row>
            <Row className="justify-content-md-center tableBackground">
              <MDBDataTable
                hover
                striped
                bordered
                responsive
                entries={7}
                displayEntries={false}
                paging={true}
                data={this.state}
                noBottomColumns
                sortable
              />
            </Row>
            <Row className="justify-content-md-center pt-5 flex" sm={6}>
              <Button onClick={this.handleClickAdd} variant="light">Add Room</Button>
              <ShowAddModal
                retrieve={this.retrieveRooms}
                handleNoSaveCloseAdd={this.handleNoSaveCloseAdd}
                handleShowAdd={this.handleShowAdd}
                handleCloseAdd={this.handleCloseAdd}
                show={this.state.showAdd}></ShowAddModal>
              <ShowEditModal
                retrieve={this.retrieveRooms}
                handleNoSaveClose={this.handleNoSaveClose}
                handleShow={this.handleShow}
                handleClose={this.handleClose}
                show={this.state.show}
                data={this.state.objData}></ShowEditModal>
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default RoomManager;