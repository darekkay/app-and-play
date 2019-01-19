import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

class Link extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string.isRequired,
    external: PropTypes.bool
  };

  static defaultProps = {
    className: undefined,
    title: undefined,
    external: true
  };

  shouldComponentUpdate = () => false; // The link content does not ever change

  render() {
    const { className, title, url, external } = this.props;

    return (
      <a
        className={cn("link", className)}
        href={url}
        title={title}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
