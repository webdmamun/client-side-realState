import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              Urban Estate
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/properties">
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="/agent">
                Agent
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
             
              <Nav.Link className="text-light" href="">Welcome <span className="text-info">example@ gmail.com</span> </Nav.Link>
              <Nav.Link as={Link} to="/login"><button className="btn btn-success"  >Log In</button></Nav.Link>
              <Nav.Link eventKey={2} >
                <button className="btn btn-danger" >Log out</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
