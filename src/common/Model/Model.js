import React from "react";
import PropTypes from "prop-types";
import Slider from "common/Slider";
import "./model.css";

const Model = (props) => {
  const { input, onSlide } = props;
  const { min, max, houseBuyingAge, housePrice } = input;
  return (
    <div className="model925container">
      <img
        className="model925img"
        src={require("./images/house.svg")}
        alt="house"
      />
      <h1 className="model925title"> Buy a House </h1>
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

Model.propTypes = {
  input: PropTypes.object.isRequired,
  onSlide: PropTypes.func.isRequired,
};

export default Model;
