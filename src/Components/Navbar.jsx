import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contex/AuthContext";

function Navigation() {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut(auth);
  };

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
            {!user ? (
              <Nav.Link as={NavLink} to="/auth">
                Login
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/myBooking" className="me-2">
                  My Bookings
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
