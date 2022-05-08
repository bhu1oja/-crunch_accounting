import React, { useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import AppModal from "../AppModal/AppModal";
import * as COLORS from "../../components/Constant/Colors";
import AppAlert from "../AppAlert/AppAlert";

const AppNavbar = (props) => {
  //define variable for modal and alert show
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // error function to check if any field is empty before submitting form
  const isError = () => {
    if (
      props.inputs.nameTitle === "None" ||
      props.errors.nameTitle === "error" ||
      props.inputs.firstName === "" ||
      props.errors.firstName === "error" ||
      props.inputs.lastName === "" ||
      props.errors.lastName === "error" ||
      props.inputs.accountName === "" ||
      props.errors.accountName === "error" ||
      props.inputs.phone === "" ||
      props.errors.phone === "error" ||
      props.inputs.email === "" ||
      props.errors.email === "error" ||
      props.inputs.street === "" ||
      props.errors.street === "error" ||
      props.inputs.city === "" ||
      props.errors.city === "error" ||
      props.inputs.state.value.value === "Select..." ||
      props.errors.state === "error" ||
      props.inputs.postCode === "" ||
      props.errors.postCode === "error" ||
      props.inputs.description === "" ||
      props.errors.description === "error"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      {" "}
      {/* App Model to show submitted result */}
      <AppModal
        show={showModal}
        close={() => {
          setShowModal(false);
          props.resetForm();
        }}
        inputs={props.inputs}
        errors={props.errors}
      />
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container
          fluid
          style={{
            backgroundColor: COLORS.COLOR_PRIMARY,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Navbar.Brand> Create Account</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                {" "}
                <Button variant="outline-warning" onClick={props.resetForm}>
                  Cancel
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Button
                  variant="warning"
                  onClick={() => {
                    //if data is not empty, then show modal else show alert
                    if (isError()) {
                      setShowAlert(true);
                      setShowModal(false);
                    } else {
                      //if no error , show model, disable alert if it is showing and reset form

                      setShowAlert(false);
                      setShowModal(true);
                    }
                  }}
                >
                  Save
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* show alert if any field is empty */}
      <AppAlert
        onShow={showAlert}
        onClose={() => {
          setShowAlert(false);
        }}
      />
    </>
  );
};

export default AppNavbar;
