import React from "react";
import Slider from "common/Slider";
import "./model.css";

const Model = (props) => {
  const { input, onSlide } = props;
  const { min, max, houseBuyingAge, housePrice } = input;
  return (
    <div className="model88container">
      <img
        className="model88img"
        src="https://image.flaticon.com/icons/svg/602/602175.svg"
        alt="house"
      />
      <h1 className="model88title"> Buy a House </h1>
      <Slider
        name="houseBuyingAge"
        min={min}
        max={max}
        value={+houseBuyingAge}
        content={`At age: ${houseBuyingAge}`}
        onSlide={onSlide}
      />
      <Slider
        name="housePrice"
        min={min}
        max={max}
        value={+housePrice}
        content={`${housePrice} Lakhs`}
        onSlide={onSlide}
      />
    </div>
  );
};

export default Model;
