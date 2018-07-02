import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("<Button />", () => {
  let wrapper = shallow(<Button>Example</Button>);

  it("renders without error", () => {
    expect(wrapper.find(".btn").exists()).toBe(true);
  });
});
