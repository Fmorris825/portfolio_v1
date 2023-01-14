import { Col, Container, Row, Image } from "react-bootstrap";
import data from "../../data";
import ProjectThumbnailCard from "../../components/Project/ProjectThumbnailCard.jsx/ProjectThumbnailCard";
import { useEffect, useState } from "react";

const YoutubeClone = () => {
  const [project, setProject] = useState(false);

  useEffect(() => {
    getProject();
  }, []);

  function getProject() {
    let project = data.projects.find(function (project) {
      return project.project_name === "Youtube Clone";
    });
    return setProject(project);
  }

  return project ? (
    <Container>
      {" "}
      <Row>
        <Col xs="auto">
          <Row className="project_name">
            <div>{project.project_name}</div>
          </Row>
          <Row>
            <Image className="thumbnails" src={project.project_thumbnail} />
          </Row>
          <Row className="contain shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="thumbnailText">{project.project_description}</div>
          </Row>
          <Row>
            {project.project_thumbnail_cards.map((thumbnailCard, index) => {
              return <ProjectThumbnailCard thumbnailCard={thumbnailCard} />;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : (
    <div> Loading </div>
  );
};

export default YoutubeClone;
