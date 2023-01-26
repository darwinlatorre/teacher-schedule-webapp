import "../../../styles/style.css";
import ListSearch from "../../../shared/components/ListSearch.jsx";
import React from "react";

function obtenerProfesores() {
  let state = fetch("/api/teachers")
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    });

  let teachers = [];

  state.then((data) => {
    var i = 0;
    for (i in data) {
      teachers.push(data[i]);
    }
  });

  return teachers;
}

function teacherHome() {
  return (
    <div id="home">
      <div id="home-tittle">
        <h1>Gestion de docentes</h1>
      </div>
      <div id="button-home-section">
        <button>Registrar Docente</button>
      </div>
      <ListSearch data={obtenerProfesores()} />
      <div id="log-off-home">
        <button className="exit-button">Atras</button>
      </div>
    </div>
  );
}

export default teacherHome;
