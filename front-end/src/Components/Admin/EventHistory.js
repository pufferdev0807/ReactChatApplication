import React from "react";
import { MDBDataTable } from "mdbreact";
import { Col, Row, Container } from "react-bootstrap";
import Axios from "axios";

class EventHistory extends React.Component {
  state = {
    columns: [],
    rows: [],
  };
  componentDidMount() {
    this.retrieveEvents();
  }

  retrieveEvents = () => {
    Axios.get("http://localhost:3001/api/events")
      .then((response) => {
        let dataColumns = [];
        Object.keys(response.data[3]).map((item) => {
          let newColumnEntry = {
            label: item,
            field: item,
            sort: "desc",
            width: 150
          };
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
              <h1 className="text-white">Event History</h1>
            </Row>
            <Row className="justify-content-md-center tableBackground">
              <MDBDataTable
                hover
                striped
                maxHeight="500px"
                bordered
                responsive
                entries={5}
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

export default EventHistory;
