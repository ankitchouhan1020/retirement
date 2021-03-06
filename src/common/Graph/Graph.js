import React, { Component } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { default as formatValue } from "utils/currencyFormatter";
import "./graph.css";

class Graph extends Component {
  defineGraphData = () => {
    let { output, retirementAge, startingAge, houseBuyingAge } = this.props;

    const dataLabels = {
      retirement: {
        enabled: true,
        useHTML: true,
        crop: false,
        overflow: "allow",
        formatter() {
          return `<div style="
                            -webkit-border-top-left-radius: 0;
                            -webkit-border-top-right-radius: 35px;
                            -webkit-border-bottom-right-radius: 35px;
                            -webkit-border-bottom-left-radius: 35px;
                            -webkit-transform:rotate(-135deg);
                            box-shadow: 1px 1px 7px #1a1a1a;">
                    <img style="height: 30px;
                          width:30px;
                          margin:4px;
                          -webkit-transform:rotate(135deg);"
                          src="https://img.icons8.com/office/50/000000/old-man-skin-type-6.png"/>
                  </div>`;
        },
      },
      home: {
        enabled: true,
        useHTML: true,
        crop: false,
        overflow: "allow",
        formatter() {
          return `<div style="
                            -webkit-border-top-left-radius: 0;
                            -webkit-border-top-right-radius: 35px;
                            -webkit-border-bottom-right-radius: 35px;
                            -webkit-border-bottom-left-radius: 35px;
                            -webkit-transform:rotate(-135deg);
                            box-shadow: 1px 1px 7px #1a1a1a;">
                    <img style="height: 30px;
                          width:30px;
                          -webkit-transform:rotate(135deg);"
                    src="https://img.icons8.com/bubbles/50/000000/home-page.png"/>
                  </div>`;
        },
      },
    };

    let data = [];
    data = output.map((item) => {
      const newData = {};

      if (item.age === retirementAge)
        newData.dataLabels = dataLabels.retirement;
      else if (item.age === houseBuyingAge)
        newData.dataLabels = dataLabels.home;
      else newData.dataLabels = { enabled: false };

      newData.x = item.age - startingAge;
      newData.y = item.saving;
      return newData;
    });
    return data;
  };

  render() {
    let { startingAge, lifespanAge } = this.props;

    const data = this.defineGraphData();

    const options = {
      chart: {
        type: "area",
      },
      accessibility: {
        description:
          "Image description: An area chart predicting saving per year for retirement plan.",
      },
      title: {
        text: "RETIREMENT PLANNING",
      },
      subtitle: {
        text: "Financial Calculator Made Simple",
      },
      xAxis: {
        allowDecimals: false,
        title: {
          text: "Age",
        },
        labels: {
          formatter: function () {
            return this.value + startingAge;
          },
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
            return formatValue.format(this.value);
          },
        },
      },
      tooltip: {
        formatter: function () {
          return `
          Age : <b>${this.point.x + startingAge}</b><br/>
          Saving : <b>${formatValue.format(this.point.y)}</b>
          `;
        },
        outside: true,
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false,
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
          name: "Saving",
          data,
        },
      ],
    };

    return (
      <div className="graph921container">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
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
