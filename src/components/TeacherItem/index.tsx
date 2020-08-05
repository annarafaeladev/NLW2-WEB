import React from "react";
import "./styles.css";
import "../../assets/styles/global.css";
import wpp from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/53823948?s=460&u=8413d96db8f8c9d4ae05905dfc7982c58489700f&v=4"
          alt="Anna Rafaela"
        />
        <div>
          <strong>Anna Rafaela</strong>
          <span>Algoritmos</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> <br />
        Nunc non justo eu nisi rutrum efficitur eu eget justo. Etiam vestibulum
        sem vulputate, sagittis risus id, porttitor nisi. Nam euismod nisi et
        diam tempus, et ornare ligula imperdiet.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          Entrar em Contato
          <img src={wpp} alt="WhatsApp" />
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
