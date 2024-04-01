import React, { useState, useContext } from 'react';
import Header from "../layouts/header";
import NavBar from "../components/navBar";
import Modal from "../containers/modal";
import Graphic from '../components/graphic';
import Card from "../components/card";
import Button from "../components/button";
import "../assets/styles/history.css"
import SwitcherGraphic from '../components/switcherGraphic';
import Context from '../context/context';
import Chart from '../components/graphicData';

function History () {
    const [showPanel, setShowPanel] = useState(false);
    const {dataDate, setDataDate} = useContext(Context);
    const [selectDate, setSelectDate] =  useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const [date, setDate] = useState("");
    const [dateString, setDateString] = useState([])
    const [data, setData] = useState(null);

    const options = ['DS18B20', 'DHT11'];

    const togglePanel = () => {
        setShowPanel(!showPanel);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        togglePanel()
    };

    const getDate = (date) => {
        console.log(date)
        console.log(selectedOption)
        fetch(`http://localhost:8080/data/get/history/v1?sensor=${selectedOption}&date=${date}`,{
            method: "GET",
            mode: "cors",
            redirect: 'follow',
            headers:{
                "Content-Type": "application/json",
            }
          })
        .then((response) => response.json())
        .then((result) => {
            console.log(result.data)
            setData(result.data)})
        .catch((error) => console.error(error));
        const dateSplit = date.split("-")
        const dateFormat = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2])
        setDate(dateFormat)
    }

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
                        <div className='choose-sensor-btn-div'>
                            <Button className={"choose-sensor-button"} text={selectedOption ? selectedOption : "SELECT A SENSOR"} action={togglePanel}/>
                            {showPanel && (
                                <div className="panel">
                                    {options.map((option, index) => (
                                            <p key={index} onClick={() => selectOption(option)}>
                                                {option}
                                            </p>
                                        ))}
                                </div>
                            )}
                        </div>
                        {(selectedOption) && 
                            <>
                                <div className='date-selector-input'>
                                    <Button 
                                        text={"SELECT A DATE"} 
                                        icon={<img src='calendar.png' alt='calendar icon' />} 
                                        className={"choose-date-button"}
                                        action={() => document.getElementById('date_selector').showPicker()}
                                    />
                                    <input 
                                        id='date_selector'
                                        className='input-date'
                                        type='date'
                                        onChange={(e) => getDate(e.target.value)}
                                    />
                                </div>
                                {(date != null && data != null) && 
                                    <div>
                                        <SwitcherGraphic 
                                        data={data}
                                        date={date}/>
                                    </div>
                                }
                            </>
                        }
                    </div>
                    <div className="history-graphics">
                        {(dataDate.dataSensor != null && dataDate.item != '' && dataDate.filter != '') && (
                            <>
                                <Card className={"no-sensor"}>
                                    {(selectedOption != null) &&
                                        <>
                                            <h2>Sensor {selectedOption}: Filtrado por {dataDate.item}</h2>
                                            {(dataDate.item == "1D") && ( 
                                                <p>DIA: {date.getDate()}</p>
                                            )}
                                            {(dataDate.item == "1M") && ( 
                                                <p>MES: {date.getMonth() + 1}</p>
                                            )}
                                            {(dataDate.item == "1Y") && ( 
                                                <p>AÑO: {date.getFullYear()}</p>
                                            )}
                                            <h3>Datos de la temp</h3>
                                            <div className="data-graphics">
                                                <Chart data={dataDate.dataSensor}/>
                                            </div>
                                        </>
                                    }
                                </Card>
                            </>
                        )}
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default History;
