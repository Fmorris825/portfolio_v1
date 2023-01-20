import github from "../../Icons/github.png";
import { Container, Image } from "react-bootstrap";

const GithubLink = () => {
  return (
    <Container>
      <a href="https://github.com/Fmorris825">
        <Image className="linkIcon" src={github}></Image>
      </a>
      {/* <a href="https://github.com/Fmorris825">https://github.com/Fmorris825</a> */}
    </Container>
  );
};

export default GithubLink;
