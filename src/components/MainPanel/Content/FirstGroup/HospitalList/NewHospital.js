import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

const NewHospital = () => {
  return (
    <>
      <Row className="head-row">
        <Col className="flex-align">
          <div>
            <span className="component-title">Add New Hospital</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="card-user add-form">
            <Card.Body className="card-body">
              <Form>
                <Row>
                  <Col md={12}>
                    <div className="form-head-title">
                      <p>Hospital Information:</p>
                    </div>
                  </Col>

                  {/* Select */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Label>Hospital Type</Form.Label>
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Choose Type
                      </option>
                      <option>MOH Hospital</option>
                      <option>Military Hospital</option>
                      <option>University Hospital</option>
                      <option>Private Hospital</option>
                    </Form.Control>
                  </Form.Group>

                  {/* Name */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. King Salman Hospital"
                    />
                  </Form.Group>

                  {/* City */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. Riyadh"
                    />
                  </Form.Group>

                  {/* Country */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Counntry:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. Saudi Arabia"
                    />
                  </Form.Group>

                  {/* Adress */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Adress:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. Albadya.st"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Col md={12}>
                    <div className="form-head-title">
                      <p>Admin Information:</p>
                    </div>
                  </Col>

                  {/* Contact Person */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Contact Person:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. Mohamed Khaled"
                    />
                  </Form.Group>

                  {/* Admin User */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Admin User:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. Mohamed_Khaled"
                    />
                  </Form.Group>

                  {/* Contact Number */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Contact Number:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="ex. +9666 66** ***"
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="email"
                      placeholder="ex. email@gmail.com"
                    />
                  </Form.Group>

                  {/* Password */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="password"
                      placeholder="Admin Password"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Col md={12}>
                    <div className="form-head-title">
                      <p>User Information:</p>
                    </div>
                  </Col>

                  {/* Users allowed */}
                  <Form.Group
                    as={Col}
                    md={3}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Users allowed:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="ex. 50"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Col md={12}>
                    <div className="form-head-title">
                      <p>Subscrition Date:</p>
                    </div>
                  </Col>

                  {/* Start Date */}
                  <Form.Group
                    as={Col}
                    md={3}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="date"
                      placeholder="ex. Mohamed_Khaled"
                    />
                  </Form.Group>

                  {/* End Date */}
                  <Form.Group
                    as={Col}
                    md={3}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="date"
                      placeholder="ex. Mohamed_Khaled"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Col xs={12} className="justify-end mt-3 mb-5">
                    {/* <input type="submit" value="test" /> */}
                    <Button type="submit" className="add-btn btn">
                      Save
                    </Button>
                    <Button className="add-btn btn cancel-btn ml-3">
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewHospital;
