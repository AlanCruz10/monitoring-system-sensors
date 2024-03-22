import Header from "../layouts/header";
import NavBar from "../components/navBar";
import Modal from "../containers/modal";

function History () {
    return (
        <div>
            <Header />
            <div className="nav-bar-div">
                <NavBar />
            </div>
            <div className="home-body">
                <Modal />
            </div>
        </div>
    );
}

export default History