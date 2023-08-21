import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
const AgendaLitigationAMS = () => {
  const eventData = [
    {
      time: "9:00 - 9:15",
      welcom: "Welcome Note",
      event:
        "Dr. Amit Goel, Director and Co-Founder  - Director at GLA (India)",
    },
    // Add other events here
  ];
  return (
    <div>
      <div>
        <div
          style={{
            textAlign: "center",
            padding: "10px",
            background: "#C82D39",
            margin: "10px",
            color: "white",
            fontWeight: "700",
          }}
        >
          Day 1: Sep 4, 2023
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            9:00 - 9:15
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Welcome Note: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>Dr. Amit Goel, &nbsp;</span>
            <span style={{ fontWeight: 400 }}>
              Director and Co-Founder - Director at GLA (India)
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            9:15 - 10:15
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session 1: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Litigation Management: &nbsp;
            </span>
            <span style={{ fontWeight: 400 }}>
              Strategies For Aligning Cost With Value,
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
                <ul style={{ padding: "15px" }}>
                  <li>Ozan Akyurek, Partner at Jones Day, France</li>
                  <li>
                    Berardino Tizzani, Legal Counsel, NewCold, Netherlands
                  </li>
                  <li> Joseph Benkel, Partner at Shibolet. Law Firm, Israel</li>
                  <li>
                    Dr Rob Vossen, Director at Competition Economists Group,
                    Netherlands
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            10:15 - 10:45
          </div>

          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Special Session: &nbsp;
            </span>
            <span style={{ fontWeight: 400 }}>
              Ayman Al-Wadi, Group Executive Chairman at AW HOLDING INT'L, UAE
              10:15 - 10:45: Trade with Confidence Pre-litigation & Litigation
              Innovative Supply Chain
            </span>
          </div>
        </div>
        
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            10:45 - 11:00
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: "#C82D39",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Networking Break &nbsp;
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            11:00- 12:15
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session 2: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Arbitration vs Mediation, &nbsp;
            </span>
            <span style={{ fontWeight: 400 }}>
              The Various Alternative Dispute Resolutions,
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>Adrian Cole, Board Member, Adrian Cole FZ LLE, UAE</div>
                <ul style={{ padding: "15px" }}>
                  <li>
                    Renata Berzanskiene, General Counsel ORLEN Lietuva, AB
                    Lithuania
                  </li>
                  <li>
                    Dr. Dimitrios Athanasakis, Vice President Legal, Hill
                    International, Inc., Netherlands
                  </li>
                  <li> Adrian Cole, Board Member, Adrian Cole FZ LLE, UAE</li>
                  <li>Avi Ordo, Partner at S. Horowitz & Co. Israel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            12:15: - 13:00
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session 3: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Third Party Due Diligence &nbsp;
            </span>
            <span style={{ fontWeight: 400 }}>– A Practical Deep Dive</span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
                <ul style={{ padding: "15px" }}>
                  <li>Galina Lyubcheva, Legal Counsel, OpenPayd, Bulgaria</li>
                  <li>
                    Gary Brown, Chief Privacy Officer at Westinghouse Electric
                    Company, UK
                  </li>
                  <li>
                    Neera Sharma, Chief Executive Officer at Sistema Shyam
                    Teleservices Ltd
                  </li>
                  <li> Marium Razzaq, Partner at JMR Solicitors UK</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            13:00 - 13:30
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: "#C82D39",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Awards and Recognition distribution
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            13:30 - 14:30
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: "#C82D39",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Networking Luncheon
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            14:30- 16:00
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session 4 : &nbsp;
            </span>

            <span style={{ fontWeight: 600, textAlign: "center" }}>
              Compliance & Risk In The Digital Age: &nbsp;
            </span>
            <span style={{ fontWeight: 400 }}>
              Cyber Security, Privacy And Data Protection.
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>
                  Sameet Gambhir, Vice President (Corp. Law) & Company
                  Secretary, DCM Shriram Ltd, India
                </div>
                <ul style={{ padding: "15px" }}>
                  <li>Richard Milchior, Partner, Herald, France</li>
                  <li>
                    Beatriz Ruiz-Beato, Global Head of Data Privacy NEC
                    Corporation, Spain
                  </li>
                  <li>
                    Nwachukwu Obi II, Compliance Officer, Intertrust Group,
                    Netherlands
                  </li>
                  <li> Onur Korucu, Vice President at TerzionDx , Ireland</li>
                  <li>
                    Carlos Landazabal Angeli, Compliance & Data Protection
                    Officer at Canadian Solar Inc
                  </li>
                  <li>
                    {" "}
                    Irith Kist, Data Protection Officer at The Netherlands
                    Cancer Institute, Netherlands
                  </li>
                  <li>
                    Jan McSweeney, Member at The United Nations international
                    taxation experts, Australia
                  </li>
                  <li>
                    Sabrina Strassburger, Compliance Officer at Damen,
                    Netherlands
                  </li>
                  <li>Sachiv Kumar, Senior Partner at SDS Advocates, India</li>
                  <li>
                    {" "}
                    Gaëtan Lassere, Managing Partner at Laurent and Charras,
                    France{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            16:00 -16:15
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#C82D39",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Networking Coffee Break
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#0092C8",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            16:15 - 17:00
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session 5 : &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Legal Risk During Disruptive Markets & Business Changes
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
                <ul style={{ padding: "15px" }}>
                  <li>Dilara Kasapoğlu, Corporate Counsel, Netherlands</li>
                  <li>
                    James Hall, CEO, Founder and General Counsel at Global GC,
                    USA
                  </li>
                  <li>
                    Agnieszka Mencel, Associate General Counsel at McKinsey &
                    Company, Poland
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
            padding: "10px",
            background: "#0092C8",
            margin: "10px",
            color: "white",
            fontWeight: "700",
          }}
        >
          Day 2: Sep 05, 2023
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            9:30 - 10:30
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Adoption Of AI, ML & Blockchain Technology In Litigation
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div> Nishant Datta, Founding Partner at D&T Juris, India</div>
                <ul style={{ padding: "15px" }}>
                  <li>
                    R Rishi, Founder & Principal at Rishi & Partners, Malaysia
                  </li>
                  <li>
                    Ashraf Motei, Founder/Managing Partner at Motei &
                    Associates, UAE
                  </li>
                  <li>
                    {" "}
                    Julius Handler, Associate at Morrison & Foerster LLP, UK
                  </li>
                  <li>
                    Angeliki Tiligadi, Compliance and Data Protection Officer at
                    Qover, Belgium
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            10: 30 - 11:00
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>Aviation litigation</span>
            <div>
              <div>
                <div> Eoin Cunneen, Partner at Flynn O'Driscoll, Ireland</div>
                <div> David Curran, Partner at Flynn O'Driscoll, Ireland</div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            11:00 - 11:15
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: "#C82D39",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Networking Break
            </span>
          </div>
        </div>

        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            11:15 - 12:15
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              The Metaverse - Legal Issues That It May Give Rise To, Including
              Data Security And Privacy, IP, Copyright, And Antitrust. &nbsp;
            </span>
            <span style={{ fontWeight: 400 }}>– A Practical Deep Dive</span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
                <ul style={{ padding: "15px" }}>
                  <li>Ahmad Saleh, Partner Al Tamimi & Company,UAE</li>
                  <li>
                    Pavle Bojkovski, Senior Commercial Legal Counsel, Sentia
                    Group Netherlands
                  </li>
                  <li>
                    John Giannakakis, Partner, Hellenic Ministry of Migration
                    and Asylum, Greece
                  </li>
                  <li>
                    {" "}
                    Alejandro Llosa, Senior Legal Counsel at Accenture, Ireland
                  </li>
                  <li>
                    {" "}
                    Dawn Sims, Vice President and Assistant General Counsel at
                    JPMorgan Chase & Co. USA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            12:15 - 13:00
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              IP Disputes In International Arbitration: Winning Strategies:
              &nbsp;
            </span>

            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
                <ul style={{ padding: "15px" }}>
                  <li>Ashok Venkateshmurthy. Partner, Factum Law, India</li>
                  <li>DeFeng(Devin) SONG, Partner at Fieldfisher, China</li>
                  <li>Ahmed Sameer Afifi, Contracts Manager at KSA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            13:00 - 14:00
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#C82D39",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Networking Luncheon
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            14:00 - 1515
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session 5: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Strategies For Trademark Litigation & Brand Protection
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
                <ul style={{ padding: "15px" }}>
                  <li>
                    Sameet Gambhir, Vice President (Corp. Law) & Company
                    Secretary, DCM Shriram Ltd, India
                  </li>
                  <li>Rajesh Ramanathan, Partner Factum Law, India</li>
                  <li>
                    Mahmoud Shaarawy, Chief Legal and Compliance Officer at HSA
                    Group, India
                  </li>
                  <li>
                    Lei (Ray) ZHAO, Senior Partner, Unitalen Attorneys at Law
                    (Patent, Trademark & Copyright), China
                  </li>
                  <li>
                    Begüm Ertürk, Legal Manager at Sabancı Holding, Turkey
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            15:15- 15:30
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#C82D39",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Networking Coffee Break
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            15:30 - 16:00
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              The Role Of IP Rights In Green Technologies Innovation
            </span>
            <div style={{ display: "flex" }}>
              <div>Panelist: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>
                  Mirjam Ros, Founder of Sparkling Eyes Innovation and Author of
                  the Innovation Matrix, Netherlands
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            16:00 - 17:00
          </div>
          <div
            style={{
              width: "80%",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "#000000" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Cross border merger and acquisition (M&A) in Europe and its impact
              on Intellectual property rights and protection
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>Panelist: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div
          style={{
            textAlign: "center",
            padding: "10px",
            background: "#000000",
            margin: "10px",
            color: "white",
            fontWeight: "700",
          }}
        >
          September 06, 2023
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            9:15 - 10:30
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: 700, color: "red" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
              Patent protection and it's role in promoting innovation in sectors
              such as FMCG, High-tech, Machinery etc
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>Panelist: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>
                  <ul style={{padding:'15px'}}>
                    <li>George Mueller, Head of IP at TomTom, Netherlands</li>
                    <li>Naveen Suriya, Partner at K&S Partners, India</li>
                    <li>Joseph Monaghan, Patent Counsel at Volvo Group</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
            10:30 - 11:00
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
          <span style={{ fontWeight: 700, color: "red" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
            IP GLOBALIZATION: IP Portfolios Across Multiple Jurisdiction At The Same Time
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>Panelist: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>
                  <ul style={{padding:'15px'}}>
                    <li>Sukla Chandra, Senior Managing Director at GE, India</li>
                    <li>Deepika Dhar, IP Management & Technology transfer at IIT Delhi, India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
          10:30 - 11:00
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
          <span style={{ fontWeight: 700, color: "red" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
            Unified Patent Court: Pre-Launch Insights and your European patenting strategy
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>Panelist: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>
                  <ul style={{padding:'15px'}}>
                    <li>Dr. Wim Maas, Partner at Taylor Wessing, Netherlands</li>
                    <li>Samuel Deschamps, Partner at Santarelli Group, Germany</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#C82D39",
              color: "white",
              fontWeight: "700",
              height: "3rem",
            }}
          >
          10:30 - 11:00
          </div>
          <div
            style={{
              width: "80%",
              // textAlign: "center",
              padding: "10px",
              background: "#848484",
              margin: "10px",
              color: "white",
              fontWeight: "700",
            }}
          >
          <span style={{ fontWeight: 700, color: "red" }}>
              Session: &nbsp;
            </span>
            <span style={{ fontWeight: 600 }}>
            Maintaining and Navigating Trade Secret Strategies in a Hybrid Workplace
            </span>
            <div style={{ display: "flex" }}>
              <div>Moderator: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>TBA</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>Panelist: &nbsp; &nbsp; &nbsp;</div>
              <div>
                <div>
                  <ul style={{padding:'15px'}}>
                    <li>Dr. Wim Maas, Partner at Taylor Wessing, Netherlands</li>
                    <li>Samuel Deschamps, Partner at Santarelli Group, Germany</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AgendaLitigationAMS;
