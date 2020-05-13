import React from "react";
import { Row, Col, Table, Pagination } from "react-bootstrap";
import "../../pages.css";

function createData(fullName, userName, email, phoneNum, permition) {
  return { fullName, userName, email, phoneNum, permition };
}

const rows = [
  createData(
    "Mohamed Khaled",
    "Mohamed_Khaled",
    "email@gmail.com",
    "+966 66 *** ****",
    "Nutrition Specialist"
  ),
  createData(
    "Mohamed Abdelaziz",
    "Mohamed_Abdelaziz",
    "email@gmail.com",
    "+966 66 *** ****",
    "Business/Admission"
  ),
  createData(
    "Khaled Mohammed",
    "Khaled_Mohammed",
    "email@gmail.com",
    "+966 66 *** ****",
    "Full Admin"
  ),
  createData(
    "Yasser Ahmed Abdallah",
    "Yasser_Ahmed_Abdallah",
    "email@gmail.com",
    "+966 66 *** ****",
    "Nutrition Specialist"
  ),
  createData(
    "Khaled Mohammed",
    "Khaled_Mohammed",
    "email@gmail.com",
    "+966 66 *** ****",
    "Full Admin"
  ),
  createData(
    "Yasser Ahmed Abdallah",
    "Yasser_Ahmed_Abdallah",
    "email@gmail.com",
    "+966 66 *** ****",
    "Nutrition Specialist"
  ),
  createData(
    "Khaled Mohammed",
    "Khaled_Mohammed",
    "email@gmail.com",
    "+966 66 *** ****",
    "Full Admin"
  ),
  createData(
    "Yasser Ahmed Abdallah",
    "Yasser_Ahmed_Abdallah",
    "email@gmail.com",
    "+966 66 *** ****",
    "Nutrition Specialist"
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
                <th>Full Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Permition</th>
                <th className="text-center">Action</th>
              </thead>

              <tbody>
                {rows.map(row => (
                  <tr key={row.fullName}>
                    <td>{row.fullName}</td>
                    <td>{row.userName}</td>
                    <td>{row.email}</td>
                    <td>{row.phoneNum}</td>
                    <td>{row.permition}</td>
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
