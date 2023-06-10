import React from 'react'
// import { Box } from '@material-ui/core';
import lax from "lax.js";

import LaxDiv from "../Shared/LaxDiv";
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RequestToSpeak from '../Common/RequestToSpeak';



const  Leadership =()=> {
const [openAdvisory,setOpenAdvisory]=React.useState(false);

    return (
      
        <div class="2xl:container 2xl:mx-auto  lg:px-20  md:px-6  px-10" >
               {openAdvisory && <RequestToSpeak formName="Want to become a member ?" updateData={()=>setOpenAdvisory(!openAdvisory)} Type=" Member" />}
           
          <div className="container p-0" style={{display:"flex",justifyContent:"space-between"}} >
            <div className="section-title mt-10">
              <span style={{fontSize:"40px",fontWeight:700,marginTop:"20px"}}>Leadership Team</span>
              <div className="bar"></div>
              {/* <LaxDiv text="Leaders" dataPreset="drifLeft" /> */}
            
          </div>
         <div className="button-box" style={{margin:"30px 0px "}}>
         <div onClick={()=>setOpenAdvisory(!openAdvisory)} className="btn btn-primary" >Join as advisory team</div>
               </div>
          </div>
      
          <section className="why-choose-us-two" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        
        <div style={{ width: "90%", padding: "20px 10px ", margin: "20px 10px", display: "flex", alignItems: "center", gap: "5%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px",background:" linear-gradient(281.04deg, #1C90C7 -45.05%, #FFFFFF 109.17%)" }}>
          <div style={{ textAlign: "center", fontSize: "40px",width:"100%",marginLeft:"20px" }}>
              <img src="images/amitGoel.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"20px"}} />
            </div>
          <div className="text-justify"  style={{margin:"0px 20px", fontWeight:700,}}>Amit has over 16 years of experience in research and development and has been handling patent research services for technology companies and IP law firms. He works with leading Indian and global clients and has managed various project involving patent preparation and prosecution, patent licensing, patent litigation, and patent portfolio management and analysis.
          He is a doctorate with specialization in mobile communication and has authored more than thirty research publications in International/National Journals/Conferences. In addition, Amit has been trained in patent laws (US, EP and India) from organizations like Microsoft, WIPO, IP Central, Lee & Hayes and US and EP Attorneys.</div>
          </div>

            <div style={{ width: "90%", padding: "20px 10px ", margin: "20px 10px", display: "flex", alignItems: "center", gap: "5%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px",background:" linear-gradient(281.04deg, rgba(233, 15, 28, 0.44) -45.05%, #FFFFFF 109.17%)" }}>
        
          <div className="text-justify"  style={{margin:"0px 20px", fontWeight:700,}}>Meetika has an overall experience of 18+ years in which she has worked with 500 Fortune companies, assisting US Patent Attorneys and agents of IT Major in patent prosecution and infringement analysis. She has been Team Lead and Senior Patent Analyst for some major projects. She has extensive experience in Client Communication and Relationship Development, Project and People management, Infringement and Invalidity Analysis, Quality Check of deliverables, Project Skills Training, mentoring fresh recruits, Staffing & Recruitment. She has also received Expert Certification on Filing and Obtaining Trade mark in India, 2014 and World Intellectual Property Organization (WIPO), Geneva Certification Course on Intellectual Property Rights in 2006.
            </div>
              <div style={{ textAlign: "center", fontSize: "40px",width:"100%" }}>
              <img src="images/meetika.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"20px"}} />
            </div>
          </div>
          

            </section>
        
        
        </div>
    )
}

export default Leadership