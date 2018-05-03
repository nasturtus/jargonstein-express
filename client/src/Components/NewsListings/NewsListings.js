import React from "react";
import PropTypes from "prop-types";

import CopyButton from "../CopyButton";
import "./NewsListings.css";

const NewsListings = props => {
  const jargon = props.jargon.toUpperCase();
  const explanation = props.explanation;
  const articles = props.articles;
  const clipBoardtext = jargon + "\n" + explanation;
  return (
    <div className="grid-container">
      <p className="grid-item-jargon">{jargon}</p>
      <p className="grid-item-explanation">{explanation}</p>
      <CopyButton text={clipBoardtext} />

      <div className="grid-item-newsListings fade-in">
        <p className="intro-line-to-listings">
          Explore this jargon further with these news articles...
        </p>

        {articles.map((article, index) => {
          return (
            <div key={index}>
              <li className="newslistings-article">
                <a
                  href={article.url}
                  className="newslistings-link"
                  target="_blank"
                >
                  {article.title}
                </a>
                <span id="newslistings-span"> | {article.source.name}</span>
              </li>
            </div>
          );
        })}
      </div>
      <div className="grid-item-button">
        <button
          className="newslistings-button"
          onClick={props.handleFetchContent}
        >
          Show Next
        </button>
      </div>
    </div>
  );
};

NewsListings.propTypes = {
  jargon: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
  handleFetchContent: PropTypes.func.isRequired
};

export default NewsListings;
