import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

describe("<Icon />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon name="heart" />);
  });

  it("renders without error", () => {
    expect(wrapper.find(".icon")).toHaveLength(1);
  });

  it("does not render unknown icons", () => {
    const throwFn = () => wrapper.setProps({ name: "c01c4b" });
    expect(throwFn).toThrow();
  });

  it("renders all supported icons", () => {
    const supportedIcons = ["heart", "minus", "plus", "star"];
    supportedIcons.forEach(name => {
      wrapper.setProps({ name });
      expect(wrapper.find("SVG")).toHaveLength(1);
    });
  });
});
