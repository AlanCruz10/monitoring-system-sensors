import { useContext, useEffect, useRef } from "react";
import { createChart } from 'lightweight-charts';
import '../assets/styles/graphic.css'
import Context from "../context/context";


const dayData = [
	{ time: '2018-10-19', value: 26.19 },
	{ time: '2018-10-22', value: 25.87 },
	{ time: '2018-10-23', value: 25.83 },
	{ time: '2018-10-24', value: 25.78 }
];
const weekData = [
	{ time: '2016-07-18', value: 26.10 },
	{ time: '2016-07-25', value: 26.19 },
	{ time: '2016-08-01', value: 26.24 },
	{ time: '2019-05-27', value: 26.23 }
];
const monthData = [
	{ time: '2006-12-01', value: 25.40 },
	{ time: '2007-01-01', value: 25.50 },
	{ time: '2019-02-01', value: 25.79 },
	{ time: '2019-03-01', value: 25.77 }
];
const yearData = [
	{ time: '2006-01-02', value: 24.89 },
	{ time: '2017-01-02', value: 25.70 },
	{ time: '2018-01-01', value: 26.06 },
	{ time: '2019-01-01', value: 26.23 }
];

const seriesesData = new Map([
  ['1D', dayData],
  ['1W', weekData],
  ['1M', monthData],
  ['1Y', yearData],
]);

function Graphic({data}) {
    const graphicElementRef = useRef(null);
    const {dataDate} = useContext(Context);

    useEffect(() => {
        const graphic = createChart(graphicElementRef.current, {
            width: 825,
            height: 500,
            layout: {
                background: {
                    type: 'solid',
                    color: '#000000',
                },
                textColor: '#d1d4dc',
            },
            grid: {
                vertLines: {
                    visible: false,
                },
                horzLines: {
                    color: 'rgba(42, 46, 57, 0.5)',
                },
            },
            rightPriceScale: {
                borderVisible: true,
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
                borderVisible: false,
            },
            crosshair: {
                horzLine: {
                    visible: false,
                },
            },
        })
        graphic.timeScale().fitContent()
        const addData = (item) => {
            const data = graphic.addAreaSeries(colorRandom())
            const datas = item.map((e, i)=>({time:new Date(`${e.date} ${e.time}`), value: e.value}))
            console.log(datas[1].time)
            data.setData(datas.sort((a, b) => a.time - b.time))
            /*data
            console.log(item)
            const data_format = []
            for (let i = 0; i < item.length; i++) {
                const element = item[i];
                data_format.push({time:`${element.date} ${element.time}`, value:Math.random()})
            }*/
            /*
            for (let i = 0; i < 2; i++) {
                const element = item[i];
                data_format.push({time:element.time, value:i})
            }
            for (let i = 0; i < 1; i++) {
                const element = item[i];
                data_format.push({time:element, value:78})
            }*/
            /*console.log(dayData)
            console.log(data_format)
            data.setData(data_format);*/
        };
      
        addData(data)
      
        return () => {
            if (graphic) {
              graphic.remove();
            }
        };
    }, [data]);

    const colors = {
        yellow: {
            topColor: 'rgba(227, 242, 19, 0.5)',
            bottomColor: 'rgba(227, 242, 19, 0.05)',
            lineColor: 'rgba(227, 242, 19, 1)',
            lineWidth: 2,
        },
        blue: {
            topColor: 'rgba(19, 19, 242, 0.5)',
            bottomColor: 'rgba(19, 19, 242, 0.05)',
            lineColor: 'rgba(19, 19, 242, 1)',
            lineWidth: 2,
        },
        green: {
            topColor: 'rgba(23, 233, 79, 0.5)',
            bottomColor: 'rgba(23, 233, 79, 0.05)',
            lineColor: 'rgba(23, 233, 79, 1)',
            lineWidth: 2,
        },
        red: {
            topColor: 'rgba(233, 23, 51, 0.5)',
            bottomColor: 'rgba(233, 23, 51, 0.05)',
            lineColor: 'rgba(233, 23, 51, 1)',
            lineWidth: 2,
        },
    }

    const colorRandom = () => {
        const coloresKeys = Object.keys(colors);
        return colors[coloresKeys[Math.floor(Math.random() * (coloresKeys.length + 1))]];
    };

    return (
        <div className='container-graphic' ref={graphicElementRef} />
    );
}

export default Graphic;