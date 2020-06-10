import React from "react";
import { Row, Col, Table, Pagination, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../../pages.css";

function createData(patientNo, patientName, physicianName, Date ) {
  return { patientNo, patientName, physicianName, Date };
}

const rows = [
  createData("012012", "Khaled Mohammed", "Blake Berry", "21/04/2020"),
  createData("012015", "Khaled Mohammed", "Derek Seilva", "17/12/2021"),
  createData("345821", "Mohammed Abd Elaziz", "Blake Berry", "09/05/2019"),
  createData("883330", "Mohammed Abd Elaziz", "Blake Berry", "09/05/2019"),
  createData("990044", "Khaled Mohammed", "Derek Seilva", "30/02/2018"),
  createData("889900", "Mohammed Abd Elaziz", "Blake Berry", "02/06/2020"),
  createData("338822", "Mohammed Abd Elaziz", "Blake Berry", "02/06/2020"),
  createData("112299", "Mohammed Abd Elaziz", "Blake Berry", "02/06/2020"),
  createData("338877", "Mohammed Abd Elaziz", "Blake Berry", "02/06/2020"),
  createData("029876", "Mohammed Abd Elaziz", "Blake Berry", "02/06/2020")
];

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
  </div>
);

const HistoryPatients = () => {
  return (
    <>
      <Row className="head-row">
        <Col className="flex-align">
          <div>
            <span className="component-title">History</span>
          </div>
        </Col>
      </Row>

      <Card className="card">
        <Card.Header className="card-header">
          <Row>
            <Col md={4} className="flex-align">
              <span className="table-card-header">
                Showing "1 to 10" out of 30
              </span>
            </Col>
            <Col className="justify-end">
              <div className="table-card-header-img">
                <Form className="inline-block">
                  <div className="input-group no-border">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value=""
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="nc-icon nc-zoom-split"></i>
                      </div>
                    </div>
                  </div>
                </Form>

                <img
                  alt="Sort"
                  src="assets/img/components/Table/Filter Dark.png"
                />
                <img
                  alt="Sort"
                  src="assets/img/components/Table/Sort by Dark@2x.png"
                />
              </div>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body className="card-body">
          <div className="table-responsive">
            <Table striped responsive className="table">
              <thead className=" text-primary">
                <th>Patient No.</th>
                <th>Patient Name</th>
                <th>Physician Name</th>
                <th>Date</th>

                <th className="text-center">Medical History</th>
                <th className="text-center">Lab Results</th>
                <th className="text-center">Diet Plan</th>
                <th className="text-center">Action</th>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.patientNo}>
                    <td>{row.patientNo}</td>
                    <td>{row.patientName}</td>
                    <td>{row.physicianName}</td>
                    <td>{row.Date}</td>
                    <td className="eye-icon text-center">
                      <img
                        alt="eye"
                        src="assets/img/components/Table/PDF.png"
                      />
                    </td>
                    <td className="eye-icon text-center">
                      <img
                        alt="eye"
                        src="assets/img/components/Table/PDF.png"
                      />
                    </td>
                    <td className="eye-icon text-center">
                      <img
                        alt="eye"
                        src="assets/img/components/Table/PDF.png"
                      />
                    </td>
                    <td className="eye-icon text-center">
                      <Link to="/patient-info">
                        <img
                          alt="eye"
                          src="assets/img/components/Table/icons8-eye-100@2x.png"
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>

        <Card.Footer className="card-footer">
          <div className="flex-justify">{paginationBasic}</div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default HistoryPatients;
