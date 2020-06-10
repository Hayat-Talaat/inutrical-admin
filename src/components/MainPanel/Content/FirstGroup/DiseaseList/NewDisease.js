import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

const NewDisease = () => {
  return (
    <>
      <Row className="head-row">
        <Col className="flex-align">
          <div>
            <span className="component-title">Add New Disease</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="card-user add-form">
            <Card.Body className="card-body">
              <Form>
                <Row>
                  {/* Main disease */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Main disease:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. lorem epsum"
                    />
                  </Form.Group>

                  {/* Stress factors to estimate energy needs */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>
                      Stress factors to estimate energy needs:
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. lorem epsum"
                    />
                  </Form.Group>

                  {/* Additional factors */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Additional factors:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. lorem epsum"
                    />
                  </Form.Group>

                  {/* Stress factors to estimate protein needs */}
                  <Form.Group
                    as={Col}
                    md={6}
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>
                      Stress factors to estimate protein needs:
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="ex. lorem epsum"
                    />
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

export default NewDisease;
