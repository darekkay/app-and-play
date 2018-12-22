import React from "react";
import { shallow } from "enzyme";
import _ from "lodash";

import { click } from "common/util/testing";

import RestartButton from "./RestartButton";

describe("<RestartButton>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RestartButton reset={jest.fn()} moves={{}} />);
  });

  it("renders an icon button", () => {
    expect(wrapper.find("Button")).toHaveLength(1);
    expect(wrapper.find("Icon")).toHaveLength(1);
  });

  it("resets the game state", () => {
    expect(wrapper.instance().props.reset).not.toHaveBeenCalled();
    click(wrapper, "restart");
    expect(wrapper.instance().props.reset).toHaveBeenCalled();
  });

  it("calls restart move if present", () => {
    wrapper.setProps({ moves: { restart: jest.fn() } });
    expect(wrapper.instance().props.moves.restart).not.toHaveBeenCalled();
    click(wrapper, "restart");
    expect(wrapper.instance().props.moves.restart).toHaveBeenCalled();
  });

  it("never rerenders", () => {
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ reset: _.noop });
    expect(shouldUpdate).toBe(false);
  });
});
