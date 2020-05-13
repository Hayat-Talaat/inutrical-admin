import React from 'react';
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [
    "MOH Hospital",
    "Military Hospital",
    "University Hospital",
    "Private Hospital"
  ],
  datasets: [
    {
      data: [200, 200, 250, 100],
      backgroundColor: ["#061C43", "#1F78B4", "#F1F3FA", "#A9D41F"],
      hoverBackgroundColor: ["#061C43", "#1F78B4", "#F1F3FA", "#A9D41F"],
      position: "right"
    }
  ]
};

const options = {
    responsive: true,
//   maintainAspectRatio: false,
    legend: {
    position: "left",
    labels: {
      boxWidth: 40
    }
  }
};

class HospitalsCharts extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }
  componentDidMount() {
    console.log("chart", this.chartReference); // returns a Chart.js instance reference
  }
  render() {
    return (
      <div>
        {/* <h2>Doughnut Example</h2> */}
        <Doughnut data={data} options={options} ref={this.chartReference} />
      </div>
    );
  }
};

export default HospitalsCharts;