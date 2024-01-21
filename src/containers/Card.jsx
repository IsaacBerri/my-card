import React, { useContext } from "react";
import "../styles/Card.css";
import Info from "../components/Info.jsx";
import Button from "../components/Button.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import { ModeContext } from "../context/ModeContexts.jsx";

const Card = () => {

    const {mode} = useContext(ModeContext)

  return (
    <main className={`containerInfo ${mode}-card`}>
      <img src="https://i.postimg.cc/Z5V9r9vy/foto.jpg" alt="foto-isaac" />
      <Info/>
      <div className="containerButtons">
      <Button type={"mail"}/>
      <Button type={"briefcase"}/>
      </div>
      <About/>
      <Footer/>
    </main>
  );
};

export default Card;
