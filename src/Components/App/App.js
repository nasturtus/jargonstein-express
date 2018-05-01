import React, { Component } from "react";
import Caption from "../Caption";
import Jargon from "../Jargon";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-grid-container">
        <div className="app-grid-item">
          <Caption />
        </div>
        <div className="app-grid-item">
          <Jargon />
        </div>
      </div>
    );
  }
}

export default App;
