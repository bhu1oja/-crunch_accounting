import { useState } from "react";

const FormHandler = (validate) => {
  //initialize form inputs
  const [inputs, setInputs] = useState({
    nameTitle: "None",
    firstName: "",
    lastName: "",
    accountName: "",
    companyName: "",
    email: "",
    emailOpt: false,
    phone: "",
    fax: "",
    title: "",
    street: "",
    city: "",
    state: { value: "Select...", label: "Select..." },
    postCode: "",
    description: "",
  });
  //initialize form error object
  const [errors, setErrors] = useState({});

  //handle change of inputs
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //check error on blur
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(inputs));
  };

  //set checkbox value
  const setCheckboxInput = () => {
    setInputs({ ...inputs, emailOpt: !inputs.emailOpt });
  };

  //set drop down inputs
  const setDropdownInput = (key, value, label) => {
    key === "nameTitle"
      ? setInputs({ ...inputs, nameTitle: value })
      : setInputs({ ...inputs, state: { value, label } });
    setErrors(validate(inputs));
  };

  //reset form to initial state
  const resetForm = () => {
    setInputs({
      nameTitle: "None",
      firstName: "",
      lastName: "",
      accountName: "",
      companyName: "",
      email: "",
      emailOpt: false,
      phone: "",
      fax: "",
      title: "",
      street: "",
      city: "",
      postCode: "",
      state: { value: "Select...", label: "Select..." },
      description: "",
    });
  };

  return {
    handleChange,
    inputs,
    handleSubmit,
    setCheckboxInput,
    setDropdownInput,
    errors,
    resetForm,
  };
};

export default FormHandler;
