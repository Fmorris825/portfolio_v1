import { Container, Nav, Navbar } from "react-bootstrap";
import {
  UserAddOutlined,
  AppstoreOutlined,
  HomeOutlined,
  BookOutlined,
} from "@ant-design/icons";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      fixed="bottom"
      bg="light"
      variant="light"
      className="navbar bottomNav"
    >
      <Container>
        <Nav className="d-flex justify-content-evenly footer">
          <Nav.Link href="/" className="d-flex flex-column">
            <HomeOutlined />
            Home
          </Nav.Link>

          <Nav.Link className="d-flex flex-column" href="/projects">
            <AppstoreOutlined />
            Projects
          </Nav.Link>

          <Nav.Link href="/ContactMe" className="d-flex flex-column">
            <UserAddOutlined />
            Contact Me
          </Nav.Link>

          <Nav.Link href="/Resources" className="d-flex flex-column">
            <BookOutlined />
            Resources
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
