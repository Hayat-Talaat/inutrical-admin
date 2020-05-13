import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["name", "name", "name", "name", "name", "name"],
  datasets: [
    {
      label: "",
      backgroundColor: "#1F78B4",
      borderColor: "#000000",
      borderWidth: 1,
      hoverBackgroundColor: "#1f78b4c7",
      hoverBorderColor: "#000000bd",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const options = {
  legend: {
    display: false
  },
  aspectRatio: 1,
  scales: {
    yAxes: [
      {
        position: "left",
        id: "y-axis-1",
        gridLines: {
          display: false
        }
      }
    ],
    xAxes: [
      {
        barThickness: 22,
        categorySpacing: 7,
        gridLines: {
          display: false
        }
      }
    ]
  }
};

export default class FormulacCharts extends React.Component {
  render() {
    return (
      <div>
        {/* <h2>Bar Example (custom size)</h2> */}
        <Bar data={data} options={options} />
      </div>
    );
  }
}
