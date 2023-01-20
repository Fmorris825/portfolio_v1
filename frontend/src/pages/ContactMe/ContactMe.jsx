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
        <Col>
          <LinkedInBadge />
        </Col>
        <Col>
          <GithubLink />
          <LinkedInLink />
          <MailLink />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
