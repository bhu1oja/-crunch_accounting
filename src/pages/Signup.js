import React from "react";
import { Form, Container, Row, Col, InputGroup } from "react-bootstrap";

//import custom components
import { StateDropdown } from "../components/AppDropdown/AppDropdown";
import AppInput from "../components/AppInput/AppInput";
import { AppHeading } from "../components/AppTypography/AppTypography";
import AppNavbar from "../components/Navbar/Navbar";
import NavbarLogo from "../components/Navbar/NavbarLogo";
import FormHandler from "../components/Form/FormHandler";
import FormValidate from "../components/Form/FormValidator";
import { NameTitleDropDown } from "../components/AppDropdown/AppDropdown";
import Footer from "../components/Footer/Footer";

const Signup = () => {
  //import form validator and handler
  const {
    handleChange,
    inputs,
    handleSubmit,
    setCheckboxInput,
    setDropdownInput,
    errors,
    resetForm,
  } = FormHandler(FormValidate);

  return (
    <>
      {/*  App logo */}
      <NavbarLogo />

      {/* App Navbar */}
      <AppNavbar inputs={inputs} errors={errors} resetForm={resetForm} />

      {/* Container for signup form */}
      <Container>
        {/* custom heading component */}
        <AppHeading title={"Contact Information"} />

        {/* Name Title ,First name and Last name row */}
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>First name</Form.Label>
            <InputGroup className="mb-3">
              <NameTitleDropDown
                inputs={inputs}
                setDropdownInput={setDropdownInput}
                onBlur={handleSubmit}
                error={errors.nameTitle}
              />
              <Form.Control
                name="firstName"
                required
                value={inputs.firstName}
                type="text"
                placeholder="John"
                onChange={handleChange}
                onBlur={handleSubmit}
                autoComplete="off"
                className={errors.firstName === "error" ? "is-invalid" : ""}
              />
            </InputGroup>
          </Form.Group>

          <AppInput
            label="Last Name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="text"
            placeholder="smith"
            errors={errors.lastName}
          />
        </Row>

        {/* Account name and Company name row */}
        <Row className="mb-3">
          <AppInput
            label="Account Name"
            name="accountName"
            value={inputs.accountName}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="text"
            placeholder="John's Joinery"
            errors={errors.accountName}
          />
          <AppInput
            label="Company Name (optional)"
            name="companyName"
            value={inputs.companyName}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="text"
            placeholder=""
          />
        </Row>

        {/* Phone number nad Fax row */}
        <Row className="mb-3">
          <AppInput
            label="Phone"
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="number"
            placeholder="02 123 456 78"
            errors={errors.phone}
          />
          <AppInput
            label="Fax (optional)"
            name="fax"
            value={inputs.fax}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="number"
            placeholder=""
          />
        </Row>

        {/* Title and Email row    */}
        <Row className="mb-3">
          <AppInput
            label="Title (optional)"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="text"
            placeholder=""
          />
          <AppInput
            label="Email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="email"
            placeholder=""
            errors={errors.email}
          />
        </Row>

        {/* Email opt out option */}
        <Form.Group className="mb-3">
          <Form.Check
            value={inputs.emailOpt}
            onChange={setCheckboxInput}
            onBlur={handleSubmit}
            label="Email Opt Out"
          />
        </Form.Group>

        {/* Address information section */}
        <AppHeading title={"Address Information"} />

        {/* Street number and City row */}
        <Row className="mb-3">
          <AppInput
            label="Street No. & Street"
            name="street"
            value={inputs.street}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="text"
            placeholder=""
            errors={errors.street}
          />

          <AppInput
            label="City"
            name="city"
            value={inputs.city}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="text"
            placeholder=""
            errors={errors.city}
          />
        </Row>
        {/* State and Postcode Row */}
        <Row className="mb-3">
          <StateDropdown
            error={errors.state}
            setDropdownInput={setDropdownInput}
            inputs={inputs.state}
            onBlur={handleSubmit}
          />

          <AppInput
            label="Post Code"
            name="postCode"
            value={inputs.postCode}
            onChange={handleChange}
            onBlur={handleSubmit}
            type="text"
            placeholder=""
            errors={errors.postCode}
          />
        </Row>
        {/* Description Section */}
        <AppHeading title={"Description Information"} />
        <AppInput
          label="Description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          onBlur={handleSubmit}
          type="text"
          placeholder=""
          errors={errors.description}
          textArea={true}
        />
      </Container>
      <Footer />
    </>
  );
};
export default Signup;
