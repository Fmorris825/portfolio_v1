import { Container, Image, Row, Col } from "react-bootstrap";
import "./Project.css";
import ProjectThumbnail from "./ProjectThumbnail/ProjectThumbnail";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  console.log(project);
  if (!project.project_url)
    return (
      <Row className="d-flex justify-content-center m-3">
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
            <Row className="d-flex justify-content-center">
              <ProjectThumbnail project={project} />
            </Row>
            <Row className="contain m-3">
              <p>{project.project_description}</p>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  return (
    <Row className="d-flex justify-content-center m-3">
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
          <Row className="d-flex justify-content-center">
            <ProjectThumbnail project={project} />
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
