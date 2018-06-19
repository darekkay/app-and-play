import React from "react";
import PropTypes from "prop-types";

const SVG = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${props.width} ${props.height}`}
    style={{ fill: props.color }}
  >
    {props.children}
  </svg>
);

SVG.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

SVG.defaultProps = {
  color: undefined
};

export default SVG;
