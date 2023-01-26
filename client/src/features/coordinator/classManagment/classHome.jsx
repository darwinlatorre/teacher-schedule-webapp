import "../../../styles/style.css";

function classHome() {
  return (
    <div id="home">
      <div id="home-tittle">
        <h1>Gestion de docentes</h1>
      </div>
      <div id="button-home-section">
        <button className="option-button">Crear Clase</button>
        <button className="option-button">Editar Clase</button>
        <button className="option-button">Consultar Clase</button>
      </div>
      <div id="log-off-home">
        <button className="exit-button">Atras</button>
      </div>
    </div>
  );
}

export default classHome;
