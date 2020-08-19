import React, { useEffect } from "react";
// import { debounce } from "lodash";
import { useSelector, useDispatch } from 'react-redux'
import { setInputField, setAdditionalInputField, setOutput } from './RetireSlice'
import Graph from "common/Graph";
import Form from "common/Form";
import Model from "common/Model";
import calculateOutput from "utils/retirementAlgo";
import "./retireCal.css";

function RetireCal() {
  const input = useSelector(({ retire }) => retire.input)
  const output = useSelector(({ retire }) => retire.output)
  const additionalInput = useSelector(({ retire }) => retire.additionalInput);
  const dispatch = useDispatch();

  const updateOutput = () => {
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
    } = input;

    const { houseBuyingAge, housePrice } = additionalInput;

    const output = calculateOutput({
      startingAge: startingAge.value,
      salary: salary.value,
      savingRate: savingRate.value,
      salaryIncrease: salaryIncrease.value,
      retirementAge: retirementAge.value,
      retirementSpending: retirementSpending.value,
      lifespanAge: lifespanAge.value,
      initialSaving: initialSaving.value,
      investmentReturnRate: investmentReturnRate.value,
      houseBuyingAge,
      housePrice,
    });

    dispatch(setOutput(output))
  };

  const handleChange = (field, value) => {
    dispatch(setInputField({
      field, value: parseInt(value)
    }))
    // handleDebouncedOutput();
    updateOutput();
  };

  const handleAdditionalChange = (field, value) => {
    dispatch(setAdditionalInputField({
      field, value: parseInt(value)
    }))
    // handleDebouncedOutput();
    updateOutput();
  };

  // const handleDebouncedOutput = useCallback(debounce(updateOutput, 400), []);

  useEffect(updateOutput, [])

  return (
    <div className="rc901container">
      <Graph
        output={output}
        retirementAge={input.retirementAge.value}
        startingAge={input.startingAge.value}
        lifespanAge={input.lifespanAge.value}
        houseBuyingAge={additionalInput.houseBuyingAge}
      />
      <Form input={input} onSlide={handleChange} />
      <div className="rc901model">
        <Model
          input={additionalInput}
          onSlide={handleAdditionalChange}
        />
      </div>
    </div>
  );

}

export default RetireCal;
