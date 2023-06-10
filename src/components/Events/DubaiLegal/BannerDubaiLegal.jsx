import React from "react";
import { Link } from "react-router-dom";

class BannerDubaiLegal extends React.Component {
  render() {
    return (
      <div
        className="page-title-area item-event-dubai-legal "
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
            Global Legal Association Litigation Conference 2024 Dubai
          </h2>
          <ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  background: "#E6E4FF",
                  width: "fit-content",
                  color: "#0A66C2",
                  padding: "5px 20px",
                  borderRadius: "20px",
                }}
              >
                <b> Date : 14th & 15th Feb 2024 </b>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
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
                <b>Venue - Dubai City </b>{" "}
              </div>
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
            <Link to="/pricing-legal-dubai" style={{ color: "white" }}>
              {" "}
              Register Now{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerDubaiLegal;
