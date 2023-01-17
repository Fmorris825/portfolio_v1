import { Container, Image } from "react-bootstrap";
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
    <Container className="skillsCard">
      <p className="skillText">{skill.skill_name}</p>
      <Container className="skillIcon">
        <Image src={skill.icon_url} />
      </Container>
    </Container>
  );
};

export default Skill;
