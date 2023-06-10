import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ScheduleDubaiLegal = () => {
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
            Theme :- “ Latest Developments In Litigation, Including New Laws,
            Regulations, And Court Decisions.”
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
                  <b> February 14, 2024 </b>
                </div>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 1 : The Use Of AI In Litigation Has Given Rise
                          To A Number Of Legal And Ethical Concerns, Forexample
                          Bias In AI Algorithms.
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 2 : The Arbitral Process And Alternative
                          Dispute Resolution In The EMEA Region.
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 3 : The Legal Challenges And Disputes That
                          Arise In The Context Of Infrastructure Development
                          Projects
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 4 : The Legal Issues Of The Metaverse And NFTs
                          - The Good, The Brag, And The Ugly
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 5 : Strategies For Managing Litigation Risk,
                          Including Insurance, Litigation Financing, And Early
                          Case Assessment
                        </p>
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 6 : Arbitration Gaining Popularity In
                          EMEA-Investment Disputes Are Becoming Increasingly
                          Common In The Middle East, Particularly In The Context
                          Of Oil And Gas Projects
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
                  <b> February 15, 2024</b>
                </div>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 7 : Compliance & Risk In The Digital Age:
                          Cyber Security, Privacy And Data Protection.
                        </p>
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 8 : a.) The Recent Reforms To The Saudi Legal
                          System And Their Impact On Litigation.
                          <br />
                          b) Diversity And Inclusion Can Play A Crucial Role In
                          Litigation, How?
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 9 : The Various Litigation Challenges That May
                          Arise In DIFC Courts
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 10: Global Trends: Litigation Finance Is A
                          Rapidly Growing Industry - Non-recourse Financing &
                          Recourse Financing
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 11 : ADR (Alternative Dispute Resolution) And
                          Litigation - Two Different Approaches To Resolving
                          Legal Disputes.
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

export default ScheduleDubaiLegal;
