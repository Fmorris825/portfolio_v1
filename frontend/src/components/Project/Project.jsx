import { Container, Image, Row, Col } from "react-bootstrap";
import "./Project.css";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  console.log(project);
  return (
    <Container>
      <Row>
        <Col xs="auto">
          <Row>
            <Image className="thumbnails" src={project.project_thumbnail} />
          </Row>

          <Row>
            {project.project_thumbnail_cards.map((thumbnailCard, index) => {
              return <ProjectThumbnailCard thumbnailCard={thumbnailCard} />;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
