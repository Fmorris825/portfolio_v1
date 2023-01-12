import React from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand, NavLink, Col, Row } from "react-bootstrap";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Col>
      <Row>
        <Navbar className="navbar">
          <NavbarBrand className="brand" href="/">
            <div className="navTextBrand">Fredrick Morris</div>
          </NavbarBrand>
          <Nav className="links">
            <NavLink href="/projects">
              <div className="navText">Projects</div>
            </NavLink>
            <NavLink href="/contactme">
              <div className="navText">Contact Me</div>
            </NavLink>
          </Nav>
        </Navbar>
      </Row>
    </Col>
  );
};

export default NavBar;
