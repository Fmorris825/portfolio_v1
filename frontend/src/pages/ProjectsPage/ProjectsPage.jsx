import { Container, Row, Col } from "react-bootstrap";
import Project from "../../components/Project/Project";
import data from "../../data";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  console.log(data.projects);
  return (
    <Container className="ProjectsPageBody">
      <Row>
        <Col>
          {data.projects.map((project, index) => {
            return <Project project={project} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
