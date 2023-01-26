import "./login.css";
import Axios from "axios";
//import { useHistory } from "react-router-dom";

function IniciarSesion() {
  const serverUrl = "http://localhost:3000/api/auth";

  var User = document.getElementById("user").value;
  var Password = document.getElementById("password").value;
  var Resultado = document.getElementById("resultado");

  Axios.post("http://localhost:3000/api/auth", {
    user: User,
    password: Password,
  }).then((response) => {
    console.log(response.data);
  });
  //Resultado.textContent = status; //agrega resultado en caso de no iniciar sesión.
  
  //Redireccionando al calendario (XAMPP)
  window.location.assign('http://localhost/teacher-schedule-webapp/client/src/');
};

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
