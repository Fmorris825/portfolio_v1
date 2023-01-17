import { Nav, Navbar } from "react-bootstrap";
import {
  UserAddOutlined,
  AppstoreOutlined,
  HomeOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="light" className="navbar">
      <Nav
        defaultActiveKey="/"
        as="ul"
        className="d-flex justify-content-between footer"
      >
        <Nav.Item as="li" className="d-flex flex-column footborder">
          <HomeOutlined />
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="d-flex flex-column footborder">
          <AppstoreOutlined />
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="d-flex flex-column footborder">
          <UserAddOutlined />
          <Nav.Link eventKey="link-2">Contact Me</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="d-flex flex-column footborder">
          <BookOutlined />
          <Nav.Link eventKey="link-2">Resources</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Footer;
