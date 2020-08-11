import React from "react";
import PropTypes from "prop-types";
import "./slider.css";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const Slider = ({ value, min, max, name, label, step, format, onSlide }) => {
  return (
    <div className="slideContainer">
      <label htmlFor={name}>
        {label} : {format ? formatter.format(`${value}`) : value}
      </label>
      <input
        id={name}
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => onSlide(name, e.target.value)}
        className="slider"
      />
    </div>
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  step: PropTypes.number,
  format: PropTypes.bool.isRequired,
  onSlide: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  format: false,
  step: 1,
};

export default Slider;
