import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Component Imports
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LandingPage />
    </div>
  );
}

export default App;
