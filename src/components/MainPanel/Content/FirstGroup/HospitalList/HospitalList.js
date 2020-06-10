import React from "react";
import TableList from "./Table";
import { Row, Col, Button } from "react-bootstrap";
import "../../pages.css";
import { Link } from "react-router-dom";

const test = () => {
  return (
    <>
      <Row className="head-row">
        <Col md={4} className="flex-align">
          <div>
            <span className="component-title">Hospitals List</span>
          </div>
        </Col>
        <Col className="justify-end">
          <Link to="/new-hospital">
            <Button className="add-btn">
              <img
                alt="plus"
                src="assets/img/components/Table/add patient White.png"
              />
              Add New Hospital
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
