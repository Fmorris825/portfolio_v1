import { Container, Image, Row, Col } from "react-bootstrap";
import "./Project.css";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  console.log(project);
  return (
    <Row className="d-flex justify-content-center m-3">
      <Row>
        <Image className="thumbnails grow" src={project.project_thumbnail} />
      </Row>
      <Row className="contain m-3">{project.project_description}</Row>
    </Row>
  );
};

export default Project;
