import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("<App>", () => {
  let wrapper = shallow(<App />);

  it("renders without error", () => {
    expect(wrapper.find("main").exists()).toBe(true);
  });
});
