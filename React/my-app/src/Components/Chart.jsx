import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 120, 102)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(153, 62, 235)',
    },
  ],
};

export default function BarGraph() {
  return <Bar options={options} data={data} />;
}
