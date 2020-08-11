import React from "react";
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

export default Slider;
