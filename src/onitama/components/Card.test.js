import React from "react";
import { shallow } from "enzyme";
import _ from "lodash";

import Card from "./Card";

describe("<Board>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card name="name" moves={[]} alignment="center" onClick={_.noop} />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".card")).toHaveLength(1);
  });

  it("renders a clickable card", () => {
    expect(wrapper.find(".clickable")).toHaveLength(0);
    wrapper.setProps({ clickable: true });
    expect(wrapper.find(".clickable")).toHaveLength(1);
  });

  it("contains 25 squares", () => {
    expect(wrapper.find(".field")).toHaveLength(25);
  });

  it("renders a colored square for each move", () => {
    wrapper.setProps({ moves: [1, 2, 3], alignment: "right" });
    expect(wrapper.find(".move-right")).toHaveLength(3);
  });
});
