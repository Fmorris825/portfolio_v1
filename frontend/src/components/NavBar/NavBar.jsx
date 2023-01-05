import React from "react";
import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar>
      <Container className="navbar">
        <Navbar.Brand className="navText" href="#home">
          Fredrick Morris
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="navText" href="#features">
            Projects
          </Nav.Link>
          <Nav.Link className="navText" href="#pricing">
            Contact Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
