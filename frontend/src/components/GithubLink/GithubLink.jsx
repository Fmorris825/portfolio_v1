import github from "../../Icons/github.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const GithubLink = () => {
  return (
    <a href="https://github.com/Fmorris825" className="d-flex">
      <Image className="linkIcon" src={github}></Image>
    </a>
  );
};

export default GithubLink;
