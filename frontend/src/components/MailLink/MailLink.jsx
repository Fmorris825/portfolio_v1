import { Container, Image } from "react-bootstrap";
import email from "../../Icons/email.png";

const MailLink = () => {
  return (
    <Container>
      <div>
        <a href="mailto:CodeFredDesign@hotmail.com?subject=Hello, From Code Fred!&body=What can i help you with today?">
          <Image className="linkIcon" src={email}></Image>
        </a>
        <a href="mailto:CodeFredDesign@hotmail.com?subject=Hello, From Code Fred!&body=What can i help you with today?">
          CodeFredDesign@hotmail.com
        </a>
      </div>
    </Container>
  );
};

export default MailLink;
