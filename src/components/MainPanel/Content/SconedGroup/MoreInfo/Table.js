import React from "react";
import { Row, Col, Table, Form } from "react-bootstrap";
import "../../pages.css";

function createData(word, meaning) {
  return { word, meaning };
}

const rows = [
  createData("IBW", "Ideal Body Weight. IBW = 22 x Height"),
  createData("BMI", "Body Mass Index. BMI = Actual Weight      / Height "),
  createData("ABW", "Adjusted Body Weight. IBW + 0.4 (Actual Weight     – IBW)")
];


const test = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <Row>
            <Col md={4} className="flex-align">
              <span className="table-card-header">
                Showing "1 to 3" out of 3
              </span>
            </Col>
            <Col md={{ span: 5, offset: 3 }}>
              <div className="table-card-header-img">
                <Row>
                  <Col md={9}>
                    <Form className="search-table">
                      <div class="input-group no-border">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search..."
                          value=""
                        />
                        <div class="input-group-append">
                          <div class="input-group-text">
                            <i class="nc-icon nc-zoom-split"></i>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </Col>
                  <Col md={2}>
                    <img
                      alt="Sort"
                      src="assets/img/components/Table/Sort by Dark@2x.png"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <Table striped responsive className="table">
              <thead className=" text-primary">
                <th>Word</th>
                <th>Refers to / Meaning</th>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.word}>
                    <td>{row.word}</td>
                    <td>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default test;
