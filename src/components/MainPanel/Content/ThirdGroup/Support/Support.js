import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";

// const animatedComponents = makeAnimated();

const supportOptions = [
  { value: 1, label: "Support 1" },
  { value: 2, label: "Support 2" },
  { value: 3, label: "Support 3" },
  { value: 4, label: "Support 4" }
];

const Support = () => {
  const [support, setSupport] = useState({});

  const customTheme = theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#F1F3FA",
        primary: "#061C43"
      }
    };
  };

  
  return (
    <>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Form.Group
                as={Col}
                md={4}
                sm={6}
                className="form-group"
                controlId="exampleForm.ControlSelect1"
              >
                <Form.Control as="select">
                  <option value="" disabled selected>
                    Support
                  </option>
                  <option>Support 1</option>
                  <option>Support 2</option>
                  <option>Support 3</option>
                  <option>Support 4</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Row>
              <Col md={6} className="pr-1">
                <Form.Group>
                  <Form.Label className="label-form">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-inputs"
                    placeholder="Enter Your Subject"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group className="form-group">
                  <Form.Label className="label-form">Message</Form.Label>
                  <Form.Control
                    className="form-inputs"
                    placeholder="Enter Your Message"
                    as="textarea"
                    rows={7}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="flex-justify">
              <Col md={3} sm={6}>
                <Button className="add-btn" variant="primary" type="submit">
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Support;
