import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/TextArea";
import Select from "../../components/Select";

import "./styles.css";

function TeacherForm() {
  const [schedulesItem, setSchedulesItem] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const options = [
    { value: "Matemática", label: "Matemátia" },
    { value: "Geografia", label: "Geografia" },
    { value: "Inglês", label: "Inglês" },
    { value: "História", label: "História" },
  ];

  function handleAddNewScheduleItem() {
    setSchedulesItem([...schedulesItem, { week_day: 0, from: "", to: "" }]);
  }
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aula"
        description="O primeiro passo é preencher o formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select name="subject" label="Matéria" options={options} />
          <Input name="cost" label="Custo da sua aula por hora" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={handleAddNewScheduleItem}>
              + Novo horário
            </button>
          </legend>
          {schedulesItem.map((item) => {
            return (
              <div className="schedule-item" key={item.week_day}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={[
                    { value: "1", label: "Domingo" },
                    { value: "2", label: "Segunda-feira" },
                    { value: "3", label: "Terça-feira" },
                    { value: "4", label: "Quarta-feira" },
                    { value: "5", label: "Quinta-feira" },
                    { value: "6", label: "Sexta-feira" },
                    { value: "7", label: "Sabádo" },
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
