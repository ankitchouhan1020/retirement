import React from "react";
import PropTypes from "prop-types";
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
            value={+input[key].value}
            min={input[key].min}
            max={input[key].max}
            step={input[key].step}
            onSlide={onSlide}
            format={input[key].format}
          />
        </li>
      ))}
    </ul>
  );
};

Form.propTypes = {
  input: PropTypes.object.isRequired,
  onSlide: PropTypes.func.isRequired,
};

export default Form;
