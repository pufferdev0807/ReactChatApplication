import React from "react";
import { MDBDataTable } from "mdbreact";
import { Col, Row, Container } from "react-bootstrap";
class ChatHistory extends React.Component {
  state = {
    dummydata: {
      columns: [
        {
          label: "id",
          field: "id",
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
          label: "Sender",
          field: "sender",
          sort: "asc",
        },
        {
          label: "Receiver",
          field: "receiver",
          sort: "asc",
        },
        {
          label: "Message",
          field: "message",
          sort: "asc",
        },
        {
          label: "Room",
          field: "room",
          sort: "asc",
        },
      ],
      rows: [
        {
          id: "10",
          date: "04/04/2020",
          time: "08:55:40",
          sender: "Kelvin",
          receiver: "all",
          message: "Hi How are you?",
          room: "general",
        },
        {
          id: 11,
          date: "04/04/2020",
          time: "08:56:00",
          sender: "Davido",
          receiver: "all",
          message: "Fine, Thanks. How are you?",
          room: "general",
        },
        {
          id: 12,
          date: "04/04/2020",
          time: "08:56:40",
          sender: "Kevin",
          receiver: "all",
          message: "Im fine",
          room: "general",
        },
        {
          id: 13,
          date: "04/04/2020",
          time: "08:58:40",
          sender: "Emma",
          receiver: "all",
          message: "Hi guys!",
          room: "general",
        },
        {
          id: 14,
          date: "04/04/2020",
          time: "08:59:40",
          sender: "Robin",
          receiver: "all",
          message: "welcome",
          room: "general",
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
              <h1>Chat History</h1>
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

export default ChatHistory;
