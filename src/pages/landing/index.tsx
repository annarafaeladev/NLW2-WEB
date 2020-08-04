import React from "react";
import "./styles.css";
import "../../assets/styles/global.css";
import logoImg from "../../assets/images/logo.svg";
import landingLogo from "../../assets/images/landing.svg";
import giveClassIcon from "../../assets/images/icons/give-classes.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingLogo}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="button-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassIcon} alt="Dar aulas" />
            Dar aulas
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={purpleHeart} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
