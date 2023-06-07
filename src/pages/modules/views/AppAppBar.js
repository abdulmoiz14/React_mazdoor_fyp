import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"

function NavbarComponent() {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(`${e}`);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => handleNavigate("/")}>Mazdoori</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigate("/biddingList")}>Hire</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cleaner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gardener
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Load shifter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Categories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => handleNavigate("/signup")}>Sign up</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/signin")} style={{font:"white"}}>Login</Nav.Link>
              <Button variant="outline-light" onClick={() => handleNavigate("/proSignup2")}>
                Become a pro
              </Button>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;