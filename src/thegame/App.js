import React from "react";
import _ from "lodash";

import Button from "../common/button/Button";

import Board from "./components/board/Board";
import Hand from "./components/hand/Hand";

import "./components/Board.scss";

/* This game is merged from an older repository and does not use boardgame.io as engine */

const handSize = 8;

class App extends React.Component {
  // NICE: refactor to use boardgame.io
  createState = () => ({
    drawPile: _.range(2, 100),
    hand: [],
    piles: {
      pileUp1: { value: 1, order: "ascending" },
      pileUp2: { value: 1, order: "ascending" },
      pileDown1: { value: 100, order: "descending" },
      pileDown2: { value: 100, order: "descending" }
    }
  });

  state = this.createState();

  componentDidMount() {
    _.times(handSize, this.drawCard);
  }

  unselectProps = ({ hand, selectedValue }) => ({
    hand: hand.map(card => ({ ...card, selected: false })),
    selectedValue: undefined
  });

  validateMove = (pile, selectedValue) => {
    const order = pile.order;
    const value = pile.value;

    if (order === "ascending") {
      return selectedValue > value || selectedValue === value - 10;
    } else {
      return selectedValue < value || selectedValue === value + 10;
    }
  };

  isCardDisabled = (piles, card) => {
    let disabled = true;
    Object.values(piles).forEach(pile => {
      if (this.validateMove(pile, card.value)) disabled = false;
    });
    return disabled;
  };

  updateDisabled = () => {
    this.setState(({ hand, piles }) => ({
      hand: hand.map(card => ({
        ...card,
        disabled: this.isCardDisabled(piles, card)
      }))
    }));
  };

  isTenRuleOut = (pile, drawPile, hand) => {
    const value = pile.value;
    const ascending = pile.order === "ascending";
    const tenCard = ascending ? value - 10 : value + 10;
    return (
      ((ascending && value > 11) || (!ascending && value < 90)) &&
      !drawPile.includes(tenCard) &&
      _.filter(hand, card => card.value === tenCard).length === 0
    );
  };

  updateTenRuleOut = () => {
    this.setState(({ piles, drawPile, hand }) => ({
      piles: Object.entries(piles).reduce(
        (acc, [key, pile]) => ({
          ...acc,
          [key]: {
            ...pile,
            tenRuleOut: this.isTenRuleOut(pile, drawPile, hand)
          }
        }),
        {}
      )
    }));
  };

  onPileClick = key => {
    if (this.state.selectedValue === undefined) return;

    const validMove = this.validateMove(
      this.state.piles[key],
      this.state.selectedValue
    );
    if (validMove) {
      this.setState(({ hand, piles, selectedValue }) => ({
        piles: {
          ...piles,
          [key]: {
            ...piles[key],
            value: selectedValue
          }
        },
        hand: _.filter(hand, card => card.value !== selectedValue),
        selectedValue: undefined
      }));
      this.updateDisabled();
      this.updateTenRuleOut();
    }
  };

  onHandClick = cardProps => {
    if (this.state.selectedValue === cardProps.value)
      return this.setState(this.unselectProps);

    if (cardProps.disabled) return;

    this.setState(({ hand, selectedValue }) => ({
      hand: hand.map(card => ({
        ...card,
        selected: card.value === cardProps.value
      })),
      selectedValue: cardProps.value
    }));
  };

  onNewGameClick = () => {
    this.setState(this.createState());
    _.times(handSize, this.drawCard);
  };

  onDrawClick = () => {
    const missingCardCount = handSize - this.state.hand.length;
    _.times(2 * missingCardCount - 1, this.drawCard);
    this.updateDisabled();
  };

  drawCard = () => {
    this.setState(({ hand, drawPile }) => {
      if (drawPile.length === 0) return {};

      const index = _.random(0, drawPile.length - 1);
      return {
        hand: _.sortBy(
          [...hand, { value: drawPile[index] }],
          card => card.value
        ),
        drawPile: _.filter(
          drawPile,
          (__, elementIndex) => elementIndex !== index
        )
      };
    });
  };

  render() {
    return (
      <div className="thegame">
        <Board
          piles={this.state.piles}
          remainingCards={this.state.drawPile.length + this.state.hand.length}
          onClick={this.onPileClick}
        />

        <div className="buttons">
          <Button onClick={this.onNewGameClick}>New Game</Button>
          <Button
            disabled={
              this.state.drawPile.length === 0 ||
              this.state.hand.length > handSize - 1
            }
            onClick={this.onDrawClick}
            type="secondary"
          >
            Draw
          </Button>
        </div>

        {this.state.hand.length > 0 && (
          <Hand cards={this.state.hand} onClick={this.onHandClick} />
        )}

        {this.state.drawPile.length === 0 && this.state.hand.length === 0 && (
          <div className="message">
            Congratulations, there are no more cards left!
          </div>
        )}

        <div className="rules">
          <p>
            The goal of this game is to play as many of the 98 cards (2-99) as
            possible on 4 piles. There are two ascending (1↑) and two descending
            (100↓) piles.
          </p>

          <p>
            You may only play in the reverse order, if the card value is exactly
            10 higher (descending pile) or lower (ascending pile). As a tip, a
            pile will be marked red, if the according 10-card is out of the
            game.
          </p>

          <p>
            In the beginning, you are dealt 8 cards. You need to hold at most 7
            cards to draw new cards up to 8 again. For every extra card played
            you will draw a bonus card, i.e. pressing "draw" while having 6
            cards grants you 8+1=9 cards.
          </p>

          <p>
            The game ends when you cannot play any card. The score is equal to
            the remaining cards, where 0 means beating the game.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
