import React, { useState } from 'react';
import Header from "../layouts/header";
import NavBar from "../components/navBar";
import Modal from "../containers/modal";
import Card from "../components/card";
import Button from "../components/button";
import "../assets/styles/history.css"

function History () {
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const opciones = ['DS18B20', 'DHTC11'];

    const abrirPanel = () => {
        setMostrarPanel(true);
    };

    const cerrarPanel = () => {
        setMostrarPanel(false);
    };

    const seleccionarOpcion = (opcion) => {
        setOpcionSeleccionada(opcion);
        cerrarPanel();
    };

    return (
        <div>
            <Header />
            <div className="nav-bar-div">
                <NavBar />
            </div>
            <div className="home-body">
                <Modal>
                    <h1>HISTORIAL</h1>
                    <div className="choose-sensor">
                        <div><Button className={"choose-sensor-button"} text={"SELECCIONA UN SENSOR"} action={abrirPanel}/></div>
                        {mostrarPanel && (
                            <>
                                <div className="panel">
                                    {opciones.map((opcion, index) => (
                                            <p key={index} onClick={() => seleccionarOpcion(opcion)}>
                                                {opcion}
                                            </p>
                                        ))}
                                </div>
                                <div className="panel-cancel-button">
                                    <button onClick={cerrarPanel}>Cerrar</button>
                                </div>
                            </>
                        )}
                        {(opcionSeleccionada && !mostrarPanel) && (
                            <div className="selected-sensor">
                                <p>Opción seleccionada: {opcionSeleccionada}</p>
                            </div>
                        )}
                    </div>
                    <div className="historial-graphics">
                        {opcionSeleccionada && (<Card>
                            <div className="data-graphics">
                                <div className="graphics">
                                    sadas
                                </div>
                            </div>
                        </Card>)}
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default History;
