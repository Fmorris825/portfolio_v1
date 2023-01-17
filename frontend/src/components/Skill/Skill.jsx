import { Container, Image, Row, Col } from "react-bootstrap";
import "./Skill.css";

const Skill = ({ skill }) => {
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
    <div className="skillsCard">
      <Col xs="auto">
        <Row className="d-flex justify-content-center">
          <p className="skillText">{skill.skill_name}</p>
        </Row>
        <Row className="d-flex justify-content-center">
          <Image className="skillIcon" src={skill.icon_url} />
        </Row>
      </Col>
    </div>
  );
};

export default Skill;
