import "./login.css";
//import { useHistory } from "react-router-dom";

function IniciarSesion() {
  const serverUrl = "http://localhost:3000/api/auth";
  //const { push } = useHistory();

  var User = document.getElementById("user").value;
  var Password = document.getElementById("password").value;
  var Resultado = document.getElementById("resultado");

  var credenciales = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: User,
      password: Password,
    }),
  };

  const fetchApi = async () => {
    const response = await fetch(serverUrl, credenciales);
    return response.json();
  };

  var status = fetchApi();

  if (status.status === "SUCCESS") {
    //push("");
  } else {
    Resultado.textContent = status; //agrega resultado en caso de no iniciar sesión.
  }
}

export default function Login() {
  return (
    <div id="content-1">
      <h2>Porfavor ingrese sus credenciales</h2>
      <div className="inputs">
        <p className="labels">Usuario </p>
        <input id="user" type="text" />
      </div>
      <div className="inputs">
        <p className="labels">Contraseña </p>
        <input id="password" type="password" />
      </div>
      <button id="log-in" onClick={IniciarSesion}>
        Iniciar Sesion
      </button>
      <p id="resultado"></p>
    </div>
  );
}
