import { Image } from "react-bootstrap";
import "./Skill.css";

const Skill = ({ skill }) => {
  return (
    <div className="skillsCard">
      <p className="skillText">{skill.skill_name}</p>
      <div className="skillIcon">
        <Image src={skill.icon_url} />
      </div>
    </div>
  );
};

export default Skill;
