import "../assets/styles/home.css"
import { useEffect, useState } from "react";
import { getData } from "../firebase/conexionFirebase";
import { ref, onValue } from "firebase/database";
import addNotification from 'react-push-notification'
import Header from "../layouts/header"
import NavBar from "../components/navBar";
import Modal from "../containers/modal"
import Card from "../components/card";
import Index from "../components";
import "../assets/styles/home.css"


function Home (){

    const [temperatureDht11, setTemperatureDht11] = useState(0);
    const [humidityDht11, setHumidityDht11Dht11] = useState(0);
    const [temperaureDs18b20, setTemperaureDs18b20] = useState(0);
    const tempDs18b20Min = 20
    const tempDs18b20Max = 30

    useEffect(() => {
        Notification.requestPermission()

        const db = getData()
        const count = ref(db, '/sensor')

        onValue(count, (snapshot) => {
            const dataFirebase = snapshot.val();
                
            setTemperatureDht11(dataFirebase.dht11.temperature)
            setHumidityDht11Dht11(dataFirebase.dht11.humidity)
            setTemperaureDs18b20(dataFirebase.ds18b20.temperature)
        });
        
        if (temperaureDs18b20 <= tempDs18b20Min || temperaureDs18b20 >= tempDs18b20Max) {
            addNotification({
                title: 'ALERTA',
                message: `Temperatura del sensor DS18B20 llegando a niveles críticos\nTemperatura: ${temperaureDs18b20}`,
                duration:4000,
                icon: 'warning.png',
                native: true
            })
        }
        
    }, []);

    const seeHistory = () => {
        navigate('/history')
    }

    const sensors = [
        {
            name: "Sensor Humedad Ambiente",
            number: humidityDht11
        },
        {
            name: "Sensor Temperatura Ambiente",
            number: temperatureDht11
        },
        {
            name:"Sensor Temperatura del Liquido",
            number: temperaureDs18b20
        }
    ]
    
    return (
        <div>
            <Header />
            <div className="nav-bar-div">
                <NavBar />
            </div>
            <div className="home-body">
                <Modal className={"container-modal"}>
                    <h1>CUARTO DE MÁQUINAS</h1>
                    <div className="sensor-area">
                        <Card 
                            enable={true} 
                            state={true} 
                            sensor_name={"CHILLER"} 
                            sensor_value={sensors[2].number + "°C"} 
                            sensor_description={"Medidor de temperatura en liquidos"}/>
                        <Card 
                            enable={true}
                            state={false} 
                            sensor_name="SALA"
                            sensor1_value={sensors[1].number + "°C"}
                            sensor1_description="Sensor de temperatura"
                            sensor2_value={sensors[0].number + "%HR"}
                            sensor2_description="Sensor de humedad en el ambiente"
                        />
                    </div>
                </Modal>
            </div>
            <Index />
        </div>
    );
}

export default Home