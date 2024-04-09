import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import { BorderColor } from "@mui/icons-material";
import { purple } from "../Constants/Color";
//! ---------------------Import Statments------------------------------------
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip,
  Filler
);

const LineChatOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};
const LineChart = ({ value = [] }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: "rgba(75,12,192,0.2)",
        borderColor: purple,
      },
    ],
  };
  return <Line data={data} options={LineChatOptions} />;
};

const DoughnutChart = () => {
  return <div>DoughnutChart</div>;
};

export { LineChart, DoughnutChart };
