/*General Imports*/
import { Col, Container, Row, Image } from "react-bootstrap";

/*Icon Pngs*/
import github from "../../Icons/github.png";

import GithubLink from "../../components/GithubLink/GithubLink";
import LinkedInLink from "../../components/LinkedInLink/LinkedInLink";
import MailLink from "../../components/MailLink/MailLink";
import LinkedInBadge from "../../components/LinkedInBadge/LinkedInBadge";

const ContactMe = () => {
  return (
    <Container>
      <Col xs={true}>
        <LinkedInBadge />
      </Col>
      <Col xs={true} className="d-flex flex-column gap-3">
        <Container className="d-flex">
          <GithubLink />
          <a className="iconText" href="https://github.com/Fmorris825">
            <h3>Fred's Github</h3>
          </a>
        </Container>
        <Container className="d-flex">
          <LinkedInLink />
          <a
            className="iconText"
            href="https://www.linkedin.com/in/fredmorrisdeveloper/"
          >
            <h3>Fred's LinkedIn</h3>
          </a>
        </Container>
        <Container className="d-flex">
          <MailLink />
          <a
            className="iconText"
            href="mailto:CodeFredDesign@hotmail.com?subject=Hello, From Code Fred!&body=What can i help you with today?"
          >
            <h3>CodeFredDesign@hotmail.com</h3>
          </a>
        </Container>
      </Col>
    </Container>
  );
};

export default ContactMe;
