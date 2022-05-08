import * as CONSTANT from "../Constant/Constant";

const FormValidator = (inputs) => {
  let errors = {};

  // method to check if entered postcode is in the range of postcode
  const getRange = (value, min, max) => {
    return value >= min && value <= max ? true : false;
  };

  // Validate name title
  if (
    !inputs.nameTitle.trim() ||
    inputs.nameTitle === "Other" ||
    inputs.nameTitle === "None"
  ) {
    errors.nameTitle = "error";
  } else {
    errors.nameTitle = "success";
  }

  // Validate First name
  if (!inputs.firstName.trim()) {
    errors.firstName = "error";
  } else {
    errors.firstName = "success";
  }

  // validate Last name
  if (!inputs.lastName.trim()) {
    errors.lastName = "error";
  } else {
    errors.lastName = "success";
  }

  // validate Account name
  if (!inputs.accountName.trim()) {
    errors.accountName = "error";
  } else {
    errors.accountName = "success";
  }

  //Validate Phone number
  if (!inputs.phone.trim()) {
    errors.phone = "error";
  } else if (inputs.phone.length !== 10) {
    errors.phone = "error";
  } else if (!inputs.phone.match("[0-9]{10}")) {
    errors.phone = "error";
  } else {
    errors.phone = "success";
  }

  //validate Email
  if (!inputs.email) {
    errors.email = "error";
  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
  }

  //Validate Street address
  if (!inputs.street.trim()) {
    errors.street = "error";
  } else {
    errors.street = "success";
  }

  //validate City
  if (!inputs.city.trim()) {
    errors.city = "error";
  } else {
    errors.city = "success";
  }

  // validate state selection

  if (
    !inputs.state.value ||
    inputs.state.value === "State" ||
    inputs.state.value === "Select..." ||
    inputs.state.value == null
  ) {
    errors.state = "error";
  } else {
    errors.state = "success";
  }

  //validate postcode
  // post code should be in the range of corresponding state's postcode
  if (!inputs.postCode.trim()) {
    errors.postCode = "error";
  } else if (!inputs.postCode.match("[0-9]{4}")) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.NEW_SOUTH_WHALES &&
    !getRange(inputs.postCode, CONSTANT.NSW_POST_MIN, CONSTANT.NSW_POST_MAX)
  ) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.VICTORIA &&
    !getRange(inputs.postCode, CONSTANT.VICTORIA_MIN, CONSTANT.VICTORIA_MAX)
  ) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.QUEENSLAND &&
    !getRange(inputs.postCode, CONSTANT.QUEENSLAND_MIN, CONSTANT.QUEENSLAND_MAX)
  ) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.WESTERN_AUSTRALIA &&
    !getRange(inputs.postCode, CONSTANT.WA_MIN, CONSTANT.WA_MAX)
  ) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.SOUTH_AUSTRALIA &&
    !getRange(inputs.postCode, CONSTANT.SA_MIN, CONSTANT.SA_MAX)
  ) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.TASMANIA &&
    !getRange(inputs.postCode, CONSTANT.TAS_MIN, CONSTANT.TAS_MAX)
  ) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.NORTHERN_TERRITORY &&
    !getRange(inputs.postCode, CONSTANT.NT_MIN, CONSTANT.NT_MAX)
  ) {
    errors.postCode = "error";
  } else if (
    inputs.state.value === CONSTANT.AUSTRALIAN_CAPITAL_TERRITORY &&
    !(
      getRange(inputs.postCode, CONSTANT.ACT_MIN1, CONSTANT.ACT_MAX1) ||
      getRange(inputs.postCode, CONSTANT.ACT_MIN2, CONSTANT.ACT_MAX2)
    )
  ) {
    errors.postCode = "error";
  } else {
    errors.postCode = "success";
  }

  //validate Description
  if (!inputs.description.trim()) {
    errors.description = "error";
  } else {
    errors.description = "success";
  }

  //return error status
  return errors;
};

export default FormValidator;
