// General Imports
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Component Imports
import NavBar from "./components/NavBar/NavBar";

// Pages Imports
import LandingPage from "./pages/LandingPage/LandingPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import MorrisDeltaRealty from "./pages/MorrisDeltaRealty/MorrisDeltaRealty";
import YoutubeClone from "./pages/YoutubeClone/YoutubeClone";
import Footer from "./components/Footer/Footer";
import ContactMe from "./pages/ContactMe/ContactMe";
import Resources from "./pages/Resources/Resources";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Col xs={true}>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/Morris%20Delta%20Realty"
              element={<MorrisDeltaRealty />}
            />
            <Route path="/Youtube%20Clone" element={<YoutubeClone />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/Resources" element={<Resources />} />
          </Routes>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Col>
    </Container>
  );
}

export default App;
