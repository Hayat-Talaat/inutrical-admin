import React from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const FollowUp = () => {
  return (
    <>
      <Row className="head-row">
        <Col md={4} className="flex-align">
          <div>
            <span className="component-title">
              Exciting Patient > Follow Up
            </span>
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

      <Card className="card-user add-form">
        <Card.Body className="card-body pb-3 pt-4">
          <Form>
            <Row>
              {/* First Row */}
              <Form.Group
                as={Col}
                md="4"
                className="form-group"
                controlId="patient-No"
              >
                <Form.Label>Patient Number</Form.Label>
                <Form.Control
                  className="form-control"
                  type="number"
                  placeholder="123456"
                  disabled
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                className="form-group"
                controlId="formBasicEmail"
              >
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  placeholder="Fulll name"
                  value="Jone Deo"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                className="form-group"
                controlId="formBasicEmail"
              >
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  value="Male"
                  disabled
                />
              </Form.Group>

              {/* Second Row */}
              <Form.Group
                as={Col}
                md={4}
                className="form-group"
                controlId="patient-No"
              >
                <Form.Label>Date of Birth(DOB)</Form.Label>
                <Form.Control
                  className="form-control"
                  type="date"
                  placeholder="05/07/2000"
                  value="05/07/2000"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md={4}
                className="form-group"
                controlId="formBasicEmail"
              >
                <Form.Label>Admition Date</Form.Label>
                <Form.Control
                  className="form-control"
                  type="date"
                  placeholder="dd/mm/yy"
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="form-group"
                controlId="formBasicEmail"
              >
                <Form.Label>Physician Name</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  placeholder="Physician Name"
                  value="Blake Berry"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md={4}
                className="form-group"
                controlId="formBasicEmail"
              >
                <Form.Label>Weight(KG)</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  placeholder="Weight"
                  value="60"
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md={4}
                className="form-group"
                controlId="formBasicEmail"
              >
                <Form.Label>Height(CM)</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  placeholder="Height"
                  value="160"
                />
              </Form.Group>

              {/* Third Row */}

              <Col className="flex-align flex-justify">
                <div className="profile">
                  <button className="add-btn btn btn-primary ">
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default FollowUp;
