import React from "react";
import { Link } from "react-router-dom";

class MainBannerLt extends React.Component {
  render() {
    return (
      <div
        className="page-title-area register-banner"
        style={{ height: "200px" }}
      >
        <div className="container">
          <h1> Register for GLA Litigation Conference 2023 Amsterdam</h1>
          <span>Get Your Tickets</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Registration</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainBannerLt;
