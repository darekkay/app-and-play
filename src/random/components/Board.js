import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import { boardGamesIO } from "common/util/propTypes";
import Button from "common/button/Button";
import Square from "common/square/Square";

import "./Board.scss";

class Board extends React.Component {
  rollDice = maxValue => () => this.props.moves.rollDice(maxValue);

  render() {
    const { value } = this.props.G;
    return (
      <div className="board random">
        <Square className="text-bold">{value}</Square>
        <div className="d-flex flex-wrap justify-content-center">
          {_.range(2, 10).map(value => (
            <Button
              key={value}
              className="margin-x margin-top"
              onClick={this.rollDice(value)}
            >
              {value}
            </Button>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center margin-top">
          <Button
            className="margin-x margin-top"
            onClick={() => this.props.moves.reset()}
            outline
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  ...boardGamesIO,
  G: PropTypes.shape({}).isRequired,
  moves: PropTypes.shape({}).isRequired
};

export default Board;
