import { useContext, useEffect, useState } from 'react';
import '../assets/styles/switcher.css'
import Context from '../context/context';

function SwitcherGraphic(props) {
    const {dataDate, setDataDate} = useContext(Context)
    const [activate, setActivate] = useState('')

    const intervals = ['Día', 'Mes', 'Año'];


    const rangeSelect = (item, data, date) => {
        setActivate(item)
        setDataDate({...dataDate, item: item, dataSensor: data, filter: date})
    }

    useEffect(() => {
        if (!props.selectedOption || !props.date) {
            setActivate('')
        }
    }, [props.selectedOption, props.date])


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