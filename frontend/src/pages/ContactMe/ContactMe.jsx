/*General Imports*/
import { Col, Container, Row, Image } from "react-bootstrap";

/*Icon Pngs*/
import github from "../../Icons/github.png";
import linkedin from "../../Icons/linkedin.png";
import email from "../../Icons/email.png";

const ContactMe = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <a href="https://github.com/Fmorris825">
              <Image src={github}></Image>
            </a>
            Github:
            <a href="https://github.com/Fmorris825">
              https://github.com/Fmorris825
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/fredmorrisdeveloper/">
              <Image src={linkedin}></Image>
            </a>
            Github:
            <a href="https://www.linkedin.com/in/fredmorrisdeveloper/">
              https://www.linkedin.com/in/fredmorrisdeveloper/
            </a>
          </div>
          <div>
            <a href="mailto:CodeFredDesign@hotmail.com?subject=Hello from Morris Delta Realty!&body=What Property will you ne inquiring about today? or What questions can we help you find soluions for? Please Enter the Property Reference Number above if you are inquiring about a specfic listing on our site.">
              <Image src={email}></Image>
            </a>
            Github:
            <a href="mailto:CodeFredDesign@hotmail.com?subject=Hello from Morris Delta Realty!&body=What Property will you ne inquiring about today? or What questions can we help you find soluions for? Please Enter the Property Reference Number above if you are inquiring about a specfic listing on our site.">
              CodeFredDesign@hotmail.com
            </a>
          </div>
          <div>Email: CodeFredDesign@hotmail.com</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
