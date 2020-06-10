import React from "react";
import { Row, Col, Button, Card, Form } from 'react-bootstrap';
import { PatientData, PatientButtons } from "./Pages/PatientDetails";
import { Link } from "react-router-dom";

const ExcitingPatientSearch = () => {
  return (
    <>
      <Row className="head-row">
        <Col md={4} className="flex-align">
          <div>
            <span className="component-title">Exciting Patient</span>
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
              {/* Search Form */}
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="formGroupEmail">
                  <Form.Label>Patient Number</Form.Label>
                  <Form.Control type="number" placeholder="ex. 012012" />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formGroupPassword">
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control type="text" placeholder="ex. Joun Doe" />
                </Form.Group>
                <Col md={2} className="align-end">
                  <Button type="submit" className="add-btn btn search-btn">
                    Search
                  </Button>
                </Col>
              </Form.Row>
            
              {/* Patient Info */}
              <Row>
                
                <Col>
                  <PatientData />
                  <PatientButtons/>
                </Col>
            </Row>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ExcitingPatientSearch;
