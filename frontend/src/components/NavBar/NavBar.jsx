import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data";

import {
  NavbarBrand,
  NavLink,
  Col,
  Row,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

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
    <Col>
      <Row>
        <Navbar fixed="top" className="navbartop">
          <NavbarBrand className="brand" href="/">
            <div className="navTextBrand">Fredrick Morris</div>
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                className="link"
                id="nav-dropdown-dark-example"
                title="Projects"
                menuVariant="dark"
              >
                {projects.map((project, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link className="link" to={project.project_name}>
                        {project.project_name}
                      </Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
            <Nav>
              <GithubLink />
              <LinkedInLink />
              <MailLink />
            </Nav>
          </NavbarCollapse>

          {/* <Nav>
          <NavLink href="/projects">
            <div className="navText">Projects</div>
          </NavLink>
          <NavLink href="/contactme">
            <div className="navText">Contact Me</div>
          </NavLink>
        </Nav> */}
        </Navbar>
      </Row>
    </Col>
  );
};

export default NavBar;
