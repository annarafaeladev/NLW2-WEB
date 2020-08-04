import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/landing";
import TeacherForm from "./pages/teacherForm";
import TeacherList from "./pages/teacherList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" exact component={TeacherList} />
      <Route path="/give-classes" exact component={TeacherForm} />
    </BrowserRouter>
  );
}
