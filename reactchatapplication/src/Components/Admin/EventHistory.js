import React from "react";
import { MDBDataTable } from "mdbreact";
import { Col, Row, Container } from "react-bootstrap";
class EventHistory extends React.Component {
  state = {
    dummydata: {
      columns: [
        {
          label: "Type",
          field: "type",
          sort: "asc",
        },
        {
          label: "Date",
          field: "date",
          sort: "asc",
        },
        {
          label: "Time",
          field: "time",
          sort: "asc",
        },
        {
          label: "User",
          field: "user",
          sort: "asc",
        },
        {
          label: "EventID",
          field: "eventid",
          sort: "asc",
        },
        {
          label: "PPID",
          field: "ppid",
          sort: "asc",
        },
      ],
      rows: [
        {
          type: "CONNECTION",
          date: "04/04/2020",
          time: "08:55:40",
          user: "Kelvin",
          eventid: "1",
          ppid: "10002",
        },
        {
          type: "JOINEDROOM",
          date: "04/04/2020",
          time: "08:56:04",
          user: "Kelvin",
          eventid: "2",
          ppid: "10002",
        },
        {
          type: "LEFTROOM",
          date: "04/04/2020",
          time: "08:57:04",
          user: "Kelvin",
          eventid: "3",
          ppid: "10002",
        },
        {
          type: "DISCONNECTED",
          date: "04/04/2020",
          time: "08:57:05",
          user: "Kelvin",
          eventid: "4",
          ppid: "10002",
        },
        {
          type: "CONNECTION",
          date: "04/04/2020",
          time: "09:55:00",
          user: "Kreefurgdgdgd",
          eventid: "5",
          ppid: "10002",
        },
        {
          type: "JOINEDROOM",
          date: "04/04/2020",
          time: "10:25:00",
          user: "Kreefurgdgdgd",
          eventid: "6",
          ppid: "10002",
        },
        {
          type: "LEFTROOM",
          date: "04/04/2020",
          time: "11:55:40",
          user: "Kreefurgdgdgd",
          eventid: "6",
          ppid: "10002",
        },
        {
          type: "DISCONNECTED",
          date: "04/04/2020",
          time: "11:55:41",
          user: "Kreefurgdgdgd",
          eventid: "7",
          ppid: "10002",
        },
        {
          type: "CONNECTION",
          date: "05/04/2020",
          time: "08:55:40",
          user: "Kelvin",
          eventid: "1",
          ppid: "10002",
        },
        {
          type: "JOINEDROOM",
          date: "05/04/2020",
          time: "08:56:04",
          user: "Kelvin",
          eventid: "2",
          ppid: "10002",
        },
        {
          type: "LEFTROOM",
          date: "05/04/2020",
          time: "08:57:04",
          user: "Kelvin",
          eventid: "3",
          ppid: "10002",
        },
      ],
    },
  };
  render() {
    return (
      <>
        <Container>
          <Col>
            <Row className="justify-content-md-center">
              <h1>Event History</h1>
            </Row>
            <Row className="justify-content-md-center">
              <MDBDataTable
                striped
                autoWidth
                small
                bordered
                paging={true}
                data={this.state.dummydata}
              />
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default EventHistory;
