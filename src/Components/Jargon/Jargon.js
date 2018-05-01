import React, { Component } from "react";
import NewsListings from "../NewsListings";

// seed-data
import jargonList from "../../seed-data/jargonList";
import newsSources from "../../seed-data/newsSources";

import "./Jargon.css";

class Jargon extends Component {
  constructor() {
    super();
    this.state = {
      jargonList: jargonList,
      index: 0,
      articles: [],
      isLoaded: false
    };
    this.generateNewJargon = this.generateNewJargon.bind(this);
  }

  componentDidMount() {
    fetch("api/jargon")
      .then(response => response.json())
      .then(data =>
        console.log(
          `data received from server: ${data.jargon} and ${data.explanation}`
        )
      );
    this.generateNewJargon();
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <NewsListings
          jargonList={this.state.jargonList}
          jargonIndex={this.state.index}
          articles={this.state.articles}
          generateNewJargon={this.generateNewJargon}
        />
      );
    }
    return <div className="loader" />;
  }

  generateNewJargon() {
    const index = (this.state.index + 1) % this.state.jargonList.length;
    const jargon = this.state.jargonList[index].jargon.toUpperCase();
    const apiEndpoint = this.buildFetchQuery(jargon);

    this.setState({ isLoaded: false });
    this.fetchArticles(apiEndpoint, index);
  }

  buildFetchQuery(jargon) {
    let searchJargon = jargon + "&";
    const url = "https://newsapi.org/v2/everything?q=";
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(`In Jargon.js, api key is ${apiKey}`);
    const pageSize = "5&";
    const sources = newsSources.join(",") + "&";

    const apiEndpoint =
      url +
      searchJargon +
      "from=2010-01-01&" +
      "sortBy=relevancy&" +
      "pageSize=" +
      pageSize +
      "sources=" +
      sources +
      "apiKey=" +
      apiKey;

    return apiEndpoint;
  }

  fetchArticles(apiEndpoint, index) {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(json => json.articles)
      .then(articles =>
        this.setState({
          jargonList: this.state.jargonList,
          index: index,
          articles: articles,
          isLoaded: true
        })
      )
      .catch(error => console.log(error));
  }
}

export default Jargon;
