import React from "react";
import { Link } from "react-router-dom";

class BannerAmsIP extends React.Component {
  render() {
    return (
      <div
        className="page-title-area item-event-ams-ip "
        style={{ height: "500px" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white" }}>
            Global Legal Association IP Conference 2023
          </h2>
          <span style={{ fontSize: "30px" }}>
            {" "}
            <b>Amsterdam</b>
          </span>
          <ul>
            <div
              style={{
                background: "#E6E4FF",
                width: "fit-content",
                color: "#0A66C2",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <b> Date : 5th & 6th September 2023 </b>
            </div>

            <div
              style={{
                background: "black",
                width: "fit-content",
                color: "white",
                padding: "5px 20px",
                borderRadius: "20px",
                marginTop: "20px",
                opacity: 0.8,
              }}
            >
              <b>Venue - Park Plaza Amsterdam Airport</b>{" "}
            </div>
          </ul>
          <div
            style={{
              background: "#0A66C2",
              width: "fit-content",
              color: "white",
              padding: "5px 20px",
              borderRadius: "5px",
              marginTop: "20px",
              fontSize: "25px",
            }}
          >
            <Link to="/pricing-ip-ams" style={{ color: "white" }}>
              {" "}
              Register Now{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerAmsIP;
