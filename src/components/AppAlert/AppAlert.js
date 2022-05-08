import { Alert } from "react-bootstrap";
import React from "react";
import { ERROR_ALERT_MESSAGE, ERROR_ALERT_TITLE } from "../Constant/Constant";

//Reuseable alert component
const AppAlert = (props) => {
  return (
    <Alert
      variant="danger"
      show={props.onShow}
      onClose={props.onClose}
      dismissible
    >
      {/* get error title and message form constant file */}
      <Alert.Heading>{ERROR_ALERT_TITLE}</Alert.Heading>
      <p>{ERROR_ALERT_MESSAGE}</p>
    </Alert>
  );
};

export default AppAlert;
