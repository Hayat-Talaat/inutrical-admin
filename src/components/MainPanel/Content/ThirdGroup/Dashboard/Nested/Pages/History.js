import React from "react";
import {
  Row,
  Col,
  Table,
  Card,
  Button
} from "react-bootstrap";
import { PatientData } from './PatientDetails'
import { Link } from "react-router-dom";
// import "../../pages.css";

function createData(id, clinicalDietitian, physicianName, Date) {
  return { id, clinicalDietitian, physicianName, Date };
}

const rows = [
  createData("012012", "Khaled Mohammed", "Blake Berry", "21/04/2020"),
  createData("012015", "Khaled Mohammed", "Derek Seilva", "17/12/2021"),
  createData("345821", "Mohammed Abd Elaziz", "Blake Berry", "09/05/2019"),
  createData("883330", "Mohammed Abd Elaziz", "Blake Berry", "09/05/2019")
];


const HistoryPatients = () => {
  return (
    <>
      <Row className="head-row">
        <Col md={4} className="flex-align">
          <div>
            <span className="component-title">Exciting Patient > History</span>
          </div>
        </Col>
        <Col className="justify-end">
          <Link to="/new">
            <Button className="add-btn">
              <img
                alt="plus"
                src="assets/img/components/Table/add patient White.png"
              />
              Add New Patient
            </Button>
          </Link>
        </Col>
      </Row>
 
      <Card className="card">
        <Card.Header className="card-header">
          <Row>
            <Col>
              <PatientData />
            </Col>
          </Row>
        </Card.Header>

        <Card.Body className="card-body">
          <div className="table-responsive">
            <Table striped responsive className="table">
              <thead className=" text-primary">
                <th>Clinical Dietitian </th>
                <th>Physician Name</th>
                <th>Date</th>

                <th className="text-center">Medical History</th>
                <th className="text-center">Lab Results</th>
                <th className="text-center">Diet Plan</th>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.id}>
                    <td>{row.clinicalDietitian}</td>
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
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>

        <Card.Footer className="card-footer flex-justify mb-5">
          <Link to="/follow-up">
            <Button type="submit" className="add-btn btn">
              Follow Up
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default HistoryPatients;
