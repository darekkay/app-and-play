import React, { PureComponent } from "react";

import Card from "../card/Card";

import "./Hand.css";

class Hand extends PureComponent {
  render() {
    const { cards, onClick } = this.props;

    return (
      <div className="hand">
        {cards.map(card => (
          <Card
            key={card.value}
            value={card.value}
            disabled={card.disabled}
            selectable={card.selectable}
            selected={card.selected}
            onClick={onClick}
          />
        ))}
      </div>
    );
  }
}

export default Hand;
