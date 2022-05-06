import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChartCircle2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [20],
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
        colors: ["#FACF55"],
        labels: ["User"],
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
