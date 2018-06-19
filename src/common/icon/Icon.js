import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cl from "classnames";

import SVG from "common/svg/SVG";

import "./Icon.css";

class Icon extends PureComponent {
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
    switch (props.name) {
      case "heart":
        return (
          <SVG width={512} height={512} color={props.color}>
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
          </SVG>
        );
      case "minus":
        return (
          <SVG width={448} height={512} color={props.color}>
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </SVG>
        );
      case "plus":
        return (
          <SVG width={448} height={512} color={props.color}>
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </SVG>
        );
      case "star":
        return (
          <SVG width={576} height={512} color={props.color}>
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </SVG>
        );
      default:
        throw new Error(`Unknown icon '${props.name}'`);
    }
  };
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["left", "right"])
};

Icon.defaultProps = {
  className: undefined,
  color: undefined,
  position: undefined
};

export default Icon;
