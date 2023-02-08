import React, { useEffect, useState } from "react";
import "./DetailForm.css";
import { formActions ,apiActions} from "../store/index-store";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { modalActions } from "../store/index-store";

function DetailForm(props) {
  const [countriesState, setCountriesState] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cityList, setCityList] = useState({
    cities: [""],
  });
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [enteredLink, setEnteredLink] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const formState = useSelector((state) => state.formSlice);
  const modalState = useSelector((state) => state.ModalSlice);
  const fetchApiData = async () => {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries"
    );
    if (!response.ok) {
      throw new Error("Somthing Went Wrong");
    }
    const responseData = await response.json();

    setCountriesState(responseData.data);
  };

  useEffect(() => {
    fetchApiData();
    filterCitiesHandeler();
  }, [selectedCountry]);

  const countryHandeler = (e) => {
    setSelectedCountry(e.target.value);
  };
  const filterCitiesHandeler = () => {
    const filteredObject = countriesState.filter(function (i, n) {
      return i.country == selectedCountry;
    });
    if (selectedCountry) {
      setCityList(filteredObject[0]);
    }
  };
  const nameHandeler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandeler = (e) => {
    setLastName(e.target.value);
  };
  const selecetedCityHandeler = (e) => {
    setSelectedCity(e.target.value);
  };

  const imageHandeler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
    
  };

  const linkHandeler = (e) => {
    setEnteredLink(e.target.value);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (form.checkValidity() === true) {
      e.preventDefault();
      // handleShow();

      dispatch(modalActions.handleShow())
      console.log(modalState.show)
    }

    setValidated(true);
    dispatch(apiActions.setApiData({countriesState:countriesState ,
    cityList:cityList}))

    dispatch(
      formActions.submitForm({
        firstName: firstName,
        lastName:lastName,
        image: selectedImage,
        country: selectedCountry,
        cities: [selectedCity],
        link: enteredLink,
      })
    );
  };

  return (
    <div className=" form-container container w-auto border rounded mt-5 ">
      <Form
        className="m-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="6" >
            <Form.Label>First name</Form.Label>
            <Form.Control
            style={{'backgroundImage':"none"}}
              value={firstName}
              onChange={nameHandeler}
              placeholder="First Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your First Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" >
            <Form.Label>Last name</Form.Label>
            <Form.Control
            style={{ backgroundImage: 'none' }}
              value={lastName}
              required
              type="text"
              placeholder="Last name"
              onChange={lastNameHandeler}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Last Name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" >
            <Form.Label>Country </Form.Label>
            <Form.Select onChange={countryHandeler} type="text" defaultValue='Select Country' required style={{ backgroundImage: 'none' }} >
              <option>Select Country</option>{" "}
              {countriesState.map((ele) => {
                return <option value={ele.country}> {ele.country}</option>;
              })}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select Country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" >
            <Form.Label>City</Form.Label>
            <Form.Select
              // placeholder="Select County first"
              onChange={selecetedCityHandeler}
              id="Select"
              className="form-select"
              required
              style={{ backgroundImage: 'none' }}
            >
              <option>Select City</option>{" "}
              {cityList.cities.map((ele) => {
                return <option value={ele}>{ele}</option>;
              })}
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              Please Select City.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Label>Attatch Your Image</Form.Label>
            <Form.Control
            style={{ backgroundImage: 'none' }}
              accept="image/png,image/jpeg"
              type="file"
              onChange={imageHandeler}
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Label>Add a link to your portfolio</Form.Label>
            <Form.Control
              onChange={linkHandeler}
              type="url"
              className="form-control"
              placeholder="www.example.com"
              required
              style={{ backgroundImage: 'none' }}
            />
          </Form.Group>
        </Row>
        <Button
          className=" btn-cotom d-grid gap-2 col-4 mx-auto "
          type="submit"
        >
          Add Your Details
        </Button>
      </Form>
      
    </div>
  );
}

export default DetailForm;
