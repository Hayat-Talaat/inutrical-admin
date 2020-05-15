import React from "react";
import { Row, Col, Card } from "react-bootstrap";
const AdminHospital = () => {
  return (
    <>
      <Row>
        <Col>
          <p className="component-header">Hospital</p>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6}>
          <Card className="text-center admin-hos">
            <Card.Body className="px-4">
              <Card.Img
                className="mt-2"
                variant="top"
                src="assets/img/components/home/Group 16.png"
              />
              <Card.Title className="mt-4">Add New Patient</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="text-center admin-hos">
            <Card.Body className="px-4">
              <Card.Img
                className="mt-2"
                variant="top"
                src="assets/img/components/home/Group 11.png"
              />
              <Card.Title className="mt-4">Existing Patient</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="text-center admin-hos">
            <Card.Body className="px-4">
              <Card.Img
                className="mt-2"
                variant="top"
                src="assets/img/components/home/Group 15.png"
              />
              <Card.Title className="mt-4">History</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AdminHospital;
