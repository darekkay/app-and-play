import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import _ from "lodash";

import "./Card.css";

const MIDDLE = 12;
const squares = _.range(25);

class Card extends PureComponent {
  render() {
    const { name, moves, alignment, onClick, className } = this.props;
    return (
      <div className={cn("card", className)} onClick={onClick}>
        <div className="board">
          {/* TODO: reuse Square component? */}
          {squares.map((square, index) => (
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
  onClick: PropTypes.func
};

Card.defaultProps = {
  className: undefined,
  onClick: _.noop
};

export default Card;
