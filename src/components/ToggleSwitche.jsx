import React, { useContext } from "react";
import { useState } from "react";
import '../styles/toggleSwitche.css'
import { ModeContext } from "../context/ModeContexts.jsx";

const ToggleSwitche = () => {
  const {setMode} = useContext(ModeContext)

  const [isChecked, setIsChecked] = useState(true)

 const handleChange = () => {
  setIsChecked(!isChecked)
  if (isChecked) {
    setMode("light")
  }else{
    setMode("dark")
  }
 }

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleChange} className="input__check" />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitche;
