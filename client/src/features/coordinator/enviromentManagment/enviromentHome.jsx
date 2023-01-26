import "../../../styles/style.css";

function enviromentHome() {
  return (
    <div id="home">
      <div id="home-tittle">
        <h1>Gestion de docentes</h1>
      </div>
      <div id="button-home-section">
        <button className="option-button">Crear Ambiente</button>
        <button className="option-button">Editar Ambiente</button>
        <button className="option-button">Consultar Ambiente</button>
      </div>
      <div id="log-off-home">
        <button className="exit-button">Atras</button>
      </div>
    </div>
  );
}

export default enviromentHome;
