import { useContext } from "react";
import ToggleSwitche from "../components/ToggleSwitche.jsx";
import "../styles/App.css";
import Card from "./Card.jsx";
import { ModeContext } from "../context/ModeContexts.jsx";

function App() {
  const {mode} = useContext(ModeContext)
  return (
    <div id="containerApp" className={`${mode}-mode`}>
      <ToggleSwitche />
      <Card />
    </div>
  );
}

export default App;
