import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

const TripChart = () => {
  return (
    <div className="bg-[#181818] p-4 px-5 rounded-2xl">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <span className="mb-4 text-2xl block">نمودار پیمایش</span>
        </div>
        <div className="col-span-12">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default TripChart;

const LineChart = () => {
  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "میزان ساعت حرکت",
        data: [10, 20, 35, 40, 50, 60],
        borderColor: "#02E996",
        tension: 0.4,
      },
      {
        label: "میزان ساعت پارک",
        data: [20, 10, 40, 30, 70, 20],
        borderColor: "#EF3725",
        tension: 0.4,
      },
      {
        label: "میزان ساعت توقف",
        data: [50, 40, 10, 80, 60, 30],
        borderColor: "#537FF1",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          font: {
            family: "IRANSans",
            size: 14,
          },
          color: "white",
          boxWidth: 20,
          padding: 50,
        },
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
        titleFont: {
          family: "IRANSans",
        },
        bodyFont: {
          family: "IRANSans",
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "IRANSans",
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: "IRANSans",
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
