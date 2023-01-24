import './login.css';


function IniciarSesion() {

	const serverUrl = 'http://localhost:3000/api/auth'

	var User = document.getElementById("user").value
	var Password = document.getElementById("password").value
	var Resultado = document.getElementById("resultado")

	var credenciales = {
		mode: 'cors',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
			user: User,
			password: Password
		})
    };

  	const fetchApi = async () => {
		var response = await fetch(serverUrl,credenciales)
		return response.statusText
  	}

	Resultado.textContent = (fetchApi()) //agregar resultado en caso de no iniciar sesión.
}


function Login() {


  return (
    <div id="content-1">
      <h2>Porfavor ingrese sus credenciales</h2>
      <div className="inputs">
		<p className="labels">Usuario </p>
		<input id='user' type="text"/>
	  </div>
	  <div className="inputs">
		<p className="labels">Contraseña </p>
		<input id='password' type="password"/>
	  </div>
	  <button id='log-in' onClick={IniciarSesion}>Iniciar Sesion</button>
	  <p id='resultado'></p>
	</div>
  );
}

export default Login;