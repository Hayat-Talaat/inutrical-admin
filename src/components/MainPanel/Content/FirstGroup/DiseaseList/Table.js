import React from "react";
import { Row, Col, Table, Pagination } from "react-bootstrap";
import "../../pages.css";

function createData(
  mainDisease,
  stressFactors,
  additionalFactors,
  proteinNeeds
) {
  return { mainDisease, stressFactors, additionalFactors, proteinNeeds };
}

const rows = [
  createData("Brain/Spinal Cord Injuries", 1.6, 1.5, 1.5 - 2),
  createData("Burns", 1.7, "--", 1.5 - 2),
  createData("Brain/Spinal Cord Injuries", 22.6, 4.6, 1.5 - 3),
  createData("Burns", 1.7, "--", 1.5 - 2),
  createData("Brain/Spinal Cord Injuries", 1.6, 4.9, 1.5 - 2),
  createData("Burns", 1.7, "--", 1.5 - 2),
  createData("Brain/Spinal Cord Injuries", "--", 1.6, 1.3 - 5),
  createData("Burns", 1.7, "--", 1.5 - 2),
  createData("Brain/Spinal Cord Injuries", 1.6, 1.5, 5.5 - 6),
  createData("Burns", 1.7, "--", 1.5 - 2)
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

const test = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <Row>
            <Col md={4} className="flex-align">
              <span className="table-card-header">
                Showing "1 to 10" out of 20
              </span>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <div className="table-card-header-img">
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
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <Table striped responsive className="table">
              <thead className=" text-primary">
                <th>Main disease</th>
                <th>Stress factors to estimate energy needs</th>
                <th>Additional factors</th>
                <th>Stress factors to estimate protein needs</th>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.mainDisease}>
                    <td>{row.mainDisease}</td>
                    <td>{row.stressFactors}</td>
                    <td>{row.additionalFactors}</td>
                    <td>{row.proteinNeeds}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div className="card-footer">
          <div className="flex-justify">{paginationBasic}</div>
        </div>
      </div>
    </>
  );
};

export default test;
