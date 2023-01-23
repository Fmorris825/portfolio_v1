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
      <Row>
        <Col xs={true}>
          <LinkedInBadge />
        </Col>
        <Col xs={true}>
          <Container className="d-flex">
            <GithubLink />
            <a className="iconText" href="https://github.com/Fmorris825">
              Fred's Github
            </a>
          </Container>
          <Container className="d-flex">
            <LinkedInLink />
            <a
              className="iconText"
              href="https://www.linkedin.com/in/fredmorrisdeveloper/"
            >
              Fred's LinkedIn
            </a>
          </Container>
          <Container className="d-flex">
            <MailLink />
            <a
              className="iconText"
              href="mailto:CodeFredDesign@hotmail.com?subject=Hello, From Code Fred!&body=What can i help you with today?"
            >
              CodeFredDesign@hotmail.com
            </a>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
