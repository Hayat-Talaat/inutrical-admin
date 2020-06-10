import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";

// const animatedComponents = makeAnimated();

const STMPOptions = [
  { value: 1, label: "New Registration" },
  { value: 2, label: "Forget Password" },
  { value: 3, label: "Logout" },
];

const STMP = () => {
  const [STMP, setSTMP] = useState({});

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
                    Select STMP Message
                  </option>
                  <option>New Registration</option>
                  <option>Forget Password</option>
                  <option>Login</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group className="form-group">
                  <Form.Label className="label-form">Message</Form.Label>
                  <Form.Control
                    className="form-inputs"
                    placeholder="Enter Your Message"
                    as="textarea"
                    value="Dear,

Thank you for registering with us. Your subscription starts in 12/04/2020 and ends in 12/04/2021. 

Your Admin username is: mkaath
Your password is: 3254dfc43

 and you can create up to 20 user.

Best Regards
iNutrical Company"
                    rows={7}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default STMP;
