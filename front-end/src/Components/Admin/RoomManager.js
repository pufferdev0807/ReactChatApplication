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
    objData: undefined
  };
  componentDidMount() {
    this.retrieveEvents();
  }
  retrieveEvents = () => {
    Axios.get("http://localhost:3001/api/rooms")
      .then((response) => {
        let dataColumns = [];
        Object.keys(response.data[0]).map((item) => {
          let newColumnEntry = {
            label: item,
            field: item,
            sort: "asc",
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
          item.editField = <Button onClick={() => this.handleClick(newObj)} size="sm" variant="light">Edit</Button>
          return newRes.push(item)
        })
        this.setState({ columns: dataColumns, rows: [...newRes] });
      })
      .catch((error) => console.log(error));
  };
  handleNoSaveClose = () => this.setState({ show: false });
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: false });
  handleClick = (data) => {
    this.setState({ show: true, objData: data })
  }
  render() {
    return (
      <>
        <Container>
          <Col>
            <Row className="justify-content-md-center pt-4">
              <h1>Room Manager</h1>
            </Row>
            <Row className="justify-content-md-center">
              <MDBDataTable
                btn
                striped
                small
                bordered
                autoWidth
                responsive
                entries={8}
                dark
                tbodyTextWhite
                theadTextWhite
                displayEntries={false}
                paging={true}
                data={this.state}
                noBottomColumns
              />
            </Row>
            <Row className="justify-content-md-center pt-5 flex" sm={6}>
              <ShowAddModal state={this.state}></ShowAddModal>
              <ShowEditModal
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