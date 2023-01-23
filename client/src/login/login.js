import './login.css';

function IniciarSesion() {
	
	var User = document.getElementById("user")
	var Password = document.getElementById("password")
	var Resultado = document.getElementById("resultado")

	//llamada al metodo remoto
}

function Login() {

	const btn = document.querySelector("#log-in")

	btn.addEventListener("click",IniciarSesion())

  return (
    <div id="content-1">
      <p>Porfavor ingrese sus credenciales</p>
      <div class="inputs">
		<p>Usuario </p>
		<input id='user' type="text"/>
	  </div>
	  <div class="inputs">
		<p>Contraseña </p>
		<input id='password' type="password"/>
	  </div>
	  <button id='log-in'>Iniciar Sesion</button>
	  <p id='resultado'></p>
	</div>
  );
}

export default Login;