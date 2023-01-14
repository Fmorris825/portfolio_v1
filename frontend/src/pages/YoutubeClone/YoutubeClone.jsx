import { Col, Container, Row, Image } from "react-bootstrap";
import data from "../../data";
import Project from "../../components/Project/Project";
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
  ) : (
    <div> Loading </div>
  );
};

export default YoutubeClone;
