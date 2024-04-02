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

function Chart({data}) {
  console.log(data)
  const date = [];
  for (let i = 0; i < 10; i++) {
      const dates = (Math.random() * 10).toFixed(3)
      date.push(dates);
  }
  const asd = [];
  for (let i = 0; i < 10; i++) {
      const datess = Math.random() * 100;
      asd.push(datess);
  }


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
  };

    const data_g = {
      labels: date,
      datasets:[
          {
              label: 'Medición',
              data: asd,
              borderColor: 'rgba(227, 242, 19)',
              backgroundColor: 'rgba(204, 204, 0, 1)',
              tension: 0.2,
              fill:true,
          }
      ]
    }
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

  return (<Line options={options} data={data_g} className="container-graphic"/>);
}

export default Chart;