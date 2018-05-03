import React from "react";
import { shallow } from "enzyme";
import AppRouter from "./AppRouter";

describe("App router testing", () => {
  it("should have two routes", () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper.find("Route")).toHaveLength(2);
  });
});
