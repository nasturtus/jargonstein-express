import React from "react";
import { shallow } from "enzyme";
import Caption from "./Caption";

describe("Tests for Caption component", () => {
  const wrapper = shallow(<Caption />);
  it("Caption should have one div ", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("Caption should render heading properly", () => {
    expect(wrapper.find("caption-heading").text()).toEqual("Jargonstein");
  });

  it("Caption should render subheading properly", () => {
    expect(wrapper.find("caption-subheading").text()).toEqual(
      "A Jargon Buster for the Curious & Clueless"
    );
  });
});
