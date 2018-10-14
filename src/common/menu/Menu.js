import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Menu.scss";

const Menu = ({ className, direction, children, ...rest }) => (
  <nav className={cn("menu", [direction], className)} {...rest}>
    {children}
  </nav>
);

Menu.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["horizontal", "vertical"])
};

Menu.defaultProps = {
  className: undefined,
  direction: "horizontal"
};

export default Menu;
