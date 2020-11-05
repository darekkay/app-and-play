import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cl from "classnames";

import "./Square.scss";

class Square extends PureComponent {
  render() {
    const { className } = this.props;
    return <div className={cl("square", className)}>{this.props.children}</div>;
  }
}

Square.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

Square.defaultProps = {
  children: null,
  className: undefined
};

export default Square;
