import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Urban Estate</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="properties">
                Properties
              </Link>
              <Link className="nav-link " to="agent">
                Agent
              </Link>
              <Link className="nav-link " to="blogs">
                Blogs
              </Link>
              <Link className="nav-link" to="contact">
                Contact
              </Link>
              {/* <Nav.Link href="#features">Properties</Nav.Link>
              <Nav.Link href="#pricing">Agent</Nav.Link>
              <Nav.Link href="#pricing">Blogs</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
