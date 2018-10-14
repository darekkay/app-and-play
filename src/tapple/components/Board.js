import React from "react";
import PropTypes from "prop-types";

import { boardGamesIO } from "common/util/propTypes";
import Button from "common/button/Button";
import Menu from "common/menu/Menu";

import "./Board.scss";
import Timer from "common/timer/Timer";
import RestartButton from "common/button/RestartButton";

class Board extends React.Component {
  onClick = letter => () => {
    this.props.moves.pressLetter(letter);
    this.props.moves.setTimerRestart(true);
  };

  isDisabled = letter =>
    this.props.G.pressedLetters.includes(letter) || !this.props.G.timerActive;

  onStart = () => this.props.moves.setTimerActive(true);
  onFinish = () => this.props.moves.setTimerActive(false);
  onRestarted = () => this.props.moves.setTimerRestart(false);

  render() {
    const { letters, category } = this.props.G;
    return (
      <div className="board tapple">
        <div className="letters">
          {letters.map(letter => (
            <Button
              className="letter"
              key={letter}
              name={`letter${letter}`}
              outline
              disabled={this.isDisabled(letter)}
              onClick={this.onClick(letter)}
            >
              {letter}
            </Button>
          ))}
        </div>
        <Menu>
          <div className="category">{category}</div>
          <Button
            name="start"
            disabled={this.props.G.timerActive}
            onClick={this.onStart}
          >
            Start
          </Button>
          <RestartButton {...this.props} />
          <Timer
            initialSeconds={this.props.G.turnDuration}
            active={this.props.G.timerActive}
            restart={this.props.G.timerRestart}
            onFinish={this.onFinish}
            onRestarted={this.onRestarted}
          />
        </Menu>
      </div>
    );
  }
}

Board.propTypes = {
  ...boardGamesIO,
  G: PropTypes.shape({
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    pressedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string,
    timerActive: PropTypes.bool.isRequired,
    timerRestart: PropTypes.bool.isRequired,
    turnDuration: PropTypes.number.isRequired
  }).isRequired,
  moves: PropTypes.shape({}).isRequired
};

Board.defaultProps = {
  category: ""
};

export default Board;
