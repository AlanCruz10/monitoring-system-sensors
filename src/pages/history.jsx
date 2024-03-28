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

function History () {
    const [showPanel, setShowPanel] = useState(false);
    const {dataDate, setDataDate} = useContext(Context);
    const [selectDate, setSelectDate] =  useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const [date, setDate] = useState("");
    const [data, setData] = useState("");

    const options = ['DS18B20', 'DHTC11'];

    const togglePanel = () => {
        setShowPanel(!showPanel);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        //fetch
        setData("data")
        togglePanel();
    };

    const getDate = (date) => {
        setDate(date)
    }

    return (
        <div>
            <Header />
            <div className="nav-bar-div">
                <NavBar />
            </div>
            <div className="home-body">
                <Modal>
                    <h1>HISTORY</h1>
                    <div className="choose-sensor">
                        <div className='choose-sensor-btn-div'>
                            <Button className={"choose-sensor-button"} text={selectedOption ? selectedOption : "SELECT A SENSOR"} action={togglePanel}/>
                        </div>
                        {showPanel && (
                            <>
                                <div className="panel">
                                    {options.map((option, index) => (
                                            <p key={index} onClick={() => selectOption(option)}>
                                                {option}
                                            </p>
                                        ))}
                                </div>
                            </>
                        )}
                        {(selectedOption && data != "") && 
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
                                {date != "" && 
                                    <div><SwitcherGraphic 
                                        data={data}
                                        date={date}
                                    /></div>
                                }
                            </>
                        }
                    </div>
                    <div className="history-graphics">
                        {(dataDate.dataSensor != null && dataDate.item != '' && dataDate.filter != '') && (
                            <Card className={"no-sensor"}>
                                <div className="data-graphics">
                                    <Graphic />
                                </div>
                            </Card>
                        )}
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default History;
