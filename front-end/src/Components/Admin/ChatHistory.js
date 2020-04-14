import React from "react";
import { MDBDataTable } from "mdbreact";
import { Col, Row, Container } from "react-bootstrap";
import Axios from "axios";
class ChatHistory extends React.Component {
  state = {
    columns: [],
    rows: [],
  };
  componentDidMount() {
    this.retrieveChat();
  }

  retrieveChat = () => {
    Axios.get("http://localhost:3001/api/chatlog")
      .then((response) => {
        let dataColumns = [];
        Object.keys(response.data[0]).map((item) => {
          let newColumnEntry = {
            label: item,
            field: item,
            sort: "desc",
            width: 150
          };
          if (newColumnEntry.label === "by") {
            newColumnEntry.label = "Sender";
          }
          return dataColumns.push(newColumnEntry);
        });
        this.setState({ columns: dataColumns, rows: [...response.data] });
      })
      .catch((error) => { });
  };
  render() {
    return (
      <>
        <Container>
          <Col>
            <Row className="justify-content-md-center pt-4">
              <h1 className="text-white">Chat History</h1>
            </Row>
            <Row className="justify-content-md-center tableBackground">
              <MDBDataTable
                hover
                maxHeight="500px"
                scrollX
                scrollY
                striped
                bordered
                entries={5}
                responsive
                displayEntries={false}
                paging={true}
                data={this.state}
                noBottomColumns
                sortable
              />
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default ChatHistory;