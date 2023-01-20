import { Container, Image } from "react-bootstrap";
import linkedin from "../../Icons/linkedin.png";

const LinkedInLink = () => {
  return (
    <Container>
      <a href="https://www.linkedin.com/in/fredmorrisdeveloper/">
        <Image className="linkIcon" src={linkedin}></Image>
      </a>
      {/* <a href="https://www.linkedin.com/in/fredmorrisdeveloper/">
        https://www.linkedin.com/in/fredmorrisdeveloper/
      </a> */}
    </Container>
  );
};

export default LinkedInLink;
