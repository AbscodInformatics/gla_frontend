import React from "react";
import { Link } from "react-router-dom";

class MainBannerIp extends React.Component {
  render() {
    return (
      <div
        className="page-title-area register-banner"
        style={{ height: "300px" }}
      >
        <div className="container">
          <h1>Register for GLA IP Conference Dubai 2024</h1>
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

export default MainBannerIp;
