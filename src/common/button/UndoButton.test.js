import React from "react";
import { shallow } from "enzyme";

import { click } from "common/util/testing";

import UndoButton from "./UndoButton";
import _ from "lodash";

describe("<UndoButton>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UndoButton undo={jest.fn()} />);
  });

  it("renders an icon button", () => {
    expect(wrapper.find("Button")).toHaveLength(1);
    expect(wrapper.find("Icon")).toHaveLength(1);
  });

  it("restarts the game", () => {
    expect(wrapper.instance().props.undo).not.toHaveBeenCalled();
    click(wrapper, "undo");
    expect(wrapper.instance().props.undo).toHaveBeenCalled();
  });

  it("never rerenders", () => {
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ undo: _.noop });
    expect(shouldUpdate).toBe(false);
  });
});
