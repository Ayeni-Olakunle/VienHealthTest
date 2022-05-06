import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChartLineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Daily Profit",
          data: [10, 41, 35, 51, 49, 62, 59],
        },
      ],
      options: {
        chart: {
          id: "li",
          group: "social",
          type: "area",
          height: 160,
          width: 300,
          zoom: {
            enabled: false,
          },
        },
        // colors: ["orange"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={250}
          width="100%"
        />
      </div>
    );
  }
}
