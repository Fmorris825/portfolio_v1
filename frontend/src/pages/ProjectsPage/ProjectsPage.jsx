import { Container, Row, Col } from "react-bootstrap";
import Project from "../../components/Project/Project";
import data from "../../data";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  console.log(data.projects);
  return (
    <Row className="d-flex justify-content-center">
      {data.projects.map((project, index) => {
        return <Project project={project} />;
      })}
    </Row>
  );
};

export default ProjectsPage;
