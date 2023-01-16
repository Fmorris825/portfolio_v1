// General Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Component Imports
import NavBar from "./components/NavBar/NavBar";
import BodyContainer from "./components/BodyContainer/BodyContainer";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div>
      <NavBar />
      <SideMenu />
      <BodyContainer />
    </div>
  );
}

export default App;
