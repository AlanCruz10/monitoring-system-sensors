import { useNavigate } from "react-router-dom";

function History () {

    const navigate = useNavigate()

    const seeData = () => {
        navigate('/')
    }

    return (
        <div>
            <p>SE VERA EL HISTORIAL</p>
            <button onClick={seeData}> Ver datos </button>
        </div>
    );
}

export default History