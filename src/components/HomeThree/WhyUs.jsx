import React from "react";

class WhyUs extends React.Component {
  render() {
    return (
      <section className="why-choose-us-two" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
       
        <div style={{ width: "90%", padding: "20px 10px ", margin: "20px 10px", display: "flex", alignItems: "center", gap: "5%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px" }}>
          <div style={{ marginLeft: "5%", textAlign: "center", fontSize: "40px", padding: "10px",fontWeight:700 }}>
            <span >VISION</span>
            <hr />
            </div>
          <div className="text-justify"  style={{margin:"0px 20px"}}>The main vision and purpose of GLA is to provide the best and biggest platform for legal professionals from all over the globe to engage, promote, connect and get the recognition and add value to one another business.</div>
        </div>
        <div style={{ width: "90%", padding: "20px 10px ", margin: "20px 10px", display: "flex", alignItems: "center", gap: "5%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px" }}>
          <div className="text-justify" style={{ margin: "0px 20px" }}>To bring together the legal professionals and international legal communities from every continent with the aim of creating joint business opportunities and long-term cooperation.</div>
          <div  style={{marginRight:"5%",textAlign:"center",fontSize:"40px",padding:"10px",fontWeight:700}}>
            <span>MISSION</span>
            <hr />
          </div>
        </div>
      </section>
    );
  }
}

export default WhyUs;
