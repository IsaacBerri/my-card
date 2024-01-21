import React, { useContext } from "react";
import "../styles/Card.css";
import Info from "../components/Info";
import Button from "../components/Button";
import About from "../components/About";
import Footer from "../components/Footer";
import { ModeContext } from "../context/ModeContexts";

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
