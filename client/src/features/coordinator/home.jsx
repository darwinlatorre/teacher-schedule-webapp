import '../../styles/style.css';

function Home() {
	return (
		<div id="home">
			<div id="home-tittle">
				<h1>Bienvenido señor coordinador</h1>
			</div>
			<div id="button-home-section">
				<button className='option-button'>Gestión Ambientes</button>
				<button className='option-button'>Gestión de periodos Académicos</button>
				<button className='option-button'>Gestión de Docentes</button>
				<button className='option-button'>Gestión de horarios</button>
			</div>
			<div id="log-off-home">
				<button className="exit-button">Cerrar Sesion</button>
			</div>
		</div>
	);
}

export default Home;