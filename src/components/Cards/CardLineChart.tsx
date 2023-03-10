import React from "react";
// import { CategoryScale, Chart, ChartConfiguration, registerables } from "chart.js";
import {
  Chart as ChartJS,
  ChartConfiguration,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

declare const window: Window &
  typeof globalThis & {
    myLine: object;
  };

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: new Date().getFullYear().toString(),
      backgroundColor: "#4c51bf",
      borderColor: "#4c51bf",
      data: [65, 78, 66, 44, 56, 67, 75],
      fill: false,
    },
    {
      label: (new Date().getFullYear() - 1).toString(),
      fill: false,
      backgroundColor: "#fff",
      borderColor: "#fff",
      data: [40, 68, 86, 74, 56, 60, 87],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  title: {
    display: false,
    text: "Sales Charts",
    fontColor: "white",
  },
  legend: {
    labels: {
      fontColor: "white",
    },
    align: "end",
    position: "bottom",
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
};

export default function CardLineChart() {
  React.useEffect(() => {
    const config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear().toString(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: (new Date().getFullYear() - 1).toString(),
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              id: "x",
              ticks: {
                color: (context: any) =>
                  context.tick && context.tick.major && "#FF0000",
              },
              reverse: false,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              id: "y",
              ticks: {
                color: (context: any) =>
                  context.tick && context.tick.major && "#FF0000",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    // const canvas = document.getElementById("line-chart") as HTMLCanvasElement;
    // const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    // window.myLine = new Chart(ctx, config);
    // const chart: Chart = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="bg-blueGray-700 relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg">
        <div className="mb-0 rounded-t bg-transparent px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 flex-grow">
              <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase">
                Overview
              </h6>
              <h2 className="text-xl font-semibold text-white">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/* Chart */}
          <div className="h-350-px relative">
            {/* <canvas id="line-chart"></canvas> */}
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
