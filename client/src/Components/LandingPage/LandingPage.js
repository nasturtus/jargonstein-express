import React, { Component } from "react";
import Caption from "../Caption";
import { Link } from "react-router-dom";

import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-grid-container">
        <div className="grid-item">
          <Caption />
        </div>
        <div className="grid-item">
          <p className="intro-copy">
            Discover new jargon. And find related news mentions.
          </p>
        </div>
        <div className="grid-item">
          <Link to="/jargonstein" className="landing-page-link">
            <button className="landing-page-button">Start Exploring</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
