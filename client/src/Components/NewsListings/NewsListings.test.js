import React from "react";
import { shallow } from "enzyme";
import NewsListings from "./NewsListings";
import jargonList from "../seed-data/jargonList";

describe("NewsListings", () => {
  it("should call generateNewJargon on click", () => {
    const mockHandler = jest.fn();
    
    // mock props to component NewsListings
    const jargonList = [
      {
        jargon: "lean canvas",
        explanation:
          "A 1-page business plan template that helps deconstruct an idea into its key assumptions using various basic building blocks.",
        isFavourite: false
      }
    ];
    const jargonIndex = 0;
    const articles = [
      { source: { name: "FT" } },
      { source: { name: "Bloomberg" } }
    ];
    const wrapper = shallow(
      <NewsListings
        jargonIndex={jargonIndex}
        jargonList={jargonList}
        generateNewJargon={mockHandler}
        articles={articles}
      />
    );

    wrapper.find("button").simulate("click");
    expect(mockHandler).toBeCalled();
  });
});
