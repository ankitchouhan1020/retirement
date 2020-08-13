import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.css";

const Button = ({ label, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("btn954primary", `btn954${type}`)}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: "primary",
};

Button.prototype = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
