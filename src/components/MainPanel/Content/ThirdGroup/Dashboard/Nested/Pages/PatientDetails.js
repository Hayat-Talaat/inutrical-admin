import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PatientData = () => {
  return (
    <>
        <Row className="patient-info mt-4 mb-4">
          <Col>
            <p>Patient Number : 012012</p>
            <p>Date of Birth (DOB) : 02/05/2020</p>
            <p>Height (CM) : 180</p>
          </Col>
          <Col>
            <p>Patient Name : Jone Doe</p>
            <p>Admission Date : 02/05/2020</p>
            <p>Physician Name : Jone Doe</p>
          </Col>
          <Col>
            <p>Gender : Male</p>
            <p>Weight (KG) : 80</p>
          </Col>
        </Row>
   
    </>
  );
};

const PatientButtons = () => {
  return (
    <>
      <Row className="text-center mb-5">
        <Col className="justify-end">
          <Link to="/follow-up">
          <div className="patient-btns">
            <img
              alt="Follow-up"
              src="assets/img/components/home/Follow up.png"
            />
            <p>Follow Up</p>
            </div>
            </Link>
        </Col>
        <Col className="justify-start">
          <Link to="/history">
          <div className="patient-btns">
            <img alt="Follow-up" src="assets/img/components/home/History.png" />
            <p>History</p>
            </div>
            </Link>
        </Col>
      </Row>
    </>
  );
};

export { PatientButtons, PatientData };
