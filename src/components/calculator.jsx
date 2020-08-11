import React, { Component } from "react";
import { cloneDeep } from "lodash";
import Graph from "./graph";
import Form from "./form";

class Calculator extends Component {
  state = {
    input: {
      startingAge: { label: "Starting Age", value: 26, min: 0, max: 100 },
      initialSaving: {
        label: "Initial Saving",
        value: 0,
        min: 0,
        max: 10_00_000,
        step: 10_000,
        format: true,
      },
      salary: {
        label: "Yearly Salary",
        value: 50_000,
        min: 0,
        max: 1_00_00_000,
        step: 10_000,
        format: true,
      },
      savingRate: {
        label: "Percentage Salary Saved",
        value: 20,
        min: 0,
        max: 100,
      },
      investmentReturnRate: {
        label: "Investment Return",
        value: 4,
        min: 0,
        max: 100,
      },
      salaryIncrease: {
        label: "Salary Increment % Yearly",
        value: 3,
        min: 0,
        max: 100,
      },
      retirementAge: { label: "Retirement Age", value: 65, min: 0, max: 100 },
      retirementSpending: {
        label: "Yearly Spending After Retirement",
        value: 40_000,
        min: 0,
        max: 1_00_00_000,
        step: 10_000,
        format: true,
      },
      lifespanAge: { label: "Lifespan Age", value: 80, min: 0, max: 100 },
    },
    output: [],
  };

  componentDidMount() {
    this.updateOutput();
  }

  updateOutput = () => {
    let {
      startingAge,
      salary,
      savingRate,
      salaryIncrease,
      retirementAge,
      retirementSpending,
      lifespanAge,
      initialSaving,
      investmentReturnRate,
    } = this.state.input;

    const output = this.calculateOutput({
      startingAge: startingAge.value,
      salary: salary.value,
      savingRate: savingRate.value,
      salaryIncrease: salaryIncrease.value,
      retirementAge: retirementAge.value,
      retirementSpending: retirementSpending.value,
      lifespanAge: lifespanAge.value,
      initialSaving: initialSaving.value,
      investmentReturnRate: investmentReturnRate.value,
    });

    this.setState({ output });
  };

  calculateOutput({
    startingAge,
    salary,
    savingRate,
    salaryIncrease,
    retirementAge,
    retirementSpending,
    lifespanAge,
    initialSaving,
    investmentReturnRate,
  }) {
    const output = [];

    const totalYears = lifespanAge - startingAge;
    let salarySaved = Math.floor((salary / 100) * savingRate);
    let currentAge = startingAge;
    let accumulatedSaving = parseInt(initialSaving);

    for (let currentYear = 0; currentYear <= totalYears; currentYear++) {
      output.push({
        age: currentAge,
        saving: accumulatedSaving,
      });

      accumulatedSaving += Math.floor(
        (accumulatedSaving / 100) * investmentReturnRate
      );

      const yearsToRetire = retirementAge - currentAge;
      const isRetired = yearsToRetire > 0 ? false : true;

      if (isRetired) {
        accumulatedSaving -= retirementSpending;
      } else {
        salarySaved += Math.floor((salarySaved / 100) * salaryIncrease);
        accumulatedSaving += salarySaved;
      }
      currentAge++;
    }
    return output;
  }

  handleChange = (field, value) => {
    const data = cloneDeep(this.state.input);
    data[field].value = value;
    this.setState({ input: data });

    this.updateOutput();
  };

  render() {
    const { input, output } = this.state;
    return (
      <div className="container">
        <Graph output={output} />
        <Form input={input} onSlide={this.handleChange} />
      </div>
    );
  }
}

export default Calculator;
