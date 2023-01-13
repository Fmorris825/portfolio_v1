import { Container, Image, Col, Row } from "react-bootstrap";

const ProjectThumbnailCard = ({ thumbnailCard }) => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <Container className="reveal fade-bottom">
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
