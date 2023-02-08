import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, formActions } from "../store/index-store";
import { Button, Modal, Card } from "react-bootstrap";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ModalForm() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state);
  const showState = useSelector((state) => state.ModalSlice.show);
  const apiData = useSelector((state) => state.apiSlice);

  const closeHandeler = () => {
    dispatch(modalActions.handleClose());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formActions.setLocalStorage(formState.formSlice));
    closeHandeler();
  };
  console.log(apiData);
  return (
    <>
      <Modal show={showState} onHide={closeHandeler}>
        <Modal.Body>
          <Card style={{ width: "29rem" }}></Card>
          <Form className="m-3" onSubmit={handleSubmit}>
            <Row className="mb-5">
              <Form.Group as={Col} md="6">
                <Form.Label className="form-label">First name</Form.Label>
                <Form.Control
                  // value={formState.formSlice.name}
                  defaultValue={formState.formSlice.firstName}
                  // onChange={nameHandeler}
                  placeholder="First Name"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  defaultValue={formState.formSlice.lastName}
                  required
                  type="text"
                  placeholder="Last name"
                />
              </Form.Group>
            </Row>
            <Row className="mb-1" style={{}}>
              <Form.Group as={Col} md="6" className="mb-3">
                <Form.Label>Your portfolio Link</Form.Label>
                <Form.Control
                  defaultValue={formState.formSlice.link}
                  // onChange={linkHandeler}
                  type="url"
                  className="form-control"
                  placeholder="www.example.com"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="6" className="mb-3">
                <Form.Label>Change Image</Form.Label>
                <Form.Control
                  accept="image/png,image/jpeg"
                  type="file"
                />
              </Form.Group>
            </Row>
    
            {apiData.countriesState && apiData.cityList.cities ? (
        
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Country </Form.Label>

                  <Form.Select
                    type="text"
                    defaultValue="Select Country"
                    required
                    style={{ backgroundImage: "none" }}
                  >
                    <option>Select Country</option>{" "}
                    {apiData.countriesState.map((ele) => {
                      return (
                        <option value={ele.country}> {ele.country}</option>
                      );
                    })}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Select Country.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>City</Form.Label>
                  <Form.Select
                   
                    id="Select"
                    className="form-select"
                    required
                    style={{ backgroundImage: "none" }}
                  >
                    <option>Select City</option>{" "}
                    {apiData.cityList.cities.map((ele) => {
                      return <option value={ele}>{ele}</option>;
                    })}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please Select City.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            ) : (
              ""
            )}

            <Button
              className=" btn-cotom d-grid gap-2 col-4 mx-auto "
              type="submit"
              // onClick={handleShow}
            >
              Add Your Details
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
