import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import '../assets/styles/graphic.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function Chart({data, date}) {

var label = data[1].map((m, index)=>m.date)

if (data[0] == "year_"+date.getFullYear()) {
  label = data[1].map((m, index)=>m.date_month)
}

if (data[0] == "day_"+date.getDate()) {
  label = data[1].map((m, index)=>m.time)
}

const dataGraphic = data[1].map((m, index)=>m.value)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

const dataG = {
  labels: label,
  datasets:[
    {
      label: data[1][0].type,
      data: dataGraphic,
      fill:true,
      borderColor: 'rgba(227, 242, 19, 0.5)',
      backgroundColor: 'rgba(227, 242, 19, 0.2)',
      pointBackgroundColor:'rgba(0, 0, 0, 1)',
      tension: 0.001,
    }
  ]
}

  return (<Line options={options} data={dataG} className="container-graphic"/>);
}

export default Chart;