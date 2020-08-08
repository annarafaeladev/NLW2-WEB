import React, { useEffect, useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../service/api";

import "./styles.css";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_Day] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState([]);
  const options = [
    { value: "Matemática", label: "Matemátia" },
    { value: "Geografia", label: "Geografia" },
    { value: "Inglês", label: "Inglês" },
    { value: "História", label: "História" },
  ];

  const options_week = [
    { value: "0", label: "Domingo" },
    { value: "1", label: "Segunda-feira" },
    { value: "2", label: "Terça-feira" },
    { value: "3", label: "Quarta-feira" },
    { value: "4", label: "Quinta-feira" },
    { value: "5", label: "Sexta-feira" },
    { value: "6", label: "Sabádo" },
  ];
  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const result = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    if (result.status) {
      setData(result.data);
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os Proffys disponíveis">
        <form id="search-teacher" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={options}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeek_Day(e.target.value);
            }}
            options={options_week}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {!!data &&
          data.map((teacher: Teacher) => {
            return <TeacherItem teacher={teacher} key={teacher.id} />;
          })}
      </main>
    </div>
  );
}

export default TeacherList;
