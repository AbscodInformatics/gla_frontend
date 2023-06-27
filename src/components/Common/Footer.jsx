import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

const Footer = () => {
  return (
    <footer style={{ background: "#0D1028" }}>
      <Box sx={{ px: "3%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-around",
          }}
        >
          <div className="col py-sm-3 py-lg-0">
            <div
              className="single-footer-widget "
              style={{ textAlign: "center" }}
            >
              <h3>Contact Us</h3>

              <p
                className="location"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: 0,
                }}
              >
                <img
                  src="images/location.png"
                  alt=""
                  style={{ height: "20px", marginTop: "5px" }}
                />
                <p style={{ fontsize: "11px" }}>
                  Suite-427,425 Broadhollow Road, Melville | NY-11747{" "}
                </p>
              </p>
              <Box
                className="location"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  whiteSpace: "noWrap",
                }}
              >
                <img src="images/phone.png" alt="" style={{ height: "20px" }} />
                <p style={{ whiteSpace: "noWrap", fontsize: "11px" }}>
                  +91 97114 25481 , +1 716 941 7798
                </p>
              </Box>
            </div>
          </div>

          <div className="col py-sm-3 py-lg-0 ">
            <div
              className="single-footer-widget"
              style={{ textAlign: "center" }}
            >
              <h3>Quick Links</h3>
              <span
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  window.scrollTo(400, 900);
                }}
              >
                {" "}
                Who We Are
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => window.scrollTo(400, 2800)}
              >
                Founders & Leadership
              </span>
              <p
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/global-legal-association/posts/?feedView=all",
                    "_blank"
                  )
                }
              >
                LinkedIn
              </p>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>

          <div className="col py-sm-3 py-lg-0">
            <div
              className="single-footer-widget "
              style={{ textAlign: "center" }}
            >
              <h3>Our Policy</h3>

              <p
                type="button"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                GDPR Policy
              </p>
              <p
                type="button"
                data-toggle="modal"
                data-target="#ampleModalLong"
              >
                Cancellation & Refund Policy
              </p>
              <p
                type="button"
                data-toggle="modal"
                data-target="#termsConditions"
              >
                Terms & Conditions
              </p>
              <p
                type="button"
                data-toggle="modal"
                data-target="#shippingPolicy"
              >
                Shipping & Delivery Policy
              </p>
            </div>
          </div>
        </Box>
        <div className="copyright-area" style={{ display: "flex" }}>
          <p style={{ fontSize: "13px" }}>
            Copyright © 2023 Global Legal Association. All rights reserved.
          </p>
          <p className="ml-5" style={{ fontSize: "13px" }}>
            <b>
              {" "}
              For further queries contact us at Faiz@globallegalassociation.org{" "}
            </b>
          </p>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
