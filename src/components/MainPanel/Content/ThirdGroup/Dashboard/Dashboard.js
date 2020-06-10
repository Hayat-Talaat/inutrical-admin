import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link to="/new">
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
          </Link>
        </Col>

        <Col md={3} sm={6}>
          <Link to="/search">
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
          </Link>
        </Col>

        <Col md={3} sm={6}>
          <Link to="/patients-history">
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
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default AdminHospital;
