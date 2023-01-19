import "./LandingPage.css";

import Skill from "../../components/Skill/Skill";

import data from "../../data";
import { Container, Row, Col, Image } from "react-bootstrap";
import Headshot from "./Headshot.jpg";

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
    <Container>
      {/* <Row>
          <Container className="JavascriptText1">
            <a href="https://codepen.io/grohit/">Hello, I'm Fredrick Morris</a>
          </Container>
        </Row> */}
      {/* <Row>
          <Container className="JavascriptText2">
            <a href="https://codepen.io/grohit/">Fullstack Devloper</a>
          </Container>
        </Row> */}
      <Row className="bio">
        <Col xs={true}>
          <Image className="headshot" src={Headshot} />
        </Col>
        <Col xs={true} className="bioText">
          Hello, I am Fred Morris. I am a Environmental Biologist turned Web
          Developer. I decided to take the leap into the technology field to
          pursue my dream of being able to create and develop interfaces and
          software with own hands. Nothing is more gratfying than building
          something with your own hands. To learn the skills to create things i
          have attended devcodecamp, (a Computer science bootcamp) to increase
          my knowledge in the field and learn the skills to create.
        </Col>
      </Row>
      {/* <Row> */}
      {/* </Row> */}
      <Row>
        <Col xs={true} className="skillsContainer">
          {/* Map over Backend Skills */}

          {data.skills.map((skill, index) => {
            return <Skill skill={skill} />;
          })}
        </Col>
      </Row>

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
    </Container>
  );
};

export default LandingPage;
