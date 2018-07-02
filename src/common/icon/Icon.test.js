import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

describe("<Icon />", () => {
  let wrapper = shallow(<Icon name="heart" />);

  it("renders without error", () => {
    expect(wrapper.find(".icon").exists()).toBe(true);
  });

  it("does not render unknown icons", () => {
    const throwFn = () => wrapper.setProps({ name: "c01c4b" });
    expect(throwFn).toThrow();
  });
});
