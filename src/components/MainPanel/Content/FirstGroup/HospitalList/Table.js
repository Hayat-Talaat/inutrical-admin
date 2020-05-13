import React from "react";
import { Row, Col, Table, Pagination } from "react-bootstrap";
import "../../pages.css";

function createData(
  hospitalName,
  city,
  hospitalType,
  users,
  contactPerson,
  phoneNum,
  patients
) {
  return {
    hospitalName,
    city,
    hospitalType,
    users,
    contactPerson,
    phoneNum,
    patients
  };
}

const rows = [
  createData(
    "King Salman Hospital",
    "Riyadh",
    "MOH Hospital",
    50,
    "Mohamed Khaled",
    "+966 66 *** ****",
    200
  ),
  createData(
    "King Salman Hospital",
    "Riyadh",
    "MOH Hospital",
    25,
    "Mohamed Khaled",
    "+966 66 *** ****",
    100
  ),
  createData(
    "King Salman Hospital",
    "Riyadh",
    "MOH Hospital",
    30,
    "Mohamed Khaled",
    "+966 66 *** ****",
    150
  ),
  createData(
    "King Salman Hospital",
    "Riyadh",
    "MOH Hospital",
    70,
    "Mohamed Khaled",
    "+966 66 *** ****",
    200
  ),
  createData(
    "King Salman Hospital",
    "Riyadh",
    "MOH Hospital",
    50,
    "Mohamed Khaled",
    "+966 66 *** ****",
    200
  ),
  createData(
    "King Salman Hospital",
    "Riyadh",
    "MOH Hospital",
    50,
    "Mohamed Khaled",
    "+966 66 *** ****",
    200
  ),
  createData(
    "King Salman Hospital",
    "Riyadh",
    "MOH Hospital",
    50,
    "Mohamed Khaled",
    "+966 66 *** ****",
    200
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
            <Table striped responsive className="table">
              <thead className=" text-primary">
                <th>Hospital Name</th>
                <th>City</th>
                <th>Hospital Type</th>
                <th>Users</th>
                <th>Contact Person</th>
                <th>Phone Number</th>
                <th>Patients</th>
                <th className="text-center">Action</th>
              </thead>

              <tbody>
                {rows.map(row => (
                  <tr key={row.hospitalName}>
                    <td>{row.hospitalName}</td>
                    <td>{row.city}</td>
                    <td>{row.hospitalType}</td>
                    <td>{row.users}</td>
                    <td>{row.contactPerson}</td>
                    <td>{row.phoneNum}</td>
                    <td>{row.patients}</td>
                    <td className="eye-icon text-center">
                      <img
                        alt="eye"
                        src="assets/img/components/Table/icons8-eye-100@2x.png"
                      />
                    </td>
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
