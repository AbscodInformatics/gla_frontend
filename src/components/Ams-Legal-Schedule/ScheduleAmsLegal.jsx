import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ScheduleAmsLegal = () => {
  return (
    <section
      className="schedule-area bg-image pb-120 "
      style={{ paddingTop: "30px" }}
    >
      <div className="container">
        {/* particular schedule data and download agenda  */}

        {/* <div style={{display:"flex",justifyContent:"center",margin:"3% 0px "}}>
            <div style={{  background: "white",color:"black",width:"55%", minWidth: "300px" ,padding:"10px",borderRadius:"20px"}}>
              <img src="images/theme_lt.png" alt="" style={{minWidth:"300px",width:"100%"}} />
              <div style={{padding:"10px",fontSize:"18px",fontWeight:600,textAlign:"justify"}}>
                Theme :-  “ Exploring Cutting-Edge Techniques and Strategies for Successful Litigation in Today's Ever-Changing Legal Landscape ”
              </div>
              <Button variant="contained">Download Agenda</Button>
            </div>
          </div> */}

        <div
          style={{
            background: "white",
            color: "black",
            width: "100%",
            margin: "2% 0px",
            borderRadius: "20px",
            padding: "10px",
            fontSize: "20px",
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <b>
            {" "}
            Theme :- “ Exploring Cutting-Edge Techniques and Strategies for
            Successful Litigation in Today's Ever-Changing Legal Landscape ”
          </b>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="tab">
              <ul className="tabs active">
                <div
                  style={{
                    width: "100%",
                    background: "#09A9F7",
                    color: "white",
                    padding: "10px 0px",
                    fontSize: "20px",
                  }}
                >
                  <b> September 4, 2023 </b>
                </div>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 1 : Litigation Management: Strategies For
                          Aligning Cost With Value
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 2 : Arbitration vs Mediation, The Various
                          Alternative Dispute Resolutions
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 3 : Third Party Due Diligence – A Practical
                          Deep Dive
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 4 : Compliance & Risk In The Digital Age:
                          Cyber Security, Privacy And Data Protection.
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 5 : Legal Risk During Disruptive Markets &
                          Business Changes
                        </p>
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 6 : Third Party Financing of Litigation: Civil
                          Justice Friend or Foe?
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tab" style={{ marginTop: "3%" }}>
              <ul className="tabs active">
                <div
                  style={{
                    width: "100%",
                    background: "#FF2D53",
                    color: "white",
                    padding: "10px 0px",
                    fontSize: "20px",
                  }}
                >
                  <b> September 5, 2023 </b>
                </div>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 7 : Adoption Of AI, ML & Blockchain Technology
                          In Litigation
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 8 : The Metaverse - Legal Issues That It May
                          Give Rise To, Including Data Security And Privacy, IP,
                          Copyright, And Antitrust.
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 9 : IP Disputes In International Arbitration:
                          Winning Strategies
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 10 : Cross border merger and acquisition (M&A)
                          in Europe and its impact on Intellectual property
                          rights and protection
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 11 : Strategies For Trademark Litigation &
                          Brand Protection
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 pb-5">
            <div className="btn-box">
              <Link className="btn btn-secondary" to="/contact">
                Connect with us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shape1">
        <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
      </div>
      <div className="shape2 rotateme">
        <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
      </div>
      <div className="shape3 rotateme">
        <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
      </div>
      <div className="shape4">
        <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
      </div>
      {/* <ControlledAccordions/> */}
    </section>
  );
};

export default ScheduleAmsLegal;
