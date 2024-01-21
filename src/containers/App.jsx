import { useContext } from "react";
import ToggleSwitche from "../components/toggleSwitche";
import "../styles/App.css";
import Card from "./Card";
import { ModeContext } from "../context/ModeContexts";

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
