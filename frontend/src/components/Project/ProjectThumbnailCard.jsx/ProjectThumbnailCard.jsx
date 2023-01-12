import { Container, Image } from "react-bootstrap";

const ProjectThumbnailCard = ({ thumbnailCard }) => {
  return (
    <Container>
      <div>
        <Image className="thumbnails" src={thumbnailCard.thumbnail} />
      </div>
      <div>{thumbnailCard.thumbnail_description}</div>
    </Container>
  );
};

export default ProjectThumbnailCard;
