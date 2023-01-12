import { Container, Image, Col, Row } from "react-bootstrap";

const ProjectThumbnailCard = ({ thumbnailCard }) => {
  return (
    <Container>
      <Col xs="auto">
        <Row>
          <Image className="thumbnails" src={thumbnailCard.thumbnail} />
        </Row>
        <Row>{thumbnailCard.thumbnail_description}</Row>
      </Col>
    </Container>
  );
};

export default ProjectThumbnailCard;
