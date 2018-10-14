import React from "react";
import { shallow } from "enzyme";

import Menu from "./Menu";

describe("<Menu />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu>Example</Menu>);
  });

  it("renders without error", () => {
    expect(wrapper.find(".menu")).toHaveLength(1);
  });
});
