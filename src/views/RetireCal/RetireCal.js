import React, { Component } from "react";
import { cloneDeep } from "lodash";
import Graph from "common/Graph";
import Form from "common/Form";
import Model from "common/Model";
import calculateOutput from "utils/retirementAlgo";
import "./retireCal.css";

class RetireCal extends Component {
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
    additionalInput: {
      houseBuyingAge: 0,
      housePrice: 0,
      min: 0,
      max: 100,
    },
    output: [],
  };

  componentDidMount() {
    this.updateOutput();
  }

  updateOutput = () => {
    const {
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

    const { houseBuyingAge, housePrice } = this.state.additionalInput;

    const output = calculateOutput({
      startingAge: +startingAge.value,
      salary: +salary.value,
      savingRate: +savingRate.value,
      salaryIncrease: +salaryIncrease.value,
      retirementAge: +retirementAge.value,
      retirementSpending: +retirementSpending.value,
      lifespanAge: +lifespanAge.value,
      initialSaving: +initialSaving.value,
      investmentReturnRate: +investmentReturnRate.value,
      houseBuyingAge,
      housePrice,
    });

    this.setState({ output });
  };

  handleChange = (field, value) => {
    const data = cloneDeep(this.state.input);
    data[field].value = value;
    this.setState({ input: data });
    this.updateOutput();
  };

  handleAdditionalChange = (field, value) => {
    const additionalInput = { ...this.state.additionalInput };
    additionalInput[field] = value;
    this.setState({ additionalInput });

    this.updateOutput();
  };

  render() {
    const { input, output, additionalInput } = this.state;
    return (
      <div className="rc90container">
        <Graph output={output} />
        <Form input={input} onSlide={this.handleChange} />
        <Model input={additionalInput} onSlide={this.handleAdditionalChange} />
      </div>
    );
  }
}

export default RetireCal;
