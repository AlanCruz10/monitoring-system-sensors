import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import '../assets/styles/graphic.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({data, date}) {

  const colors = {
    yellow: {
        borderColor: 'rgba(227, 242, 19, 0.5)',
        backgroundColor: 'rgba(227, 242, 19, 1)'
    },
    blue: {
        borderColor: 'rgba(23, 52, 235, 0.5)',
        backgroundColor: 'rgba(23, 52, 235, 1)'
    },
    purple: {
        borderColor: 'rgba(145, 23, 235, 0.5)',
        backgroundColor: 'rgba(145, 23, 235, 1)'
    },
    green: {
        borderColor: 'rgba(23, 233, 79, 0.5)',
        backgroundColor: 'rgba(23, 233, 79, 1)'
    },
    red: {
        borderColor: 'rgba(233, 23, 51, 0.5)',
        backgroundColor: 'rgba(233, 23, 51, 1)'
    },
}

const colorRandom = () => {
    const coloresKeys = Object.keys(colors);
    return colors[coloresKeys[Math.round(Math.random() * (coloresKeys.length))]];
};


// var label = data[1].map((m, index)=>m.date)

// if (data[0] == "year_"+date.getFullYear()) {
//   label = data[1].map((m, index)=>m.date_month)
// }

// if (data[0] == "day_"+date.getDate()) {
//   label = data[1].map((m, index)=>m.time)
// }

const dataGraphic = [];
for (let i = 0; i < 10; i++) {
    const dataGraphics = (Math.random() * 10).toFixed(3)
    dataGraphic.push(dataGraphics);
}
const label = [];
for (let i = 0; i < 10; i++) {
    const labels = Math.random() * 100;
    label.push(labels);
}

// const dataGraphic = data[1].map((m, index)=>m.value)

const colorR = colorRandom()

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    }
  },
};

const dataG = {
  labels: label,
  datasets:[
    {
      // label: data[1][0].type,
      label: "humedad xd",
      data: dataGraphic,
      borderColor: 'rgba(227, 242, 19, 0.5)',
      backgroundColor: 'rgba(227, 242, 19, 1)',
      tension: 1,
      fill:true,
    }
  ]
}

  return (<Line options={options} data={dataG} className="container-graphic"/>);
}

export default Chart;