import React, { PureComponent } from "react";

import Pile from "../pile/Pile";
import Icon from "../icon/Icon";

import "./Board.css";

class Board extends PureComponent {
  renderPile = key => (
    <Pile
      key={key}
      name={key}
      value={this.props.piles[key].value}
      order={this.props.piles[key].order}
      tenRuleOut={this.props.piles[key].tenRuleOut}
      onClick={this.props.onClick}
    />
  );

  render() {
    return (
      <div className="board">
        <div className="row">
          {this.renderPile("pileUp1")}
          {this.renderPile("pileDown1")}
        </div>
        <div className="row">
          {this.renderPile("pileUp2")}
          {this.renderPile("pileDown2")}
        </div>
        <div className="remaining-cards">
          {this.props.remainingCards}
          <Icon name="board" />
        </div>
      </div>
    );
  }
}

export default Board;
