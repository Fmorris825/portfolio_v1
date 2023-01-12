import { Container, Image, Row, Col } from "react-bootstrap";
import "./Project.css";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  console.log(project);
  return (
    <Container>
      <Row>
        <Container>
          <Image className="thumbnails" src={project.project_thumbnail} />
        </Container>
        <Container>
          {project.project_thumbnail_cards.map((thumbnailCard, index) => {
            return <ProjectThumbnailCard thumbnailCard={thumbnailCard} />;
          })}
        </Container>
      </Row>
    </Container>
  );
};

export default Project;
