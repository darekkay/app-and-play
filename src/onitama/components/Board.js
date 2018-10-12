import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { boardGamesIO } from "common/util/propTypes";

import Card from "./Card";
import "./Board.css";

class Board extends React.Component {
  isValid = id => {
    if (this.props.ctx.currentPlayer === "1") {
      return id === 0 || id === 1;
    } else {
      return id === 3 || id === 4;
    }
  };

  onCardClick = id => {
    if (this.isValid(id)) {
      this.props.moves.swapCard(id);
      this.props.events.endTurn();
    }
  };

  // onUndo = () => {
  //   this.props.undo();
  // };
  //
  // onNewGame = () => {
  //   this.props.reset();
  // };

  render() {
    const { cards } = this.props.G;
    return (
      <div className="board onitama">
        <div className="shelf rotate">
          <Card {...cards[0]} onClick={() => this.onCardClick(0)} />
          <Card {...cards[1]} onClick={() => this.onCardClick(1)} />
        </div>
        <div className="swap">
          {/*<button className="btn btn-blue" onClick={this.onUndo}>*/}
          {/*Undo*/}
          {/*</button>*/}
          <Card
            className={cn({
              rotate: this.props.ctx.currentPlayer === "1"
            })}
            {...cards[2]}
          />
          {/*<button className="btn btn-orange" onClick={this.onNewGame}>*/}
          {/*New Game*/}
          {/*</button>*/}
        </div>
        <div className="shelf">
          <Card {...cards[3]} onClick={() => this.onCardClick(3)} />
          <Card {...cards[4]} onClick={() => this.onCardClick(4)} />
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  ...boardGamesIO,
  G: PropTypes.shape({
    cards: PropTypes.array.isRequired
  }).isRequired,
  moves: PropTypes.shape({
    swapCard: PropTypes.func.isRequired
  }).isRequired
};

export default Board;
