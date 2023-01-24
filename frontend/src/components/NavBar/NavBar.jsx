import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import "./NavBar.css";
import GithubLink from "../GithubLink/GithubLink";
import LinkedInBadge from "../LinkedInBadge/LinkedInBadge";
import LinkedInLink from "../LinkedInLink/LinkedInLink";
import MailLink from "../MailLink/MailLink";

const NavBar = () => {
  const [projects, setProjects] = useState(data.projects);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      className="topNav"
    >
      <Container>
        <Navbar.Brand href="/">
          <h1>Fredrick Morris</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown
              title="Projects"
              id="collasible-nav-dropdown"
              className="link"
            >
              {projects.map((project, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`projects/${project.project_name}`}>
                      {project.project_name}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown> */}
          </Nav>
          <Nav className="d-flex gap-2">
            <GithubLink />
            <LinkedInLink />
            <MailLink />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
