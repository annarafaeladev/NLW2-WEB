import React, { useState, FormEvent, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/TextArea";
import Select from "../../components/Select";

import "./styles.css";
import api from "../../service/api";

function TeacherForm() {
  const [schedulesItem, setSchedulesItem] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [avatar, setAvatar] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState(Number);

  function handleAddNewScheduleItem() {
    setSchedulesItem([...schedulesItem, { week_day: 0, from: "", to: "" }]);
  }

  function handleSelectSchedules(
    position: number,
    field: string,
    value: string
  ) {
    const newSchedule = schedulesItem.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setSchedulesItem(newSchedule);
  }

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    const result = await api.post("/classes", {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: schedulesItem,
    });

    if (result.data.ok) {
      return alert("Cadastro realizado com sucesso!");
    }

    return alert("Ops ocorreu um erro... cadastro não realizado.");
  }
  const options = [
    { value: "Matemática", label: "Matemátia" },
    { value: "Geografia", label: "Geografia" },
    { value: "Inglês", label: "Inglês" },
    { value: "História", label: "História" },
  ];

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aula"
        description="O primeiro passo é preencher o formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={options}
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <Input
              type="number"
              name="cost"
              label="Custo da sua aula por hora"
              value={cost}
              onChange={(e) => {
                setCost(parseInt(e.target.value));
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={handleAddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {schedulesItem.map((scheduleItem, index) => {
              console.log(scheduleItem, scheduleItem.week_day);
              return (
                <div className="schedule-item" key={scheduleItem.week_day}>
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) => {
                      handleSelectSchedules(index, "week_day", e.target.value);
                    }}
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sabádo" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) => {
                      handleSelectSchedules(index, "from", e.target.value);
                    }}
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) => {
                      handleSelectSchedules(index, "to", e.target.value);
                    }}
                  />
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
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
