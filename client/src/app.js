import { useEffect } from 'react';
import './App.css';
import Login from './login/login.js';

function App() {

  const serverUrl = 'http://localhost:3000'

  const fetchApi = async () => {
    const response = await fetch(serverUrl)
    console.log(response.status)
  }

  useEffect(() => {
    fetchApi()
  }, []);

  return (
    
    <div id="App">
      <Login />
    </div>
  );
}

export default App;
