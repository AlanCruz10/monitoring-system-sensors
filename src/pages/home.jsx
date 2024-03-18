import { useEffect, useState } from "react";
import SensorData from "../components/sensorData";
import { useNavigate } from "react-router-dom";

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
            {sensors.map((item, key)=> (
                <SensorData key={key} data={item}/>
            ))
            }
            <button onClick={seeHistory}> Ver historial </button>
        </div>
    );
}

export default Home