import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" fixed="top">
      <Container fluid="xxl">
        <Navbar.Brand>
          <img src="/abakus_logo_black.png" width="150px" alt="Abakus Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
