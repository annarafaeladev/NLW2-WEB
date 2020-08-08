import React from "react";
import "./styles.css";
import "../../assets/styles/global.css";
import wpp from "../../assets/images/icons/whatsapp.svg";
import api from "../../service/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Avatar" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target="blanck"
          href={`https://wa.me/${teacher.whatsapp}?text=Olá%20Proffy%20,%20gostaria%20de%20agendar%20uma%20aula!`}
        >
          Entrar em Contato
          <img src={wpp} alt="WhatsApp" />
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
