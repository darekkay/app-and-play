import React from "react";
import { shallow } from "enzyme";

import Square from "./Square";

describe("<Icon />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Square name="heart" />);
  });

  it("renders without error", () => {
    expect(wrapper.find(".square")).toHaveLength(1);
  });
});
