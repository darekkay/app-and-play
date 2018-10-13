import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("<Button />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>Example</Button>);
  });

  it("renders without error", () => {
    expect(wrapper.find(".btn")).toHaveLength(1);
  });

  it("renders all type/outline combinations", () => {
    wrapper.setProps({ type: "primary" });
    expect(wrapper.find(".btn-primary")).toHaveLength(1);

    wrapper.setProps({ type: "secondary" });
    expect(wrapper.find(".btn-secondary")).toHaveLength(1);

    wrapper.setProps({ type: "primary", outline: true });
    expect(wrapper.find(".btn-primary-outline")).toHaveLength(1);

    wrapper.setProps({ type: "secondary", outline: true });
    expect(wrapper.find(".btn-secondary-outline")).toHaveLength(1);
  });
});
