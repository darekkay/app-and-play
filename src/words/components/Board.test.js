import React from "react";
import { shallow } from "enzyme";
import _ from "lodash";

import Board from "./Board";

describe("<Board>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Board
        G={{}}
        moves={{ selectWord: jest.fn() }}
        ctx={{ turn: 1, currentPlayer: "0", numPlayers: 2 }}
        undo={jest.fn()}
        reset={jest.fn()}
        events={{ endTurn: _.noop }}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".board")).toHaveLength(1);
  });

  it("selects a random word", () => {
    wrapper.instance().selectWord("moo")();
    expect(wrapper.instance().props.moves.selectWord).toHaveBeenCalledWith(
      "moo"
    );
  });
});
