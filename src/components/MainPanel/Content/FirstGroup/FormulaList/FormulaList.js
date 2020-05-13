import React from "react";
import TableList from "./Table";
import { Row, Col, Button } from "react-bootstrap";
import "../../pages.css";

const test = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <TableList />
        </Col>
      </Row>
    </>
  );
};

export default test;
