import React from "react";
import { shallow } from "enzyme";

import Loading from "./Loading";

describe("<Loading />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading>Example</Loading>);
  });

  it("renders without error", () => {
    expect(wrapper.find(".loading")).toHaveLength(1);
  });
});
