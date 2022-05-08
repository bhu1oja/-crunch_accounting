import { Modal, Row, Container, Col, Form } from "react-bootstrap";
import { AppHeading } from "../AppTypography/AppTypography";
import { COLOR_GREY } from "../Constant/Colors";
import { SMALL_FONT_SIZE } from "../Constant/Constant";
import { FaCheck } from "react-icons/fa";
import AppIcon from "../AppIcon/AppIcon";

const AppModal = (props) => {
  //resusable row component in model
  const Modalbody = (props) => {
    return (
      <Row className="mb-2">
        <Container as={Col}>
          <span style={{ color: "grey" }}>{props.title1}</span>
          <span> {props.value1}</span>
        </Container>
        <Container as={Col}>
          <span style={{ color: "grey" }}>{props.title2}</span>
          <span> {props.value2}</span>
        </Container>
        <Container as={Col}></Container>
      </Row>
    );
  };
  return (
    // App model
    <Modal
      data-testid="app-modal"
      show={props.show}
      onHide={props.close}
      fullscreen
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {/* resuable icon component */}
          Saved <AppIcon iconName={FaCheck} />
          <br></br>{" "}
          <div style={{ color: COLOR_GREY, fontSize: SMALL_FONT_SIZE }}>
            The contact details have been saved
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid style={{ flex: 1 }}>
          {" "}
          <AppHeading title={"Contact Information"} />
          <Modalbody
            title1="First Name"
            value1={props.inputs.nameTitle + " " + props.inputs.firstName}
            title2="Last Name"
            value2={props.inputs.lastName}
          />
          <Modalbody
            title1="Account Name"
            value1={props.inputs.accountName}
            title2="Company Name"
            value2={props.inputs.companyName}
          />
          <Modalbody
            title1="Phone"
            value1={props.inputs.phone}
            title2="Fax"
            value2={props.inputs.fax}
          />
          <Modalbody
            title1="Title"
            value1={props.inputs.title}
            title2="Email"
            value2={props.inputs.email}
          />
          <Form.Group className="mb-3">
            <Form.Check
              checked={props.inputs.emailOpt}
              label="Email Opt Out"
              readOnly={true}
            />
          </Form.Group>
          <AppHeading title={"Address Information"} />
          <Modalbody
            title1="Street No. & Street"
            value1={props.inputs.street}
            title2="City"
            value2={props.inputs.city}
          />
          <Modalbody
            title1="State"
            value1={props.inputs.state.value}
            title2="Post Code"
            value2={props.inputs.postCode}
          />
          <AppHeading title={"Description Information"} />
          <Container>
            <span style={{ color: "grey" }}>Description</span>
            <span> {props.inputs.description}</span>
          </Container>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AppModal;
