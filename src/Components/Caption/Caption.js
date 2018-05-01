import React from "react";
import { Link } from "react-router-dom";

import "./Caption.css";

const Caption = () => (
  <div className="caption-grid-container">
    <p>
      <Link to="/" className="landing-page-link">
        <caption-heading>Jargonstein</caption-heading>
      </Link>
    </p>

    <p>
      <caption-subheading>
        A Jargon Buster for the Curious & Clueless
      </caption-subheading>
    </p>
  </div>
);

export default Caption;
