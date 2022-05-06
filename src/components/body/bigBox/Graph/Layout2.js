import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChartCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "30%",
            },
          },
        },
        colors: ["#016450"],
        labels: ["Total Sales"],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={300}
          width="100%"
        />
      </div>
    );
  }
}
