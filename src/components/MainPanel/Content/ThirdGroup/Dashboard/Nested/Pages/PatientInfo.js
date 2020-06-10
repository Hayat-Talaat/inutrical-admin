import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { PatientData, PatientButtons } from "./PatientDetails";
import { Link } from "react-router-dom";

const PatientInfo = () => {
  return (
    <>
      <Row className="head-row">
        <Col md={4} className="flex-align">
          <div>
            <span className="component-title">Patient Information</span>
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

      <Row>
        <Col md={12}>
          <Card className="card-user add-form pb-5">
            <Card.Body className="card-body">
              
              {/* Patient Info */}
              <Row>
                <Col>
                  <PatientData />
                  <PatientButtons />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PatientInfo;
