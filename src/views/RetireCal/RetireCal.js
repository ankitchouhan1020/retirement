import React, { useEffect, useState } from "react";
// import { debounce } from "lodash";
import { useSelector, useDispatch } from 'react-redux'
import { setInputField, setAdditionalInputField, setOutput } from './RetireSlice'
import Graph from "common/Graph";
import Form from "common/Form";
import Model from "common/Model";
import calculateOutput from "utils/retirementAlgo";
import "./retireCal.css";
import QuestionBox from "common/QuestionBox";

function RetireCal() {
  const input = useSelector(({ retire }) => retire.input)
  const output = useSelector(({ retire }) => retire.output)
  const additionalInput = useSelector(({ retire }) => retire.additionalInput);
  const dispatch = useDispatch();

  const questions = [
    { text: 'Hey there!! Since you are here means you are excited to become financial independent. Here are few questions you need to answer to let us know you better.' },
    { text: 'So at which age you wanna start saving ?', name: 'startingAge', placeholder: 26 },
    { text: 'Now set the retirement age.', name: 'retirementAge', placeholder: 65 },
    { text: 'Do you have any initial savings ? Set the value.', name: 'initialSaving', placeholder: 0 },
    { text: 'So lets talk about your current salary per year ? How much is it ? I won\'t judge, you can count on me.', name: 'salary', placeholder: 9_20_000 },
    { text: 'And how much of it you wanna save ? Like 10% or may be 20%', name: 'savingRate', placeholder: 15 },
    { text: 'Surely you will switch job or get promotion so how much hike percentage in your salary per year you assuming ?', name: 'salaryIncrease', placeholder: 5 },
    { text: 'Since you gonna invest all this money ? Let us know a rough idea of investment returns.', name: 'investmentReturnRate', placeholder: 6 },
    { text: 'Lets talk about how\'s life gonna be after retirement. Some lives like a king, some normal and some like monks, What are you ? Let us know about rough idea of spending per year after retirement.', name: 'retirementSpending', placeholder: 12_00_000 },
    { text: 'Thanks for all your input. Now click continue to see the predicted graph.' }
  ];
  const [ index, setIndex ] = useState(0);

  const updateOutput = () => {
    if (index !== 0 && index < questions.length - 1) return;

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
      {
        index < questions.length &&
        <QuestionBox
          item={questions[ index ]}
          index={index}
          min={0}
          max={questions.length}
          inputBox={index !== 0 && index !== questions.length - 1 ? true : false}
          onNext={(value) => {
            if (index !== 0 && index !== questions.length - 1) {
              handleChange(questions[ index ].name, value || questions[ index ].placeholder);
            }
            setIndex(index + 1);
            if (index === questions.length - 1) updateOutput();
          }}
          onPrev={() => setIndex(index - 1)}
        >
        </QuestionBox>
      }
      {index === questions.length &&
        <>
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
        </>
      }
    </div>
  );

}

export default RetireCal;
