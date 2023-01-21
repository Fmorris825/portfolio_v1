import { Image, Spinner } from "react-bootstrap";

const ProjectThumbnail = ({ project }) => {
  return project.project_thumbnail ? (
    <Image className="thumbnails grow pic" src={project.project_thumbnail} />
  ) : (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default ProjectThumbnail;
