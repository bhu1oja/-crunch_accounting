import { Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

const NavbarLogo = () => {
  return (
    <Container fluid style={{ display: "flex", justifyContent: "center" }}>
      <img src={logo} alt="logo" />
    </Container>
  );
};

export default NavbarLogo;
