import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "../../assets/styles/global.css";
import logoImg from "../../assets/images/logo.svg";
import landingLogo from "../../assets/images/landing.svg";
import giveClassIcon from "../../assets/images/icons/give-classes.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import api from "../../service/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState();
  useEffect(() => {
    getConnections();
  }, []);

  async function getConnections() {
    const result = await api.get("/connections");

    if (result.status) {
      setTotalConnections(result.data.total);
    }
  }

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <div id="view-image">
          <img
            src={landingLogo}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </div>
        <div className="button-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeart} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
