import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
  const options = [
    { value: "Matemática", label: "Matemátia" },
    { value: "Geografia", label: "Geografia" },
    { value: "Inglês", label: "Inglês" },
    { value: "História", label: "História" },
  ];

  const options_week = [
    { value: "1", label: "Domingo" },
    { value: "2", label: "Segunda-feira" },
    { value: "3", label: "Terça-feira" },
    { value: "4", label: "Quarta-feira" },
    { value: "5", label: "Quinta-feira" },
    { value: "6", label: "Sexta-feira" },
    { value: "7", label: "Sabádo" },
  ];

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os Proffys disponíveis">
        <form id="search-teacher">
          <Select name="subject" label="Matéria" options={options} />
          <Select
            name="week_day"
            label="Dia da semana"
            options={options_week}
          />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
