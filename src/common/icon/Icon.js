import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import cl from "classnames";

import svgs from "./svgs";

import "./Icon.scss";

class Icon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { name, className, position } = this.props;
    return (
      <div
        className={cl(
          "icon",
          `icon-${name}`,
          {
            [`icon-${position}`]: position
          },
          className
        )}
      >
        {this.renderIcon(this.props)}
      </div>
    );
  }

  renderIcon = props => {
    const component = svgs[_.capitalize(props.name)];
    if (!component) throw new Error(`Unknown icon '${props.name}'`);

    return React.createElement(component, {
      "aria-label": props.alt // "alt" is not supported for inline SVGs
    });
  };
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  position: PropTypes.oneOf(["left", "right"])
};

Icon.defaultProps = {
  className: undefined,
  color: undefined,
  alt: "",
  position: undefined
};

export default Icon;
