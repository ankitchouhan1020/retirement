import React from "react";
import Slider from "common/Slider";
import "./form.css";

const Form = ({ input, onSlide }) => {
  return (
    <ul className="form-group">
      {Object.keys(input).map((key) => (
        <li key={key}>
          <Slider
            name={key}
            label={input[key].label}
            value={input[key].value}
            min={input[key].min}
            max={input[key].max}
            step={input[key].step || 1}
            onSlide={onSlide}
            format={input[key].format || false}
          />
        </li>
      ))}
    </ul>
  );
};

export default Form;
