import { Container, Row, Col } from "react-bootstrap";
import { FooterText } from "../AppTypography/AppTypography";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          &copy;{" "}
          <FooterText text={" Crunch Accounting. All rights reserved."} />
        </Col>
        <Col sm={4}>
          <Row>
            <Col>
              <FooterText text={"Privacy policy "} />
            </Col>
            <Col>
              <FooterText text={"Terms of service"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
