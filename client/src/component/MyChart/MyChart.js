import React, { useEffect } from "react";
import Chart from "chart.js";

let LineChart;

function MyChart({ chartData, taskNumber, chartType }) {
  useEffect(() => {
    buildChart();
    console.log(chartType);
  }, [chartData, taskNumber, chartType]);
  const buildChart = () => {
    let ctx = document.getElementById("LineChart").getContext("2d");

    if (typeof LineChart !== "undefined") LineChart.destroy();

    if (taskNumber <= 5) {
      LineChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: ["core1", "core2", "core3", "core4", "core5"],

          datasets: [
            {
              hoverOffset: 4,
              label: "Max",
              data: [
                chartData[0],
                chartData[1],
                chartData[2],
                chartData[3],
                chartData[4],
              ],
              fill: false,
              borderColor: "#FF6998",
              tension: 0.1,
            },
            {
              label: "Min",
              data: [
                chartData[5],
                chartData[6],
                chartData[7],
                chartData[8],
                chartData[9],
              ],
              fill: false,
              borderColor: "#845EC2",
              tension: 0.1,
            },
            {
              label: "Avg",
              data: [
                chartData[10],
                chartData[11],
                chartData[12],
                chartData[13],
                chartData[14],
              ],
              fill: false,
              borderColor: "#D65DB1",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: false,
          legend: {
            labels: {
              fontColor: "red",
              fontSize: 18,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 2,
                  fontColor: "#D65DB1",
                  fontSize: 14,
                },
                gridLines: {
                  color: "#D65DB1",
                  lineWidth: 1,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "#D65DB1",
                  fontSize: 14,
                },
                gridLines: {
                  color: "#D65DB1",
                  lineWidth: 1,
                },
              },
            ],
          },
        },
      });
    } else {
      LineChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: ["task1", "task2", "task3", "task4", "task5"],
          datasets: [
            {
              hoverOffset: 4,
              label: "Max",
              data: [
                chartData[0],
                chartData[1],
                chartData[2],
                chartData[3],
                chartData[4],
              ],
              fill: false,
              borderColor: "#FF6998",
              tension: 0.1,
            },
            {
              label: "Min",
              data: [
                chartData[5],
                chartData[6],
                chartData[7],
                chartData[8],
                chartData[9],
              ],
              fill: false,
              borderColor: "#845EC2",
              tension: 0.1,
            },
            {
              label: "Avg",
              data: [
                chartData[10],
                chartData[11],
                chartData[12],
                chartData[13],
                chartData[14],
              ],
              fill: false,
              borderColor: "#D65DB1",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: false,
          legend: {
            labels: {
              fontColor: "red",
              fontSize: 18,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 2,
                  fontColor: "rgba(251, 203, 9, 1)",
                  fontSize: 14,
                },
                gridLines: {
                  color: "rgba(166, 201, 226, 1)",
                  lineWidth: 3,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(12, 13, 13, 1)",
                  fontSize: 14,
                },
                gridLines: {
                  color: "rgba(87, 152, 23, 1)",
                  lineWidth: 1,
                },
              },
            ],
          },
        },
      });
    }
  };

  return (
    <div>
      <h2>
        {taskNumber > 5 ? "core" : "task"}
        {taskNumber <= 5 ? taskNumber : taskNumber - 5}의
        {taskNumber > 5 ? "task" : "core"}별 수행능력
      </h2>
      <p>
        20160333 유건 &nbsp; 20180852 이승환 &nbsp;20180865 임채훈
        &nbsp;20180961 홍유진 &nbsp;20190835 박형진
      </p>
      <canvas id="LineChart" width="1000" height="400" />
    </div>
  );
}

export default MyChart;