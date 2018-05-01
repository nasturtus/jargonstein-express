import React from "react";
import PropTypes from "prop-types";

import "./NewsListings.css";

const NewsListings = props => {
  const jargon = props.jargonList[props.jargonIndex].jargon.toUpperCase();
  const explanation = props.jargonList[props.jargonIndex].explanation;
  const articles = props.articles;
  return (
    <div className="grid-container">
      <p className="grid-item-jargon">{jargon}</p>
      <p className="grid-item-explanation">{explanation}</p>
      <div className="grid-item-newsListings fade-in">
        <p className="intro-line-to-listings">
          Explore this jargon further with these news articles...
        </p>

        {articles.map((article, index, arr) => {
          return (
            <div key={index}>
              <li className="newslistings-article">
                <a
                  href={article.url}
                  className="newslistings-link"
                  target="_blank"
                >
                  {article.title}
                </a>{" "}
                <span id="newslistings-span">{article.source.name}</span>
              </li>
            </div>
          );
        })}
      </div>
      <div className="grid-item-button">
        <button
          className="newslistings-button"
          onClick={props.generateNewJargon}
        >
          Show Next
        </button>
      </div>
    </div>
  );
};

NewsListings.propTypes = {
  jargonList: PropTypes.array.isRequired,
  jargonIndex: PropTypes.number.isRequired,
  articles: PropTypes.array.isRequired,
  generateNewJargon: PropTypes.func.isRequired
};

export default NewsListings;
