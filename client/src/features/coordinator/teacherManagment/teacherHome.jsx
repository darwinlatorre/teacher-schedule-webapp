import "../../../styles/style.css";
import ListSearch from "../../../shared/components/ListSearch.jsx";
import React from "react";

function obtenerProfesores() {
  var state = {
    objects: [],
  };

  fetch("/api/teachers")
    .then((response) => response.json())
    .then((data) => {
      state = JSON.stringify({ objects: data });
    });

  return state.objects;
}

function teacherHome() {
  return (
    <div id="home">
      <div id="home-tittle">
        <h1>Gestion de docentes</h1>
      </div>
      <div id="button-home-section">
        <button className="option-button">Registrar Docente</button>
        <button className="option-button">Editar Docente</button>
        <button className="option-button">Consultar Docente</button>
      </div>
      <ListSearch data={obtenerProfesores()} />
      <div id="log-off-home">
        <button className="exit-button">Atras</button>
      </div>
    </div>
  );
}

export default teacherHome;
