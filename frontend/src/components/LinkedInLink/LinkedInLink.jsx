import { Container, Image } from "react-bootstrap";
import linkedin from "../../Icons/linkedin.png";

const LinkedInLink = () => {
  return (
    <a href="https://www.linkedin.com/in/fredmorrisdeveloper/">
      <Image className="linkIcon" src={linkedin}></Image>
    </a>
  );
};

export default LinkedInLink;
