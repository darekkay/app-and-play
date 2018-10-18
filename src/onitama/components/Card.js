import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import _ from "lodash";

import "./Card.scss";

const MIDDLE = 12;
const fields = _.range(25);

class Card extends PureComponent {
  render() {
    const {
      name,
      moves,
      alignment,
      clickable,
      onClick,
      className
    } = this.props;
    return (
      <div className={cn("card", { clickable }, className)} onClick={onClick}>
        <div className="board">
          {fields.map((field, index) => (
            <div
              key={index}
              className={cn("field", {
                middle: index === MIDDLE,
                [`move-${alignment}`]: moves.includes(index)
              })}
            />
          ))}
        </div>
        <div className="name">{name}</div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  moves: PropTypes.arrayOf(PropTypes.number).isRequired,
  alignment: PropTypes.oneOf(["left", "right", "center"]).isRequired,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  onClick: PropTypes.func
};

Card.defaultProps = {
  className: undefined,
  clickable: false,
  onClick: _.noop
};

export default Card;
