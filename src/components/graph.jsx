import "./graph.css";
import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
  render() {
    const { output } = this.props;

    const dataPoints = output.map((item) => {
      const obj = {};
      obj.x = item.age;
      obj.y = item.saving;
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
          yValueFormatString: "Saving ₹#,##,##0.##",
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

export default Graph;