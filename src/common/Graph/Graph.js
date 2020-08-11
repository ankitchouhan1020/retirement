import React, { Component } from "react";
import PropTypes from "prop-types";
import "./graph.css";
import CanvasJSReact from "assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
  render() {
    const { output } = this.props;

    const dataPoints = output.map((item) => {
      const obj = {};
      obj.x = item.age;
      obj.y = item.saving > 0 ? item.saving : 0;
      return obj;
    });

    const options = {
      theme: "light2",
      animationEnabled: true,
      title: {
        text: "Retirement Plan",
      },
      axisX: {
        title: "Age",
      },
      axisY: {
        title: "Savings",
        prefix: "₹",
      },
      data: [
        {
          type: "area",
          xValueFormatString: "Age #",
          yValueFormatString: "Saving ₹#,##,##,##0",
          dataPoints,
        },
      ],
    };
    return (
      <div className="graph-holder">
        <CanvasJSChart options={options} />
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
