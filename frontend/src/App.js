// General Imports
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Component Imports
import NavBar from "./components/NavBar/NavBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { Container, Col } from "react-bootstrap";
import MorrisDeltaRealty from "./pages/MorrisDeltaRealty/MorrisDeltaRealty";
import YoutubeClone from "./pages/YoutubeClone/YoutubeClone";
import BodyContainer from "./components/BodyContainer/BodyContainer";

function App() {
  return (
    <div>
      <NavBar />
      <BodyContainer />
    </div>
  );
}

export default App;
