import React from "react";
import { shallow } from "enzyme";

import Link from "./Link";

describe("<Link />", () => {
  let wrapper = shallow(<Link url="#">Label</Link>);

  it("renders without error", () => {
    expect(wrapper.find(".link")).toHaveLength(1);
  });

  it("never rerenders", () => {
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ url: "/test" });
    expect(shouldUpdate).toBe(false);
  });

  it("renders target and rel for external links", () => {
    expect(wrapper.find(".link[target][rel]")).toHaveLength(1);
    wrapper = shallow(
      <Link url="#" external={false}>
        Label
      </Link>
    );
    expect(wrapper.find(".link[target][rel]")).toHaveLength(0);
  });
});
