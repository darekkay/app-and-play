import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import _ from "lodash";

import { boardGamesIO } from "common/util/propTypes";
import Icon from "common/icon/Icon";
import Square from "common/square/Square";
import Menu from "common/menu/Menu";
import Button from "common/button/Button";
import UndoButton from "common/button/UndoButton";
import RestartButton from "common/button/RestartButton";

import "./Board.scss";

class Board extends React.Component {
  incLevel = () => {
    this.props.moves.incLevel();
  };
  decLifes = () => this.props.moves.decLifes();
  decStars = () => this.props.moves.decStars();

  render() {
    const { levels, level, lifes, stars } = this.props.G;
    return (
      <div className="board themind">
        <div className="marker-row">
          <div className="left">
            <Button name="incLevel" onClick={this.incLevel}>
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
            <Button type="secondary" name="decLifes" onClick={this.decLifes}>
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
            <Button type="secondary" name="decStars" onClick={this.decStars}>
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

        <Menu>
          <UndoButton {...this.props} />
          <div className="separator" />
          <RestartButton {...this.props} />
        </Menu>
      </div>
    );
  }
}

Board.propTypes = {
  ...boardGamesIO,
  G: PropTypes.shape({
    levels: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        bonus: PropTypes.string
      })
    ).isRequired,
    level: PropTypes.number.isRequired,
    lifes: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired
  }).isRequired,
  moves: PropTypes.shape({
    decLifes: PropTypes.func.isRequired,
    decStars: PropTypes.func.isRequired,
    incLevel: PropTypes.func.isRequired
  }).isRequired
};

export default Board;
