import React, { PureComponent } from "react";
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
          {squares.map((square, index) => (
            <div
              key={index}
              className={cn({
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

export default Card;
