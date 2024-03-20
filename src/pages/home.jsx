import "../assets/styles/home.css"
import { useEffect, useState } from "react";
import SensorData from "../components/sensorData";
import { useNavigate } from "react-router-dom";
import Header from "../components/header"
import Modal from "../containers/modal"
import Card from "../components/card";
import Button from "../components/button";

function Home (){

    const [data, setData] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
          setData(prevData => prevData + 1);
        }, 5000);
        return () => clearInterval(intervalId);
    }, 5000);

    const seeHistory = () => {
        navigate('/history')
    }

    const sensors = [
        {
            name: "Sensor Humedad Ambiente",
            number: data
        },
        {
            name: "Sensor Temperatura Ambiente",
            number: data + 1
        },
        {
            name:"Sensor Temperatura del Liquido",
            number: data + 2
        }
    ]
    
    return (
        <div>
            <Header />
            <div className="home-body">
                <Modal>
                    <h1>CUARTO DE MÁQUINAS</h1>
                    <div className="sensor-area">
                        <Card state={true} sensor_name={"Ds18b20"} sensor_value={sensors[2].number} sensor_description={"Medidor de temperatura en liquidos"}/>
                        <Card 
                            state={false} 
                            sensor_name="DHTC11"
                            sensor1_value={sensors[1].number}
                            sensor1_description="Sensor de temperatura"
                            sensor2_value={sensors[0].number}
                            sensor2_description="Sensor de humedad en el ambiente"
                        />
                    </div>
                    <div className="button-position">
                        <Button action={seeHistory} text="Ver historial"/>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Home