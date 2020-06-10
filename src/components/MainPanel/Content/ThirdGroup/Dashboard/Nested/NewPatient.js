import React from "react";
import { Card, Form, Row, Col, Button, InputGroup } from "react-bootstrap";

// import { useForm } from "react-hook-form";

const NewPatient = () => {
  // const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = data => console.log(data);

  // console.log("test", watch("example")); // watch input value by passing the name of it

  return (
    <>
      <Row className="head-row">
        <Col className="flex-align">
          <div>
            <span className="component-title">New Patient</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="card-user add-form">
            <Card.Body className="card-body">
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
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    className="form-group"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Gender
                      </option>
                      <option>Male</option>
                      <option>Famale</option>
                    </Form.Control>
                  </Form.Group>

                  {/* Second Row */}
                  <Form.Group
                    as={Col}
                    md="3"
                    className="form-group"
                    controlId="patient-No"
                  >
                    <Form.Label>Date of Birth(DOB)</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="date"
                      placeholder="dd/mm/yy"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
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
                    md="3"
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Weight(KG)</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="Weight"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    className="form-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Height(CM)</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="Height"
                    />
                  </Form.Group>

                  {/* Third Row */}
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
                    />
                  </Form.Group>
                  <Col className="flex-align flex-justify">
                    <div className="profile">
                      <button disabled className="add-btn btn btn-primary ">
                        Apply
                      </button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <div className="bg-gray">
                      <Row>
                        <Col>
                          <span>IBW : 66kg</span>
                        </Col>
                        <Col>
                          <span>BMI : 27 kg/m (overweight)</span>
                        </Col>
                        <Col>
                          <span>ABW : N/A</span>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Form.Group
                    as={Col}
                    md="6"
                    className="form-group"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Choose Main Disease
                      </option>
                      <option>Burns</option>
                      <option>Fever</option>
                      <option>Burns</option>
                      <option>Fever</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    className="form-group"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Choose Formula Category
                      </option>
                      <option>Burns</option>
                      <option>Fever</option>
                      <option>Burns</option>
                      <option>Fever</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    className="form-group"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Choose Route of Feeding
                      </option>
                      <option>Burns</option>
                      <option>Fever</option>
                      <option>Burns</option>
                      <option>Fever</option>
                    </Form.Control>
                  </Form.Group>

                  <Col md={6}>
                    <Row>
                      <Form.Label as="legend" column sm={4}>
                        Restricted Fluids:
                      </Form.Label>

                      <Col sm={8} className="align-center">
                        {["radio"].map(type => (
                          <div key={`inline-${type}`} className="">
                            <Form.Check
                              inline
                              label="Yes"
                              type={type}
                              id="yes"
                              name="restricted-fluids"
                            />
                            <Form.Check
                              inline
                              label="No"
                              type={type}
                              id="no"
                              name="restricted-fluids"
                            />
                          </div>
                        ))}
                      </Col>
                    </Row>
                  </Col>

                  <Col md={12} className="justify-end">
                    <div className="update">
                      <button disabled className="btn add-btn btn-round">
                        Show Results
                      </button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Label>Patient's daily Needs</Form.Label>
                    <div className="bg-gray">
                      <Row>
                        <Col md={8}>
                          <p>
                            Total Calories :
                            <span className="text-blue"> 20 </span>
                            Kcal/day
                          </p>
                          <p>
                            Protein :<span className="text-blue"> 20 </span>
                            g/day
                          </p>
                          <p>
                            Fluids : iNuterical Suggests giving the patient
                            between
                            <span className="text-blue"> 1000 - 1500 </span>
                            ml/day
                          </p>
                        </Col>
                        <Col md={4} className="border-lf">
                          <p>
                            Formula Name :
                            <span className="text-blue"> Standerd </span>
                          </p>
                          <p>
                            Total volume :
                            <span className="text-blue"> --- </span>
                            ml
                          </p>
                          <p>
                            Total Calories :
                            <span className="text-blue"> --- </span>
                            Kacl
                          </p>
                          <p>
                            Protein : <span className="text-blue"> --- </span> g
                          </p>
                          <p>
                            Crab : <span className="text-blue"> --- </span> g
                          </p>
                          <p>
                            Fat : <span className="text-blue"> --- </span> g
                          </p>
                          <p>
                            Na : <span className="text-blue"> --- </span> mg
                          </p>
                          <p>
                            K : <span className="text-blue"> --- </span> mg
                          </p>
                          <p>
                            Water : <span className="text-blue"> --- </span> ml
                          </p>
                          <p>
                            Number of cans:
                            <span className="text-blue"> 5</span>
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <Form.Label>Diet Paln: </Form.Label>
                    <div className="bg-gray">
                      <Row>
                        <Col md={12}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="bg-gray mt-0 mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </div>
                  </Col>

                  <Form.Group
                    as={Col}
                    md={3}
                    className="form-group mb-0"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Choose Additives
                      </option>
                      <option>Protein</option>
                      <option>Carbohydrates</option>
                      <option>Fats</option>
                    </Form.Control>
                  </Form.Group>

                  <Col md={5} className="flex gray">
                    No. of Servings
                    <span className="counter-icon"> - </span>
                    <span> 2 </span>
                    <span className="counter-icon"> + </span>
                    Tbsp
                  </Col>

                  <Col md={4} className="flex gray">
                    Additives Provide :
                    <span className="text-blue"> 14g Protein </span>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mt-4">
                      <Form.Label className="label-form">Add Notes</Form.Label>
                      <Form.Control
                        className="form-inputs"
                        placeholder="Add Your Notes"
                        as="textarea"
                        rows={7}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="justify-end">
                    {/* <input type="submit" value="test" /> */}
                    <Button type="submit" className="add-btn btn">
                      Save
                    </Button>
                    <Button className="add-btn btn cancel-btn ml-3">Cancel</Button>
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

export default NewPatient;
