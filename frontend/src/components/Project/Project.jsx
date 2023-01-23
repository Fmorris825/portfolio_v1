import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Project.css";
import ProjectThumbnail from "./ProjectThumbnail/ProjectThumbnail";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  if (!project.project_url)
    return (
      <Row className="d-flex justify-content-center m-3">
        <Col>
          <Container>
            <Row>
              <Link
                className="d-flex justify-content-center"
                to={project.project_name}
              >
                {project.project_name}
              </Link>
              <p className="d-flex justify-content-center">
                Click for Application breakdown
              </p>
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
          <Row>
            <Link
              className="d-flex justify-content-center"
              to={project.project_name}
            >
              {project.project_name}
            </Link>
            <p className="d-flex justify-content-center">
              Click for Application breakdown
            </p>
          </Row>
          <Row>
            <a
              className="d-flex justify-content-center"
              href={project.project_github}
            >
              Github Repository
            </a>
          </Row>
          {/* <Row>
            <a
              className="d-flex justify-content-center"
              href={project.project_url}
            >
              Live Application
            </a>
          </Row> */}
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
