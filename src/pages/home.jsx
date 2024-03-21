import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../firebase/conexionFirebase";
import { ref, onValue } from "firebase/database";
import Header from "../layouts/header"
import Modal from "../containers/modal"
import Card from "../components/card";
import Button from "../components/button";
import "../assets/styles/home.css"


function Home (){

    const [data, setData] = useState({});
    const [time, setTime] = useState(0);
    const navigate = useNavigate()


    useEffect(() => {
        const db = getData()
        const count = ref(db, '/sensor')

        onValue(count, (snapshot) => {
            const dataFirebase = snapshot.val();
            setData(dataFirebase);
        });

        const intervalId = setInterval(() => {
            setTime(preTime => preTime + 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, []);
    
    /*useEffect(() => {
        if (time === 5) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "temperature": 1,
                "temperatureEnvironment": 2,
                "humidityEnvironment": 3,
                "day": 19,
                "mount": 3,
                "year": 2024,
                "hour": 7,
                "minute": 55,
                "second": 41
            });
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            fetch("http://localhost:8080/data/save/v1", requestOptions)
            .then((response) => {
                setTime(0) 
                response.text()})
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        }
    }, [time, data]);*/

    const seeHistory = () => {
        navigate('/history')
    }

    const sensors = [
        {
            name: "Sensor Humedad Ambiente",
            number: data.temperatura
        },
        {
            name: "Sensor Temperatura Ambiente",
            number: 4
        },
        {
            name:"Sensor Temperatura del Liquido",
            number: 6
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