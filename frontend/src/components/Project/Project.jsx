import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Project.css";
import ProjectThumbnail from "./ProjectThumbnail/ProjectThumbnail";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  console.log(project);
  if (!project.project_url)
    return (
      <Row className="d-flex justify-content-center m-3">
        <Col className="d-flex justify-content-center m-3">
          <Container>
            <Row>
              <h1 className="d-flex justify-content-center">
                {project.project_name}
              </h1>
              <div className="d-flex justify-content-center">
                <Link
                  className="d-flex justify-content-center"
                  to={project.project_name}
                >
                  <Button variant="dark" className="shadow bg-dark rounded">
                    Click here for Application Breakdown
                  </Button>
                </Link>
              </div>
            </Row>
            <Row>
              <a
                className="d-flex justify-content-center githublink"
                href={project.project_github}
              >
                Github Repository
              </a>
            </Row>
            <Row className="d-flex justify-content-center">
              <ProjectThumbnail project={project} />

              <Col className="d-flex align-items-center">
                <Container className="techStackContainer m-2">
                  <h1>Tech Stack:</h1>
                  <ul>
                    {" "}
                    {project.tech_stack.map((tech, index) => {
                      return <li>{tech.technology}</li>;
                    })}
                  </ul>
                </Container>
              </Col>
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
            <h1 className="d-flex justify-content-center">
              {project.project_name}
            </h1>
            <div className="d-flex justify-content-center">
              <Link
                className="d-flex justify-content-center"
                to={project.project_name}
              >
                <Button variant="dark" className="shadow bg-dark rounded">
                  Click here for Application Breakdown
                </Button>
              </Link>
            </div>
          </Row>
          <Row>
            <a
              className="d-flex justify-content-center githublink"
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

            <Col className="d-flex align-items-center">
              <Container className="techStackContainer m-2">
                <h1>Tech Stack:</h1>
                <ul>
                  {" "}
                  {project.tech_stack.map((tech, index) => {
                    return <li>{tech.technology}</li>;
                  })}
                </ul>
              </Container>
            </Col>
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
