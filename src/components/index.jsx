import React, { useState } from 'react';
import '../assets/styles/index.css';

function Index() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: isExpanded ? '70%' : '50px',
                    height: isExpanded ? '90%' : '50px',
                    backgroundColor: isExpanded ? 'white' : '#FFCC00',
                    border: isExpanded ? '1px solid black' : 'none',
                    borderRadius: isExpanded ? '18px' : '50%',
                    color: isExpanded ? 'black':'white',
                    display: isExpanded ? '' : 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'width 0.5s, height 0.5s, border-radius 0.5s',
                    transform: isExpanded ? 'translate(-20%, -2%)' : 'none',
                }}
                onClick={handleClick}
            >
                {isExpanded ? (
                    <div className="info-modal">
                        <div className="modal-header"><center><h1>RESONANCIA MAGNETICA</h1></center></div>
                        <center><h2>Sistema de monitoreo</h2></center>
                        <div className="content">
                            <div className="left-section">
                                <img src="chiller.jpg" alt="Left Image" />
                                <div>
                                    <h3>Monitoreo de temperatura de liquidos del enfriador de agua medicinal.</h3>
                                    <p>El personal de biomedica será capaz de mantener un monitoreo constante de la temperatura de los liquidos que usa el
                                    enfriador medicinal, de tal manera que el encargado del area se cerciora del funcionamiento del equipo. 
                                    finalmente los datos son almacenados, para que, en caso necesario se realizar un diagnostico sobre funcionamiento del equipo.</p>
                                </div>
                            </div>
                            <div className="right-section">
                                <div>
                                        <h3>Monitoreo de temperatura y humedad del cuarto.</h3>
                                        <p>El encargado del area mantendrá monitorizado los rangos de temperatura y humedad de la sala, 
                                        con el objetivo de que esta se encuentre bajo los parametros adecuados para el buen funciomamiento de la maquinaria. 
                                        Asi mismo se almacenaran los datos recopilados para observar el comportamiento termico de la sala.</p>
                                </div>
                                <img src="room.jpg" alt="Right Image" />
                            </div>
                        </div>
                    </div>
                ) : '?'}
            </div>
        </>
    );
}

export default Index;