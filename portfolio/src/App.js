import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Component Imports
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
