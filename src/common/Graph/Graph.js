import React, { Component } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./graph.css";

class Graph extends Component {
  render() {
    const { output } = this.props;
    const startingAge = output.length === 0 ? 0 : output[0].age;
    const lifespanAge = output.length === 0 ? 0 : output[output.length - 1].age;
    let options = {
      chart: {
        type: "area",
      },
      accessibility: {
        description:
          "Image description: An area chart predicting saving per year for retirement plan.",
      },
      title: {
        text: "Retirement Planning",
      },
      xAxis: {
        categories: output.map((item) => item.age),
        allowDecimals: false,
        title: {
          text: "Age",
        },
        accessibility: {
          rangeDescription: `Range: ${startingAge} to ${lifespanAge}`,
        },
      },
      yAxis: {
        title: {
          text: "Total Savings",
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + "k";
          },
        },
      },
      tooltip: {
        pointFormat: "<b>Savings: {point.y:,.0f}</b>",
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: "Current Savings",
          data: output.map((item) => item.saving),
        },
      ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

Graph.propTypes = {
  output: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.number.isRequired,
      saving: PropTypes.number.isRequired,
    })
  ),
};

export default Graph;
