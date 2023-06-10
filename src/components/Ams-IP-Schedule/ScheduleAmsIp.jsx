import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ScheduleAmsIp = () => {
  return (
    <section
      className="schedule-area bg-image pb-120 "
      style={{ paddingTop: "40px" }}
    >
      <div className="container">
        {/* particular schedule data and download agenda  */}

        {/* <div style={{display:"flex",justifyContent:"center",}}>
            <div style={{  background: "white",color:"black",width:"55%", minWidth: "300px" ,padding:"10px",borderRadius:"20px"}}>
              <img src="images/theme_IP.png" alt="" style={{minWidth:"300px",width:"100%"}} />
              <div style={{padding:"10px",fontSize:"18px",fontWeight:600,textAlign:"justify"}}>
                Theme :-  “Protecting Innovation: Navigating the Evolving Landscape of Intellectual Property in the Digital Age ”
              </div>
              <Button variant="contained">Download Agenda</Button>
            </div>
      </div> */}

        <div
          style={{
            background: "white",
            color: "black",
            width: "100%",
            borderRadius: "20px",
            padding: "15px",
            fontSize: "20px",
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <b>
            {" "}
            Theme :- “Protecting Innovation: Navigating the Evolving Landscape
            of Intellectual Property in the Digital Age ”
          </b>
        </div>
        <div className="row">
          <div className="col-lg-12">
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
                          Session 1 : Adoption Of AI, ML & Blockchain Technology
                          In Litigation
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 2 : The Metaverse - Legal Issues That It May
                          Give Rise To, Including Data Security And Privacy, IP,
                          Copyright, And Antitrust.
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 3 : IP Disputes In International Arbitration:
                          Winning Strategies
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 4: Cross border merger and acquisition (M&A)
                          in Europe and its impact on Intellectual property
                          rights and protection
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 5 : Strategies For Trademark Litigation &
                          Brand Protection
                        </p>
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 6 : The Role Of IP Rights In Green
                          Technologies Innovation
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
                    background: "#09A9F7",
                    color: "white",
                    padding: "10px 0px",
                    fontSize: "20px",
                  }}
                >
                  <b> September 6, 2023 </b>
                </div>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 7 : Patent protection and it's role in
                          promoting innovation in sectors such as FMCG,
                          High-tech, Machinery etc
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 8 : IP GLOBALIZATION: IP Portfolios Across
                          Multiple Jurisdiction At The Same Time
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 9 : Increasing Patent Revenue In New Markets
                          (Many Entities Are Now Seeking To Diversify And
                          Increase Their Patent Earnings By Licensing To New
                          Sectors).
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 10 : Unified Patent Court: Pre-Launch Insights
                          and your European patenting strategy
                        </p>
                      </div>
                    </li>

                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 11 : Maintaining and Navigating Trade Secret
                          Strategies in a Hybrid Workplace
                        </p>
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="schedule-info">
                        <p style={{ fontWeight: 700 }}>
                          Session 12 : Brand protection strategies & the
                          importance of brand identity in EU competitive
                          business landscape.
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

export default ScheduleAmsIp;
