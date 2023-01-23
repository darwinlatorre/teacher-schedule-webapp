import './login.css';


function IniciarSesion() {
	
	var User = document.getElementById("user")
	var Password = document.getElementById("password")
	//var Resultado = document.getElementById("resultado")

	//console.log(User," y ",Password)
}


function Login() {

  return (
    <div id="content-1">
      <p>Porfavor ingrese sus credenciales</p>
      <div className="inputs">
		<p>Usuario </p>
		<input id='user' type="text"/>
	  </div>
	  <div className="inputs">
		<p>Contraseña </p>
		<input id='password' type="password"/>
	  </div>
	  <button id='log-in' onClick="IniciarSesion()">Iniciar Sesion</button>
	  <p id='resultado'></p>
	</div>
  );
}

export default Login;