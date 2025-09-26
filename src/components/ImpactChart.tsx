import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ImpactChartProps {
  type: 'line' | 'bar' | 'doughnut';
  title: string;
  data: number[];
  labels: string[];
  color: string | string[];
}

const ImpactChart: React.FC<ImpactChartProps> = ({ type, title, data, labels, color }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: Array.isArray(color) ? color : `${color}20`,
        borderColor: Array.isArray(color) ? color[0] : color,
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: type === 'doughnut',
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: '600' as const,
        },
      },
    },
    scales: type === 'doughnut' ? undefined : {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={chartData} options={options} />;
      case 'bar':
        return <Bar data={chartData} options={options} />;
      case 'doughnut':
        return <Doughnut data={chartData} options={options} />;
      default:
        return <Bar data={chartData} options={options} />;
    }
  };

  return <div className="h-full">{renderChart()}</div>;
};

export default ImpactChart;