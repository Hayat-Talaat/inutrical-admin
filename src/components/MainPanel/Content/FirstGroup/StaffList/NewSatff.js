import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

const NewStaff = () => {
  return (
    <>
      <Row className="head-row">
        <Col className="flex-align">
          <div>
            <span className="component-title">Add New Staff</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="card-user add-form">
            <Card.Body className="card-body">
              <Form>
                <Row>
                  {/* Full Name */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. Mohamed Khaled"
                    />
                  </Form.Group>

                  {/* Use Name */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. Mohamed_Khaled"
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
                      placeholder="Staff Password"
                    />
                  </Form.Group>

                  {/* Phone Number */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="ex. +9666 66** ***"
                    />
                  </Form.Group>

                  {/* Select */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Label>Permission</Form.Label>
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Choose Permission
                      </option>
                      <option>Nutrition Specialist </option>
                      <option>Business Administrator </option>
                      <option>Full Admin</option>
                    </Form.Control>
                  </Form.Group>

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

export default NewStaff;
