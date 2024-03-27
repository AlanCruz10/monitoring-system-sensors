import { useContext, useEffect, useState } from 'react';
import '../assets/styles/switcher.css'
import Context from '../context/context';

function SwitcherGraphic() {
    const {setDataDate} = useContext(Context)
    const [activate, setActivate] = useState('')

    const intervals = ['1D', '1W', '1M', '1Y'];


    const rangeSelect = (item) => {
        setActivate(item)
        const data = {
            item: item,
        }
        setDataDate(data)
    }


    return (
        <div className="switcher">
            {intervals.map((item) => (
                <button 
                    key={item} 
                    className={`switcher-item ${activate === item ? 'switcher-active-item' : ''}`} 
                    onClick={() => rangeSelect(item)}>
                        {item}
                </button>
            ))}
        </div>
    );
}

export default SwitcherGraphic