import React from "react";
import { shallow } from "enzyme";

import SVG from "./SVG";

describe("<SVG />", () => {
  let wrapper = shallow(
    <SVG width={20} height={30}>
      <path />
    </SVG>
  );

  it("renders without error", () => {
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("sets the viewBox width and height", () => {
    expect(wrapper.find("svg").prop("viewBox")).toBe("0 0 20 30");
  });
});
