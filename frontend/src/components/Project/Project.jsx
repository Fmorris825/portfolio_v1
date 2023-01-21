import { Container, Image, Row, Col } from "react-bootstrap";
import "./Project.css";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  console.log(project);
  return (
    <Row className="d-flex justify-content-center m-3">
      <Col>
        <Image className="thumbnails grow" src={project.project_thumbnail} />
      </Col>
      <Col>
        <Container>
          <Row className="d-flex justify-content-center m-3">
            {project.project_name}
          </Row>
          <Row>
            <a
              className="d-flex justify-content-center"
              href={project.project_github}
            >
              Github Repository
            </a>
          </Row>
          <Row>
            <a
              className="d-flex justify-content-center"
              href={project.project_url}
            >
              Live Application
            </a>
          </Row>
          <Row className="contain m-3">
            <p>{project.project_description}</p>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Project;
