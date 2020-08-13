import React from "react";
import PropTypes from "prop-types";
import formatter from "utils/currencyFormatter";
import "./slider.css";

const renderLabel = ({ label, format, value, name, content }) => {
  value = format ? formatter.format(`${value}`) : value;
  return (
    <label htmlFor={name}>{content ? content : `${label} : ${value}`}</label>
  );
};

const Slider = ({
  value,
  min,
  max,
  name,
  label,
  step,
  format,
  content,
  onSlide,
}) => {
  return (
    <div className="slider965container">
      {renderLabel({ label, format, content, name, value })}
      <input
        id={name}
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => onSlide(name, e.target.value)}
        className="slider965input"
      />
    </div>
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onSlide: PropTypes.func.isRequired,
  label: PropTypes.string,
  content: PropTypes.string,
  step: PropTypes.number,
  format: PropTypes.bool,
};

Slider.defaultProps = {
  format: false,
  step: 1,
};

export default Slider;
