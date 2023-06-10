import React, { useState } from "react";
// import { Link } from "react-router-dom";
import lax from "lax.js";
import LaxDiv from "../../Shared/LaxDiv";
import { Box } from "@material-ui/core";
import Button from '@mui/material/Button';


const PastSpeakers =({cardData})=> {
  const [count, setCount] = useState(8);

  
 
  
  
  const cards = (name,desg,company,country,image,linkedIn) => {
    return (
     <div
        style={{
          color: "white",
          flexBasis: "22%",
          height: "300px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
                minWidth: "200px",
          borderRadius: "20px", 
            background:"skyBlue",
          margin:"10px 0px",
          
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "130px",
            height: "40%",
            borderRadius: "100%",
            zIndex: 1,
          }}
        >
          <img src={image} alt="" style={{ width: "100%",height:"100%",borderRadius:"100%",border:"1px solid white" }} />
        </div>
        <div
          style={{
            background: "black",
            height: "70%",
            width: "100%",
            position: "absolute",
            zIndex: 0,
            bottom: 0,
            borderRadius: "20px",
            color:"white"
          }}
        >
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  margin: "40px 0px 10px 10px ",
                }}>
            <span style={{ textAlign:"center"}}>
              <b>{name}</b>
            </span>
            <Box sx={{
              fontSize: {
                xs: "10px",
                sm: "12px",
                md: "12px",
                lg:"14px"

            }}}>{desg}</Box>
            <span style={{ fontSize: "13px" }}>{ company}</span>
            <span style={{ fontSize: "13px" }}>{country}</span>
            <span
              onClick={() => window.open(linkedIn)}
              style=
              {{ textAlign: "center", color: "skyBlue", cursor: "pointer" }}>
              <b> View Profile</b>
            </span>
                </div> 
        </div>
      </div>
  )
}

    return (
      <section className="speakers-area ptb-120 ">
        <div className="container">
          <div className="section-title">
            {/* <span>Listen to the Past Event Speakers</span> */}
            <h2>Past Speakers</h2>
            <div className="bar"></div>
            <LaxDiv text="Speakers" dataPreset="driftRight" />
            
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
      <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-between",width:"97%" }}
          > 
            {
              cardData.slice(0,count).map((item,key) => {
                return cards(item.name,item.desg,item.company,item.country,item.image,item.linkedIn)
              })
            }
  
          </div>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between", padding:"20px"}}>
          {count < cardData.length && <Button variant="contained"  onClick={() => setCount(cardData.length)}>Show More</Button>}
          {count === cardData.length && <Button variant="outlined" onClick={() => {
            setCount(8)
          window.scrollTo({ top: 800, behavior: 'smooth', });}}>Show Less</Button>}
          {console.log(count, cardData.length
            
            )}
          </div>

    
      </section>
    );
}

export default PastSpeakers;
