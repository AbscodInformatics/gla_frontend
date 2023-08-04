import React from 'react'
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
    <>
      <div style={{ margin: "10%", textAlign: "center" }}>
        <h4 style={{ background: "#09a9f7", padding: "10px" }}>
          Day 1: Sep 4, 2023
        </h4>
        <Table
          className=""
          style={{ border: "1px solid", borderColor: "gray" }}
        >
          <TableBody>
            <TableRow key="">
              <TableCell style={{ fontSize: "20px" }}>Registration</TableCell>
              <TableCell></TableCell>
              <TableCell>8:00 AM to 9:00 AM</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell>9:00 - 9:15</TableCell>
              <TableCell>Welcome Note</TableCell>
              <TableCell>
                Dr. Amit Goel, Director and Co-Founder - Director at GLA (India)
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell> 9:15 - 10:30</TableCell>
              <TableCell>Session 1(A): </TableCell>
              <TableCell>
                Litigation Management: Strategies For Aligning Cost With Value
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>TBA</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Ozan Akyurek, Partner at Jones Day, France
                </TableCell>
                <TableCell>
                  2. Berardino Tizzani, Legal Counsel, NewCold, Netherlands
                </TableCell>
                <TableCell>
                  3. Joseph Benkel, Partner at Shibolet. Law Firm, Israel
                </TableCell>
                <TableCell>
                  4. Dr Rob Vossen, Director at Competition Economists Group,
                  Netherlands
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell style={{ color: "red", backgroundColor: "#09a9f7" }}>
                10:30 - 10:45
              </TableCell>
              <TableCell></TableCell>
              <TableCell style={{ color: "red" }}>Networking Break</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell>10:45 - 12:00</TableCell>
              <TableCell>Session 2: </TableCell>
              <TableCell>
                Arbitration vs Mediation, The Various Alternative Dispute
                Resolutions
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>
                Adrian Cole, Board Member, Adrian Cole FZ LLE, UAE
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Renata Berzanskiene, General Counsel ORLEN Lietuva, AB
                  Lithuania
                </TableCell>
                <TableCell>
                  2. Dr. Dimitrios Athanasakis, Vice President Legal, Hill
                  International, Inc., Netherlands
                </TableCell>
                <TableCell>
                  3. Adrian Cole, Board Member, Adrian Cole FZ LLE, UAE
                </TableCell>

                <TableCell>
                  4. Ahmed Sameer Afifi, Contracts Manager at KSA
                </TableCell>
                <TableCell>
                  5. Avi Ordo, Partner at S. Horowitz & Co. Israel
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell>12:00: - 13:00</TableCell>
              <TableCell>Session 3: </TableCell>
              <TableCell>
                Third Party Due Diligence – A Practical Deep Dive
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>TBA</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Galina Lyubcheva, Legal Counsel, OpenPayd, Bulgaria
                </TableCell>
                <TableCell>
                  2. Gary Brown, Chief Privacy Officer at Westinghouse Electric
                  Company, UK
                </TableCell>
                <TableCell>
                  3. Neera Sharma, Chief Executive Officer at Sistema Shyam
                  Teleservices Ltd
                </TableCell>

                <TableCell>
                  4. Marium Razzaq, Partner at JMR Solicitors UK
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell>13:00 - 13:30</TableCell>
              <TableCell></TableCell>
              <TableCell>
                Awards and Recognition distribution + Group Photo
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell style={{ color: "red", backgroundColor: "#09a9f7" }}>
                13:30 - 14:30
              </TableCell>
              <TableCell></TableCell>
              <TableCell style={{ color: "red" }}>
                Networking Luncheon
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell>14:30- 16:00</TableCell>
              <TableCell>Session 4 :</TableCell>
              <TableCell>
                Compliance & Risk In The Digital Age: Cyber Security, Privacy
                And Data Protection.
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>
                Sameet Gambhir, Vice President (Corp. Law) & Company Secretary,
                DCM Shriram Ltd, India
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Richard Milchior, Partner, Herald, France
                </TableCell>
                <TableCell>
                  2. Beatriz Ruiz-Beato, Global Head of Data Privacy NEC
                  Corporation, Spain
                </TableCell>
                <TableCell>
                  3. Nwachukwu Obi II, Compliance Officer, Intertrust Group,
                  Netherlands
                </TableCell>

                <TableCell>
                  4. Onur Korucu, Vice President at TerzionDx , Ireland
                </TableCell>
                <TableCell>
                  5. Carlos Landazabal Angeli, Compliance & Data Protection
                  Officer at Canadian Solar Inc
                </TableCell>
                <TableCell>
                  6. Irith Kist, Data Protection Officer at The Netherlands
                  Cancer Institute, Netherlands
                </TableCell>
                <TableCell>
                  7. Jan McSweeney, Member at The United Nations international
                  taxation experts, Australia
                </TableCell>
                <TableCell>
                  8. Sabrina Strassburger, Compliance Officer at Damen,
                  Netherlands
                </TableCell>
                <TableCell>
                  9. Sachiv Kumar, Senior Partner at SDS Advocates, India
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow>
              <TableCell style={{ color: "red", backgroundColor: "#09a9f7" }}>
                16:00 -16:15
              </TableCell>
              <TableCell></TableCell>
              <TableCell style={{ color: "red" }}>
                Networking Coffee Break
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell>16:15 - 17:00</TableCell>
              <TableCell>Session 5: </TableCell>
              <TableCell>
                Legal Risk During Disruptive Markets & Business Changes
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>TBA</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Dilara Kasapoğlu, Corporate Counsel, Netherlands
                </TableCell>
                <TableCell>
                  2. James Hall, CEO, Founder and General Counsel at Global GC,
                  USA
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Special Session </TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  Ayman Al-Wadi, Group Executive Chairman at AW HOLDING INT'L,
                  UAE
                </TableCell>
              </TableRow>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div style={{ margin: "10%", textAlign: "center" }}>
        <h4 style={{ background: "#09a9f7", padding: "10px" }}>
          Day 2: Sep 05, 2023
        </h4>
        <Table
          className=""
          style={{ border: "1px solid", borderColor: "gray" }}
        >
          <TableBody>
            <TableRow key="">
              <TableCell>9:30 - 10:45</TableCell>
              <TableCell>Session</TableCell>
              <TableCell>
                Adoption Of AI, ML & Blockchain Technology In Litigation
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>
                Nishant Datta, Founding Partner at D&T Juris, India
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. R Rishi, Founder & Principal at Rishi & Partners, Malaysia
                </TableCell>
                <TableCell>
                  2. Ashraf Motei, Founder/Managing Partner at Motei &
                  Associates, UAE
                </TableCell>
                <TableCell>
                  3. Julius Handler, Associate at Morrison & Foerster LLP, UK
                </TableCell>
                <TableCell>
                  4. Angeliki Tiligadi, Compliance and Data Protection Officer
                  at Qover, Belgium
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell style={{ color: "red", backgroundColor: "#09a9f7" }}>
                10:45 - 11:00
              </TableCell>
              <TableCell></TableCell>
              <TableCell style={{ color: "red" }}>Networking Break</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell>11: 00 - 11:45</TableCell>
              <TableCell>Session 1(B):</TableCell>
              <TableCell>Aviation litigation</TableCell>
            </TableRow>

            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> </TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  Eoin Cunneen, Partner at Flynn O'Driscoll, Ireland
                </TableCell>
                <TableCell>
                  David Curran, Partner at Flynn O'Driscoll, Ireland
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell>11:45 - 13:00</TableCell>
              <TableCell>Session </TableCell>
              <TableCell>
                The Metaverse - Legal Issues That It May Give Rise To, Including
                Data Security And Privacy, IP, Copyright, And Antitrust.
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>TBA</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Ahmad Saleh, Partner Al Tamimi & Company,UAE
                </TableCell>
                <TableCell>
                  2. Pavle Bojkovski, Senior Commercial Legal Counsel, Sentia
                  Group Netherlands
                </TableCell>
                <TableCell>
                  3. John Giannakakis, Partner, Hellenic Ministry of Migration
                  and Asylum, Greece
                </TableCell>

                <TableCell>
                  4. Alejandro Llosa, Senior Legal Counsel at Accenture, Ireland
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell style={{ color: "red", backgroundColor: "#09a9f7" }}>
                13:00 - 14:00
              </TableCell>
              <TableCell></TableCell>
              <TableCell style={{ color: "red" }}>
                Networking Luncheon
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell>14:00 - 15:00</TableCell>
              <TableCell>Session </TableCell>
              <TableCell>
                IP Disputes In International Arbitration: Winning Strategies
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>TBA</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Ashok Venkateshmurthy. Partner, Factum Law, India
                </TableCell>
                <TableCell>
                  2. Ram Tenneti, Global Vice President, EKS, India
                </TableCell>
                <TableCell>
                  3. Manoj Poonia, Vice President at Effectual Services, India
                </TableCell>
                <TableCell>
                  4. DeFeng(Devin) SONG, Partner at Fieldfisher, China 
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow>
              <TableCell style={{ color: "red", backgroundColor: "#09a9f7" }}>
                15:00 - 15:15
              </TableCell>
              <TableCell></TableCell>
              <TableCell style={{ color: "red" }}>
                Networking Coffee Break
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell>16:15 - 17:00</TableCell>
              <TableCell>Session 5: </TableCell>
              <TableCell>
                Strategies For Trademark Litigation & Brand Protection
              </TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell>Moderator:</TableCell>
              <TableCell>TBA</TableCell>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell> Panelist:</TableCell>
              <TableRow style={{ display: "flex", flexDirection: "column" }}>
                <TableCell>
                  1. Sameet Gambhir, Vice President (Corp. Law) & Company
                  Secretary, DCM Shriram Ltd, India
                </TableCell>
                <TableCell>
                  2. Rajesh Ramanathan, Partner Factum Law, India
                </TableCell>
                <TableCell>
                  3. Mahmoud Shaarawy, Chief Legal and Compliance Officer at HSA
                  Group, India
                </TableCell>
                <TableCell>
                  4. Lei (Ray) ZHAO, Senior Partner, Unitalen Attorneys at Law
                  (Patent, Trademark & Copyright), China
                </TableCell>
              </TableRow>
            </TableRow>
            <TableRow key="">
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell style={{ color: "red" }}>Closing Note </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default AgendaLitigationAMS