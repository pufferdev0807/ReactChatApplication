import React from "react";
import { MDBDataTable } from "mdbreact";
import { Col, Row, Container } from "react-bootstrap";
class ChatHistory extends React.Component {
  state = {
    dummydata: {
      columns: [
        {
          label: "ID",
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
          field: "messages",
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
          id: 1,
          date: "04/04/2020",
          time: "08:55:40",
          sender: "Kelvin",
          receiver: "all",
          messages: "Hi how are you?",
          room: "general",
        },
        {
          id: 2,
          date: "04/04/2020",
          time: "08:56:40",
          sender: "David",
          receiver: "all",
          messages: "I'm fine, thanks. How are you?",
          room: "general",
        },
        {
          id: 3,
          date: "04/04/2020",
          time: "08:57:40",
          sender: "Kelvin",
          receiver: "all",
          messages: "Same old same old. How do you like the app?",
          room: "general",
        },
        {
          id: 4,
          date: "04/04/2020",
          time: "08:58:40",
          sender: "David",
          receiver: "all",
          messages: "The app is alright.",
          room: "general",
        },
        {
          id: 5,
          date: "04/04/2020",
          time: "08:59:40",
          sender: "Kelvin",
          receiver: "all",
          messages: "I agree.",
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
            <Row className="justify-content-md-center pt-4">
              <h1>Chat History</h1>
            </Row>
            <Row className="justify-content-md-center">
              <MDBDataTable
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
          </Col>
        </Container>
      </>
    );
  }
}

export default ChatHistory;
