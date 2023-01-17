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

function App() {
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/Morris%20Delta%20Realty"
            element={<MorrisDeltaRealty />}
          />
          <Route path="/Youtube%20Clone" element={<YoutubeClone />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
