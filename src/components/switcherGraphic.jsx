import { useContext, useEffect, useState } from 'react';
import '../assets/styles/switcher.css'
import Context from '../context/context';

function SwitcherGraphic(props) {
    const {dataDate, setDataDate} = useContext(Context)
    const [activate, setActivate] = useState('')

    const intervals = ['1D', '1M', '1Y'];


    const rangeSelect = (item, data, date) => {
        setActivate(item)
        setDataDate({...dataDate, item: item, dataSensor: '1D', filter: date})
    }


    return (
        <div className="switcher">
            {intervals.map((item) => (
                <button 
                    key={item} 
                    className={`switcher-item ${activate === item ? 'switcher-active-item' : ''}`} 
                    onClick={() => rangeSelect(item, props.data, props.date)}>
                        {item}
                </button>
            ))}
        </div>
    );
}

export default SwitcherGraphic