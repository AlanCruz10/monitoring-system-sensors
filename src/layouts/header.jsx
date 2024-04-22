import { useNavigate } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div className="header">
            <h1>RESONANCIA MAGNÉTICA</h1>
            <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default Header;