import React from "react";
import { shallow } from "enzyme";
import _ from "lodash";

import Board from "./Board";
import deck from "../deck";

describe("<Board>", () => {
  let wrapper;

  const ctx = ({ turn = 1, currentPlayer = "0", numPlayers = 2 }) => ({
    ctx: {
      turn,
      currentPlayer,
      numPlayers
    }
  });

  const clickCard = at =>
    wrapper
      .find("Card")
      .at(at)
      .props()
      .onClick();

  beforeEach(() => {
    wrapper = shallow(
      <Board
        G={{ cards: _.take(deck, 5) }}
        moves={{
          swapCard: jest.fn()
        }}
        ctx={{ turn: 1, currentPlayer: "0", numPlayers: 2 }}
        undo={_.noop}
        reset={_.noop}
        events={{ endTurn: _.noop }}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".board")).toHaveLength(1);
  });

  it("swaps card on click", () => {
    expect(wrapper.instance().props.moves.swapCard).not.toHaveBeenCalled();
    wrapper
      .find("Card")
      .at(3)
      .props()
      .onClick();
    expect(wrapper.instance().props.moves.swapCard).toHaveBeenCalled();
  });

  it("swaps card on click if it's first player's turn", () => {
    wrapper.setProps({ ...ctx({ currentPlayer: "0" }) });

    clickCard(0);
    clickCard(1);
    expect(wrapper.instance().props.moves.swapCard).not.toHaveBeenCalled();

    clickCard(3);
    clickCard(4);
    expect(wrapper.instance().props.moves.swapCard).toHaveBeenCalledTimes(2);
  });

  it("swaps card on click if it's second player's turn", () => {
    wrapper.setProps({ ...ctx({ currentPlayer: "1" }) });

    clickCard(3);
    clickCard(4);
    expect(wrapper.instance().props.moves.swapCard).not.toHaveBeenCalled();

    clickCard(0);
    clickCard(1);
    expect(wrapper.instance().props.moves.swapCard).toHaveBeenCalledTimes(2);
  });
});
