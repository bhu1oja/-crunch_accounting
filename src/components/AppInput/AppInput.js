import { Form, Col } from "react-bootstrap";

//Resusable app input component
const AppInput = (props) => {
  return (
    <Form.Group as={Col} md={props.textArea ? "8" : "4"}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        data-testid="app-input"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        placeholder={props.placeholder}
        as={props.textArea ? "textarea" : "input"}
        style={
          props.textArea && {
            height: "250px",
            marginBottom: 50,
            width: "100%",
          }
        }
        className={props.errors === "error" ? "is-invalid" : ""}
      />
    </Form.Group>
  );
};

export default AppInput;
