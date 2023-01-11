import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import axios from "axios";
import Skill from "../../components/Skill/Skill";
import { Image } from "react-bootstrap";
import data from "../../data";

const LandingPage = () => {
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   getSkills();
  // }, []);

  // async function getSkills() {
  //   const response = await axios.get("http://127.0.0.1:8000/api/skills/");
  //   setSkills(response.data);
  // }

  return (
    <div className="d-flex flex-column javascriptText">
      <p className="JavascriptText1">
        <a href="https://codepen.io/grohit/">Hello, I'm Fredrick Morris</a>
      </p>
      <p className="JavascriptText2">
        <a href="https://codepen.io/grohit/">Fullstack Devloper</a>
      </p>
      {/* Skill list Container */}
      {/* <div className="d-flex gap-3">
        <div className="skillsCard">
          <p className="skillText">Python</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" />
          </div>
        </div>

        <div className="skillsCard">
          <p className="skillText">Javascript</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" />
          </div>
        </div>

        <div className="skillsCard">
          <p className="skillText">Java</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png" />
          </div>
        </div>

        <div className="skillsCard">
          <p className="skillText">React.js</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" />
          </div>
        </div>
        <br />
        <div className="skillsCard">
          <p className="skillText">CSS 3</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" />
          </div>
        </div>

        <div className="skillsCard">
          <p className="skillText">HTML 5</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" />
          </div>
        </div>

        <div className="skillsCard">
          <p className="skillText">Bootstrap</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" />
          </div>
        </div>

        <div className="skillsCard">
          <p className="skillText">Git & GitHub</p>
          <div className="skillIcon">
            <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" />
          </div>
        </div>
      </div> */}
      Map over Backend Skills
      <div className="skillsContainer">
        {data.skills.map((skill, index) => {
          return <Skill skill={skill} />;
        })}
      </div>
      {/* Linked in Badge
        <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="fred-morris-623107235"
            data-version="v1"
        >
            <a
            class="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/fred-morris-623107235?trk=profile-badge"
            >
            Fred Morris
            </a>
        </div> */}
    </div>
  );
};

export default LandingPage;
