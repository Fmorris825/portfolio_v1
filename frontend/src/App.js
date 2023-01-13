// General Imports
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages Imports
import LandingPage from "./pages/LandingPage/LandingPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

// Component Imports
import NavBar from "./components/NavBar/NavBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { Container, Col } from "react-bootstrap";
import MorrisDeltaRealty from "./pages/MorrisDeltaRealty/MorrisDeltaRealty";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/Morris%20Delta%20Realty"
          element={<MorrisDeltaRealty />}
        />
      </Routes>
    </div>
  );
}

export default App;
