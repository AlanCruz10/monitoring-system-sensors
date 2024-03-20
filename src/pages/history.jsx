import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Modal from "../containers/modal";

function History () {

    const navigate = useNavigate()

    const seeData = () => {
        navigate('/')
    }

    return (
        <div>
            <Header />
            <div className="home-body">
                <Modal>
                    <button onClick={seeData}> Ver datos </button>            
                </Modal>
            </div>
        </div>
    );
}

export default History