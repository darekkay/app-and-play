import React from "react";
import cn from "classnames";
import _ from "lodash";

import Icon from "common/icon/Icon";
import Square from "common/square/Square";
import Button from "common/button/Button";

import "./Board.css";

class Board extends React.Component {
  incLevel = () => {
    this.props.moves.incLevel();
  };
  decLifes = () => this.props.moves.decLifes();
  decStars = () => this.props.moves.decStars();

  onNewGame = () => this.props.reset();
  onUndo = () => this.props.undo();

  render() {
    const { levels, level, lifes, stars } = this.props.G;
    return (
      <div className="themind">
        <div className="marker-row">
          <div className="left">
            <Button onClick={() => this.incLevel()}>
              <Icon name="plus" />
            </Button>
          </div>
          <div className="middle levels">
            {_.range(1, 13).map(index => (
              <Square
                key={`level-${index}`}
                className={cn({ "level-fill": index <= level })}
              >
                {index}
                {levels[index - 1].bonus === "life" && (
                  <Icon name="heart" className="right-bottom" />
                )}
                {levels[index - 1].bonus === "star" && (
                  <Icon name="star" className="right-bottom" />
                )}
                {index === 8 && <div className="player-count">IV</div>}
                {index === 10 && <div className="player-count">III</div>}
                {index === 12 && <div className="player-count">II</div>}
              </Square>
            ))}
          </div>
        </div>

        <div className="marker-row">
          <div className="left">
            <Button type="secondary" onClick={() => this.decLifes()}>
              <Icon name="minus" />
            </Button>
          </div>
          <div className="middle lifes">
            {_.range(1, 6).map(index => (
              <Square key={`life-${index}`}>
                <Icon
                  name="heart"
                  className={cn({ "icon-disabled": index > lifes })}
                />
              </Square>
            ))}
          </div>
        </div>

        <div className="marker-row">
          <div className="left">
            <Button type="secondary" onClick={() => this.decStars()}>
              <Icon name="minus" />
            </Button>
          </div>
          <div className="middle stars">
            {_.range(1, 4).map(index => (
              <Square key={`star-${index}`}>
                <Icon
                  name="star"
                  className={cn({ "icon-disabled": index > stars })}
                />
              </Square>
            ))}
          </div>
        </div>

        <div className="marker-row">
          <div className="left" />
          <div className="middle controls">
            <Button onClick={this.onUndo}>
              Undo
            </Button>
            <Button type="secondary" onClick={this.onNewGame}>
              New Game
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
