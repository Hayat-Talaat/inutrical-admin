import React from "react";
import { Row, Col, Table, Pagination } from "react-bootstrap";
import "../../pages.css";


function createData(
  formulaCategories,
  formulakCal,
  company,
  servingSize,
  totalCalories,
  pro,
  CHO,
  Fat,
  Na,
  Kmg,
  fiber,
  fluid
) {
  return {
    formulaCategories,
    formulakCal,
    company,
    servingSize,
    totalCalories,
    pro,
    CHO,
    Fat,
    Na,
    Kmg,
    fiber,
    fluid
  };
}

const rows = [
  createData(
    "Standard",
    "Ensure 1.0",
    "Abbott",
    237,
    220,
    9,
    32,
    6,
    210,
    470,
    0,
    172
  ),
  createData(
    "Standard",
    "Ensure 1.0",
    "Abbott",
    237,
    220,
    9,
    32,
    6,
    210,
    470,
    0,
    172
  ),
  createData(
    "Standard",
    "Ensure 1.0",
    "Abbott",
    237,
    220,
    9,
    32,
    6,
    210,
    470,
    0,
    172
  )
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
                Showing "1 to 10" out of 30
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
            <Table scrollX striped responsive className="table">
              <thead className=" text-primary">
                <th>Formula Categories</th>
                <th>Formula with kcal/ml</th>
                <th>Company</th>
                <th>Serving Size (ml)</th>
                <th>Total Calories per Can</th>
                <th>Pro (g)</th>
                <th>CHO (g)</th>
                <th>Fat (g)</th>
                <th>Na (mg)</th>
                <th>K (mg)</th>
                <th>Fiber</th>
                <th>Fluid (ml)</th>
              </thead>

              <tbody>
                {rows.map(row => (
                  <tr key={row.formulaCategories}>
                    <td>{row.formulaCategories}</td>
                    <td>{row.formulakCal}</td>
                    <td>{row.company}</td>
                    <td>{row.servingSize}</td>
                    <td>{row.totalCalories}</td>
                    <td>{row.pro}</td>
                    <td>{row.CHO}</td>
                    <td>{row.Fat}</td>
                    <td>{row.Na}</td>
                    <td>{row.Kmg}</td>
                    <td>{row.fiber}</td>
                    <td>{row.fluid}</td>
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
