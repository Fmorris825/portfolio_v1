import { Nav, Navbar } from "react-bootstrap";
import {
  UserAddOutlined,
  AppstoreOutlined,
  HomeOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <Navbar fluid fixed="bottom" bg="light" className="navbar">
      <Nav
        defaultActiveKey="/"
        className="d-flex justify-content-around footer"
      >
        <Nav.Item as="li" className="footborder">
          <Nav.Link href="/" className="d-flex flex-column">
            <HomeOutlined />
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="footborder">
          <Nav.Link href="/projects" className="d-flex flex-column">
            <AppstoreOutlined />
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="footborder">
          <Nav.Link href="/ContactMe" className="d-flex flex-column">
            <UserAddOutlined />
            Contact Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="footborder">
          <Nav.Link href="/Resources" className="d-flex flex-column">
            <BookOutlined />
            Resources
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Footer;
