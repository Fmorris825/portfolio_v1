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
    <Col xs={true} className="bodyC">
      <Row className="d-flex justify-content-center">
        <h1 className="title">Welcome to my Creative Space</h1>
        <Image className="headshot" src={Headshot} />

        <p className="bioText">
          Hello, Welcome to my creative space aka my portfolio. I am a
          Environmental Biologist turned Web Developer. I decided to take the
          leap into the <span className="animate-charcter">technology</span>{" "}
          field to pursue my dream of being able to create and develop{" "}
          <span className="animate-charcter">interactive user interfaces</span>.
          Nothing is more gratifying than building something with your own
          hands, weather it be a house, sculpture, or web application. All are
          works of art in thier own persepctives.
          <br /> <br />I started my learning formally by attending and
          completing devcodecamp, (Software Development & Engineering Bootcamp)
          to increase my knowledge in the field and learn the skills to create.
          During my time I was able to learn and devlop my skills in:
        </p>
      </Row>

      <Row>
        {/* Map over Backend Skills */}
        <Container className="skillsContainer">
          {data.skills.map((skill, index) => {
            return <Skill skill={skill} key={index} />;
          })}
        </Container>
      </Row>
    </Col>
  );
};

export default LandingPage;
