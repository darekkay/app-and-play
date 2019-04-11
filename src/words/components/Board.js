import React from "react";
import PropTypes from "prop-types";

import { boardGamesIO } from "common/util/propTypes";
import Button from "common/button/Button";

import "./Board.scss";

class Board extends React.Component {
  selectWord = list => () => this.props.moves.selectWord(list);

  render() {
    const { word } = this.props.G;
    return (
      <div className="board words">
        <div className="word">{word}</div>
        <div className="buttons d-flex w-100">
          <Button onClick={this.selectWord("einfach")}>Einfach</Button>
          <Button onClick={this.selectWord("mittel")}>Mittel</Button>
          <Button onClick={this.selectWord("schwer")}>Schwer</Button>
          <Button onClick={this.selectWord("hoelle")}>Hölle</Button>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  ...boardGamesIO,
  G: PropTypes.shape({
    word: PropTypes.string
  }).isRequired,
  moves: PropTypes.shape({}).isRequired
};

export default Board;
