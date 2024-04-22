import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "../containers/modal";
import '../assets/styles/login.css';
import Index from '../components';
import UserContext from '../context/userContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const {userState, setUserState} = useContext(UserContext)
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/user/post/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setUserState(true)
        navigate('/home');
      } else {
        setUserState(false)
        setShowError(true); // Mostrar el mensaje de error si success es false
      }
    })
    .catch(() => {
      console.log("Error con la solicitud")
    });
  };

  return (
    <>
        <div className="logo"><img src='logo-sanatorio.jpg' /></div>
        <div className="login-body">
            <Modal className={"login-modal"}>
                <div className="login-header"><center><h1>INICIO DE SESIÓN</h1></center></div>
                <div className="modal-content">
                  <form onSubmit={handleSubmit}>
                    <div className="email-section input-style label-style">
                      <div><label htmlFor="email">Correo electrónico:</label></div>
                      <input placeholder='Ingresa un correo electronico' type="email" id="email" name="email" value={email} onChange={handleEmailChange} required></input>
                    </div>
                    <div className="pass-section input-style label-style">
                      <div><label htmlFor="password">Contraseña:</label></div>
                      <input placeholder='Ingresa la contraseña' type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required></input>
                    </div>
                    <div className="btn-login"><button type="submit" className="login-button">Iniciar sesión</button></div>
                  </form>
                  {showError && <div className='error'><h2>Datos incorrectos. Por favor, inténtalo de nuevo.</h2></div>}
                </div>
            </Modal>
        </div>
        <Index />
    </>
  );
}

export default Login;
