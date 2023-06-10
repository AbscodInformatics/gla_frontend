import * as React from 'react';
import { Link } from 'react-router-dom'; 



export default function BasicTable() {
  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", marginTop: "3%" }}>
      <span style={{ fontWeight: 700, margin: "10px", fontSize: "20px", }}>Theme :-	Learn about the latest legal trends and challenges 
      <a href="https://effectualservices.com/Signature-Images/ScheduleNew.xlsx" style={{background:"#00ACEE",color:"white",marginLeft:"20px",padding:"5px 10px"}} download >Download Schedule</a>
      </span>
<div style={{width:"100%",marginTop:"10px",display:"flex",justifyContent:"space-around"}}>
      <table className="table" style={{ width: "45%", border: "1px solid black",  }}>
        <tr style={{ fontSize: "15px", fontWeight: 700 }}> <td> &nbsp; </td><td> Day 1 </td></tr>
        <tr style={{ background: "#FF3158", color: "white", fontSize: "15px" }}>
          <td>8:00 - 9:00</td>
          <td>Registration </td>

        </tr>
        <tr style={{ fontSize: "15px" }}>
          <td>9:00 - 9:15</td>
          <td> Welcome Note by Dr. Amit Goel, Director and Co-Founder - Effectual Services - Director at GLA (India) </td>
        </tr>

        <tr style={{ fontSize: "15px" }}>
          <td>9:15 - 09:45</td>
          <td> Special Session by Mohammed Noaman, General Counsel Europe at GE Power, UAE </td>
        </tr>

        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>9:45 - 11:00</td>
          <td> Session 1: 	Metaverse And IP, NFTs, Crypto And The Blockchain Technology And Its Relation With IP </td>
        </tr>
        <tr> <td>Moderator: </td>	<td> Ahmad Saleh, Partner at Al Tamimi & Company, UAE </td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              <li>Aparajita Mishra, Regional Legal Counsel at Mott MacDonald, UAE</li>
              <li>  Hugo Lodge, Senior Counsel at Al Tamimi & Company, UAE </li>
              <li> Ahmad Saleh, Partner at Al Tamimi & Company, UAE </li>
              <li> Elias Ahonen, Blockchain Author at Cointelegraph, UAE </li>
              <li>  Raghvendra verma, Group Head- Legal at ISON Group, UAE </li>

            </ul>
          </td>
        </tr>
        <tr style={{ fontSize: "15px", background: "#00ACEE", color: "white" }}>
          <td>11:00 - 11:15</td>
          <td> Networking Break</td>
          </tr>
             <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>11:15 - 11:30</td>
          <td>Special Session 2 by 	Miral Soboh, Owner & Founder at SSA, Australia</td>
        </tr>

        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>11:30 - 12:15</td>
          <td>Session 2: 	International IP Litigation Strategies: Best Practice, Challenges & Solutions </td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Ram Tanneti, VP, Effectual Services, India</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              <li>Kaushal Joshi, Sr. Director Legal, IP & Product Portfolio, Kashiv BioSciences LLC</li>
              <li>  Ram Tanneti, VP, Effectual Services, India</li>
              </ul>
          </td>
        </tr>

        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>12:15 - 13:00</td>
          <td>Session 3: 	IP Enforcement And IP Infringement Or IP Transaction & Monetization</td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Ahmad Zaza, Partner at Al Tamimi & Company, UAE</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              <li> Ahmad Zaza, Partner at Al Tamimi & Company, UAE</li>
              <li>  Malek Hannouf, Head of Intellectual Property department - MEA at Louis Vuitton, UAE</li>
              <li>Sergey Medvedev, Partner at Gorodissky & Partners, Russia</li>
            </ul>
          </td>
        </tr>

          
        <tr style={{ fontSize: "15px", background: "#00ACEE", color: "white" }}>
          <td>13:00 - 14:00</td>
          <td> Networking Luncheon	</td>
        </tr>


        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>14:00 - 15:30</td>
          <td>Session 4 :	Enforcement Issues That Arise In Commercial Litigation And Arbitration</td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Yoav Salomon, Managing Partner at Avniel, Salomon & Co. Israel</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              <li> Sean Yates, Barrister and Arbitrator at Outer Temple Chambers (FCIArb), UAE</li>
              <li> Yoav Salomon, Managing Partner at Avniel, Salomon & Co. Israel</li>
              <li>Dr. Carsten Witzk, Partner at Ebner Stolz, Germany</li>
              <li> Matthew Page, Partner at Hadef & Partners, UAE</li>
              <li> Nooshin Rahmani, Senior Associate, Horizons&Co, UAE</li>


            </ul>
          </td>
        </tr>


        <tr style={{ fontSize: "15px", background: "#00ACEE", color: "white" }}>
          <td>15:30 - 16:00</td>
          <td> Networking Coffee Break		</td>
        </tr>


        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>16:00 - 17:30</td>
          <td>Session 5 :	Alternate Dispute Resolution Options- What Else Can We Do?</td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Nikita Vaidya, Senior Director at Ankura Consulting , UAE</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              <li>  Taron Simonyan, Founding Partner at ELL PARTNERSHIP Law Firm, Armenia</li>
              <li>  Farid Karachiwala, Partner at J. Sagar Associates, India</li>
              <li> Sean Michael Hugo, Partner at CBBG Group, UAE</li>
              <li>  Adrian Cole, Independent Arbitrator at Adrian Cole FZ LLE, UAE</li>
              <li> Niten Chauhan, Partner at Harold Benjamin Solicitors, UK</li>

            </ul>
          </td>
        </tr>


      </table>








      <table className="table" style={{ width: "45%", border: "1px solid black", }}>
        <tr style={{ fontSize: "15px", fontWeight: 700 }}> <td> &nbsp; </td> <td> Day 2</td></tr>


        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>9:00 - 10:30</td>
          <td> Session 6:  Corporate- In Or Out? Issues Related To Outsourcing Legal Services </td>
        </tr>
        <tr> <td>Moderator: </td>	<td> Olga Simachkova, Corporate Counsel at Caterpillar SARL, UAE</td></tr>
        <tr> <td>Panellist: </td>
          <td>
              <ul>
                
              <li>Muna Farid, Managing Director & Head of Legal at Hatch DWC-LLC, UAE</li>
              <li> Olga Simachkova, Corporate Counsel at Caterpillar SARL, UAE</li>
              <li> Saloni Tuteja, Regional Legal and Business Conduct Counsel,Gilead Sciences </li>
              <li>Noor Maki, Senior Legal Counsel at Ford Motor Company, UAE </li>
              <li> Yosr Hamza, Director at Gartner, UAE </li>

            </ul>
          </td>
        </tr>
        <tr style={{ fontSize: "15px", background: "#00ACEE", color: "white" }}>
          <td>10:30 - 10:45</td>
          <td> Networking Coffee Break	</td>
        </tr>

        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>10:45 - 11:45</td>
          <td>Session 7: 	Litigation Finance On The Rise: Demystifying Trends, Opportunities, And Best Practices.</td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Anurag Katarki, Litigation Specialist, Legal Advisor to Startups at Chambers of Anurag KatarkiChambers, India</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              <li> Dr. Laura Voda, Of Counsel at Fichte & Co Legal. UAE</li>
              <li> Anurag Katarki, Litigation Specialist, Legal Advisor to Startups at Chambers of Anurag KatarkiChambers, India</li>
              <li> Nick Braganza, Partner at HFW, UAE</li>


            </ul>
          </td>
        </tr>

        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>11:45 - 13:00</td>
          <td>Session 8: 	Successful Arbitration Policies & Strategies Pertaining Shareholders Disputes.</td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Aniket Raj, Advocate, Arbitration and Mediation Counsel, India</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              <li> Sadique Mohd, Partner at ALAIDAROUS Advocates & Legal Consultants, UAE</li>
              <li> Sarah Malik, CEO/International Disputes Counsel at SOL International Ltd, UAE</li>
              <li>  Robert Whitehead, Partner at Hamdan Al Shamsi Lawyers & Legal Consultants, UAE</li>
              <li> Rajdeep Choudhury, Partner at Archeus Law, India</li>


            </ul>
          </td>
        </tr>

        <tr style={{ fontSize: "15px", background: "#00ACEE", color: "white" }}>
          <td>13:00 - 14:00</td>
          <td> Networking Luncheon	</td>
        </tr>


        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>14:00 - 15:15</td>
          <td>Session 9: 	Compliance & Risk In The Digital Age: Cyber Security, Privacy & Data Protection</td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Tobias Speer, Group Head  Legal at Easa Saleh Al Gurg Group, UAE</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
              
              <li>Muna Farid, Managing Director & Head of Legal at Hatch DWC-LLC, UAE</li>
              <li>Shaima Al Sayed, Legal Counsel at GM, UAE </li>
              <li> Tobias Speer, Group Head  Legal at Easa Saleh Al Gurg Group, UAE</li>
              <li>  Karim El Helaly, General Counsel and Data Governance at Lnddo, UAE</li>


            </ul>
          </td>
        </tr>


        <tr style={{ fontSize: "15px", background: "#00ACEE", color: "white" }}>
          <td>15:15 - 15:30</td>
          <td> Networking Coffee Break		</td>
        </tr>


        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>15:30 - 17:00</td>
          <td>Session 10: 	The Link Between Contracts And Litigation</td>
        </tr>
        <tr> <td>Moderator: </td>	<td>Henzie Healley, Managing Partner at The Counsel Services (TCS), UAE</td></tr>
        <tr> <td>Panellist: </td>
          <td>
            <ul>
             
           
              <li>  Bijan Brahmbhatt, Senior Legal Counsel, Precision Drilling, UAE</li>
              <li>  Suren Gortsunyan, Founding and Managing Partner - Rybalkin, Gortsunyan, Dyakin & Partners, Russia</li>
                <li>  Henzie Healley, Managing Partner at The Counsel Services (TCS), UAE</li>
                <li>Firas Alchoufi, Managing Partner at Bin Sevan Advocates & Legal Consultants, UAE</li>

            </ul>
          </td>
        </tr>
        <tr style={{ fontSize: "15px", background: "black", color: "white" }}>
          <td>17:00</td>
          <td> Closing Note	</td>
        </tr>


      </table>
</div>
    </div>
  );
}