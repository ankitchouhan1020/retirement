import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ label, path, type }) => {
  const [hover, setHover] = useState(false);

  const colorType = {
    danger: { normal: "#db3a34", hover: "#fa5555" },
    primary: { normal: "#ff5c5c", hover: "#eb4040" },
    info: { normal: "#25ced1", hover: "#278587" },
    success: { normal: "#0ead69", hover: "#057a48" },
  };
  const customStyle = {
    normal: { backgroundColor: colorType[type].normal },
    hover: { backgroundColor: colorType[type].hover },
  };

  return (
    <Link to={path}>
      <button
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={hover ? customStyle.hover : customStyle.normal}
        className="btn90primary"
      >
        {label}
      </button>
    </Link>
  );
};

Button.defaultProps = {
  type: "primary",
};

Button.prototype = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
