import React, { useState } from "react";
// import { Link } from "react-router-dom";
import lax from "lax.js";
import LaxDiv from "../Shared/LaxDiv";
import { Box } from "@material-ui/core";
import Button from "@mui/material/Button";

const NewSpeakers = ({ cardData }) => {
  const cards = (name, desg, company, country, image, linkedIn) => {
    return (
      <div
        style={{
          flexBasis: "22%",
          height: "400px",
          // position: "relative",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // minWidth: "200px",
          // borderRadius: "20px",
          margin: "1% 1.3%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          // background: "skyBlue",
        }}
      >
        <div
          style={{
            // position: "absolute",
            width: "100%",
            height: "60%",
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              // borderRadius: "100%",
              // border: "1px solid white",
            }}
          />
        </div>
        <div
          style={{
            // background: "black",
            height: "30%",
            // width: "100%",
            // position: "absolute",
            // zIndex: 0,
            // bottom: 0,
            // borderRadius: "20px",
            // color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "15px 0px 10px 10px ",
            }}
          >
            <span style={{ textAlign: "center" }}>
              <b>{name}</b>
            </span>
            <Box
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "12px",
                  lg: "14px",
                },
              }}
            >
              {desg}
            </Box>
            <span style={{ fontSize: "13px" }}>{company}</span>
            <span style={{ fontSize: "13px" }}>{country}</span>
            <span
              onClick={() => window.open(linkedIn)}
              style={{
                textAlign: "center",
                color: "skyBlue",
                cursor: "pointer",
              }}
            >
              <b> View Profile</b>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="speakers-area pb-120 ">
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="section-title">
          <span>View to the Event Speakers</span>
          <h2>Who's Speaking</h2>
          <div className="bar"></div>
          <LaxDiv text="Speakers" dataPreset="driftRight" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            padding: "0px 20px ",
          }}
        >
          {cardData.map((item, key) => {
            return cards(
              item.name,
              item.desg,
              item.company,
              item.country,
              item.image,
              item.linkedIn
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewSpeakers;
