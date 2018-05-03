import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "../App";
import LandingPage from "../LandingPage";

class AppRouter extends Component {
  render() {
    return (
      <div>
        {/* Routes */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/jargonstein" component={App} />
      </div>
    );
  }
}

export default AppRouter;
