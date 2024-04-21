import { useState } from 'react';
import Modal from "../containers/modal";
import '../assets/styles/login.css';
import Index from '../components';

function Login() {
  // Estado para almacenar el correo electrónico y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene la recarga de la página por defecto

    fetch('/ruta/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // ARecibir la validación y validar para mover a página /home
    })
    .catch(error => {
      console.log("Error con la solicitud")
    });
  };

  return (
    <>
        <div className="login-body">
            <Modal className={"login-modal"}>
                <div className="login-header"><center><h1>Inicio de sesión</h1></center></div>
                <div className="modal-content">
                  <form onSubmit={handleSubmit}>
                    <div className="email-section input-style">
                      <div><label htmlFor="email">Correo electrónico:</label></div>
                      <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required></input> {/* Agrega value y onChange */}
                    </div>
                    <div className="pass-section input-style">
                      <div><label htmlFor="password">Contraseña:</label></div>
                      <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required></input> {/* Agrega value y onChange */}
                    </div>
                    <div className="btn-login"><button type="submit" className="login-button">Iniciar sesión</button></div>
                  </form>
                </div>
            </Modal>
        </div>
        <Index />
    </>
  );
}

export default Login;
