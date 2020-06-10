import React from "react";
import TableList from "./Table";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../../pages.css";

const test = () => {
  return (
    <>
      <Row className="head-row">
        <Col md={4} className="flex-align">
          <div>
            <span className="component-title">Formula List</span>
          </div>
        </Col>
        <Col className="justify-end">
          <Link to="/new-formula">
            <Button className="add-btn">
              <img
                alt="plus"
                src="assets/img/components/Table/add patient White.png"
              />
              Add New Formula
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <TableList />
        </Col>
      </Row>
    </>
  );
};

export default test;
