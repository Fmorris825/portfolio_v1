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
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <NavBar />
      <Container className="d-flex justify-content-center">
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
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
