import "./LandingPage.css";

import Skill from "../../components/Skill/Skill";

import data from "../../data";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container>
        <Col sm="auto">
          <Row>
            <p className="JavascriptText1">
              <a href="https://codepen.io/grohit/">
                Hello, I'm Fredrick Morris
              </a>
            </p>
          </Row>
          <Row>
            <p className="JavascriptText2">
              <a href="https://codepen.io/grohit/">Fullstack Devloper</a>
            </p>
          </Row>
          <Row>
            {/* Map over Backend Skills */}
            <div className="skillsContainer">
              {data.skills.map((skill, index) => {
                return <Skill skill={skill} />;
              })}
            </div>
          </Row>
        </Col>
      </Container>
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
