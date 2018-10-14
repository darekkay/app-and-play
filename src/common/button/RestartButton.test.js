import React from "react";
import { shallow } from "enzyme";
import _ from "lodash";

import { click } from "common/util/testing";

import RestartButton from "./RestartButton";

describe("<RestartButton>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RestartButton reset={jest.fn()} />);
  });

  it("renders an icon button", () => {
    expect(wrapper.find("Button")).toHaveLength(1);
    expect(wrapper.find("Icon")).toHaveLength(1);
  });

  it("restarts the game", () => {
    expect(wrapper.instance().props.reset).not.toHaveBeenCalled();
    click(wrapper, "restart");
    expect(wrapper.instance().props.reset).toHaveBeenCalled();
  });

  it("never rerenders", () => {
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ reset: _.noop });
    expect(shouldUpdate).toBe(false);
  });
});
