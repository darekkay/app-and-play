import React from "react";
import { shallow } from "enzyme";

import Timer from "./Timer";

describe("<Timer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Timer initialSeconds={10} active={false} />);
  });

  it("renders without error", () => {
    expect(wrapper.find(".timer")).toHaveLength(1);
  });
});
