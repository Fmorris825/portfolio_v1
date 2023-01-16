// Pages Imports
import LandingPage from "../../pages/LandingPage/LandingPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import MorrisDeltaRealty from "../../pages/MorrisDeltaRealty/MorrisDeltaRealty";
import YoutubeClone from "../../pages/YoutubeClone/YoutubeClone";

import SideMenu from "../SideMenu/SideMenu";

// General Imports
import { Routes, Route } from "react-router-dom";

const BodyContainer = () => {
  return (
    <div className="d-flex justify-content-center">
      <Routes>
        <Route className="d-flex" path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/Morris%20Delta%20Realty"
          element={<MorrisDeltaRealty />}
        />
        <Route path="/Youtube%20Clone" element={<YoutubeClone />} />
      </Routes>
    </div>
  );
};

export default BodyContainer;
