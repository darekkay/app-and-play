import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Button.scss";

const Button = ({ children, className, type, outline, ...rest }) => (
  <button
    className={cn(
      "btn",
      {
        [`btn-${type}${outline ? "-outline" : ""}`]: type
      },
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  outline: PropTypes.bool
};

Button.defaultProps = {
  className: undefined,
  type: "primary",
  outline: false
};

export default Button;
