import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

const STMP = () => {

  return (
    <>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col md={3} sm={6}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>New Registration</option>
                    <option>New Registration</option>
                    <option>New Registration</option>
                    <option>New Registration</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              {/* <textarea rows="5" cols="60" name="description">
                Enter details here...
              </textarea> */}
              <Form.Control as="textarea" rows="5" wrap="hard">
                Dear, 
                Thank you for registering with us. Your subscription
                starts in 12/04/2020 and ends in 12/04/2021. Your Admin username
                is: mkaath Your password is: 3254dfc43 and you can create up to
                20 user. Best Regards iNutrical Company
              </Form.Control>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default STMP;
