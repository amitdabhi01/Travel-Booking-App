import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Travelia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={"/"} href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={"trips"} href="#about">
              Trips
            </Nav.Link>
            <Nav.Link href="#login">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
