import React from "react";
import { shallow } from "enzyme";

import Button from "common/button/Button";

import { click } from "./testing";

describe("testing", () => {
  it("click - calls onClick prop", () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <Button name="mock" onClick={spy}>
        Button
      </Button>
    );
    expect(spy).not.toHaveBeenCalled();
    click(wrapper, "mock");
    expect(spy).toHaveBeenCalled();
  });
});
