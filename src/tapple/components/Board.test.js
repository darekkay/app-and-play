import React from "react";
import { shallow } from "enzyme";
import _ from "lodash";

import { click } from "common/util/testing";

import Board from "./Board";

describe("<Board>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Board
        G={{
          letters: ["A", "B", "C"],
          pressedLetters: [],
          timerActive: false,
          timerRestart: false,
          turnDuration: 3
        }}
        moves={{
          pressLetter: jest.fn(),
          setTimerRestart: jest.fn(),
          setTimerActive: jest.fn()
        }}
        ctx={{ turn: 1, currentPlayer: "0", numPlayers: 2 }}
        undo={jest.fn()}
        reset={jest.fn()}
        events={{ endTurn: _.noop }}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".board")).toHaveLength(1);
    expect(wrapper.find(".letter")).toHaveLength(3);
  });

  it("starts the game", () => {
    click(wrapper, "start");
    expect(wrapper.instance().props.moves.setTimerActive).toHaveBeenCalledWith(
      true
    );
  });

  it("sets the state after restarting the timer", () => {
    wrapper.instance().onRestarted();
    expect(wrapper.instance().props.moves.setTimerRestart).toHaveBeenCalledWith(
      false
    );
  });

  it("finishes the game", () => {
    wrapper.instance().onFinish();
    expect(wrapper.instance().props.moves.setTimerActive).toHaveBeenCalledWith(
      false
    );
  });

  it("handles letter clicks", () => {
    expect(wrapper.instance().props.moves.pressLetter).not.toHaveBeenCalled();
    click(wrapper, "letterA");
    expect(wrapper.instance().props.moves.pressLetter).toHaveBeenCalled();
  });
});
