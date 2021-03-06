import React from "react";
import { shallow } from "enzyme";
import _ from "lodash";

import { click } from "common/util/testing";

import Board from "./Board";
import levels from "../levels";

describe("<Board>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Board
        G={{ levels, level: 1, lifes: 2, stars: 1, playerCount: 3 }}
        moves={{
          decLifes: jest.fn(),
          decStars: jest.fn(),
          incLevel: jest.fn()
        }}
        undo={_.noop}
        reset={_.noop}
        events={{ endTurn: _.noop }}
        ctx={{ turn: 1, currentPlayer: "0", numPlayers: 1 }}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".board")).toHaveLength(1);
  });

  it("decreases lifes on click", () => {
    expect(wrapper.instance().props.moves.decLifes).not.toHaveBeenCalled();
    click(wrapper, "decLifes");
    expect(wrapper.instance().props.moves.decLifes).toHaveBeenCalled();
  });

  it("decreases stars on click", () => {
    expect(wrapper.instance().props.moves.decStars).not.toHaveBeenCalled();
    click(wrapper, "decStars");
    expect(wrapper.instance().props.moves.decStars).toHaveBeenCalled();
  });

  it("increases levels on click", () => {
    expect(wrapper.instance().props.moves.incLevel).not.toHaveBeenCalled();
    click(wrapper, "incLevel");
    expect(wrapper.instance().props.moves.incLevel).toHaveBeenCalled();
  });
});
