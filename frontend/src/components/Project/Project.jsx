import { Image } from "react-bootstrap";
import "./Project.css";
import ProjectThumbnailCard from "./ProjectThumbnailCard.jsx/ProjectThumbnailCard";

const Project = ({ project }) => {
  console.log(project);
  return (
    <div>
      <div>
        <Image className="thumbnails" src={project.project_thumbnail} />
      </div>
      <div>
        {project.project_thumbnail_cards.map((thumbnailCard, index) => {
          return <ProjectThumbnailCard thumbnailCard={thumbnailCard} />;
        })}
      </div>
    </div>
  );
};

export default Project;
