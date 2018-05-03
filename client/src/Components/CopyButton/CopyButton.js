import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import "./CopyButton.css";

// note in onClick how React requires event handlers to be specified.
// onClick={copy} instead of onclick="copy()"
class CopyButton extends Component {
  constructor({ text }) {
    super();
    this.state = {
      value: text,
      isCopied: false
    };
  }
  render() {
    return (
      <div>
        <CopyToClipboard text={this.state.value} onCopy={this.handleOnCopy}>
          <button className="copyButton">Copy</button>
        </CopyToClipboard>
        <NotificationContainer />
      </div>
    );
  }

  handleOnCopy = () => {
    this.setState({ isCopied: true });
    console.log("copied)");
    this.createNotification("info");
  };

  createNotification = type => {
    NotificationManager.info("Copied to clipboard");
  };
}

export default CopyButton;
