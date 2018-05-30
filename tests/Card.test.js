import React from "react";
import { Card } from "../src/";

describe("Card", () => {
  it("Should renders without problems", () => {
    const wrapper = shallow(<Card>This is card.</Card>);

    expect(wrapper).toMatchSnapshot();
  });
});
