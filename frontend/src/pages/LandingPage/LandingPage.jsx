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
        <h1 className="title">Fredrick Morris</h1>
        <h2 className="subTitle">Frontend Web Developer</h2>
        <h3 className="subTitle">
          Specialization in creating user interfaces with{" "}
          <span className="animate-charcter">React.js </span>
        </h3>
        <Image className="headshot" src={Headshot} />

        <p className="bioText">
          Hello, I am Fredrick Morris or Fred for short.
          <br /> <br /> I am a Environmental Biologist turned Web Developer. I
          decided to take the leap into the{" "}
          <span className="animate-charcter">technology</span> field to pursue
          my dream of being able to create and develop{" "}
          <span className="animate-charcter">interactive user interfaces</span>.
          Nothing is more gratifying than building something with your own
          hands, whether it be a house, sculpture, or web application. All are
          works of art in thier own persepctives.
          <br /> <br />I started my learning formally by attending and
          completing devcodecamp, (Software Development & Engineering Bootcamp)
          to increase my knowledge in the field and learn the skills to create.
        </p>
      </Row>

      <Row>
        <h3 className="subTitle m-4">My Skills and Technologies:</h3>
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
