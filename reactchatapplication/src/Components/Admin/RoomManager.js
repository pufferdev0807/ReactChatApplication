import React from "react";
import { MDBDataTable } from "mdbreact";
import { Col, Row, Container, Button } from "react-bootstrap";
import ShowAddModal from "./AddRoomModal";
import ShowEditModal from "./EditRoomModal";

class RoomManager extends React.Component {
  state = {
    roomName: "",
    dummydata: {


    },
  };

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
                data={this.state.dummydata}
                noBottomColumns
              />
            </Row>
            <Row className="justify-content-md-center pt-5 flex" sm={6}>
              <ShowAddModal state={this.state}></ShowAddModal>
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default RoomManager;
/*      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Room Name",
          field: "room",
          sort: "asc",
        },
        {
          label: "Date Created",
          field: "dateCreated",
          sort: "asc",
        },
        {
          label: "Edit Date",
          field: "dateEdited",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
        {
          label: "",
          field: "editField",
          sort: "asc",
        },
      ],
      rows: [
        {
          id: 1,
          room: "general",
          dateCreated: "05/04/2020",
          dateEdited: "05/04/2020",
          status: "Active",
          editField: (
            <Button size="sm" variant="light">
              Edit
            </Button>
          ),
        },
        {
          id: 2,
          room: "gaming",
          dateCreated: "05/04/2020",
          dateEdited: "05/04/2020",
          status: "Inactive",
          editField: (
            <Button size="sm" variant="light">
              Edit
            </Button>
          ),
        },
        {
          id: 3,
          room: "nsfw",
          dateCreated: "05/04/2020",
          dateEdited: "05/04/2020",
          status: "Active",
          editField: (
            <Button size="sm" variant="light">
              Edit
            </Button>
          ),
        },
      ],
      */