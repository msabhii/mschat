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
import { getLast7Days } from "../../lib/Features";
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

const labels = getLast7Days();

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
    labels,
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

const DoughnutChart = ({ value = [], labels }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats Vs Groups Chats",
        backgroundColor: "rgba(75,12,192,0.2)",
        borderColor: purple,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export { LineChart, DoughnutChart };
