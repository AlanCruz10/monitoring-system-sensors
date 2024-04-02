import "../assets/styles/navbar.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/button";

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [pageHome, setPageHome] = useState(false);
    const [pageHistory, setPageHistory] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setPageHome(true);
            setPageHistory(false);
        } else if (location.pathname === '/history') {
            setPageHome(false);
            setPageHistory(true);
        }
    }, [location.pathname]);

    const seeHistory = () => {
        navigate('/history');
    };
    
    const seeData = () => {
        navigate('/');
    };

    return (
        <div className="nav-bar">
            <Button action={seeData} text="Principal" isActive={pageHome} />
            <Button action={seeHistory} text="Historial" isActive={pageHistory} />
        </div>
    );
}

export default NavBar;
