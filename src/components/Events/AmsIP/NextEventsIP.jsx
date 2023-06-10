import React from 'react'
import { Box } from "@material-ui/core";
import { Link } from 'react-router-dom';


const NextEventsIP = () => {
   
  return (
    <>
       <div className="container " style={{marginTop:"4%"}}>
          <div className="section-title" style={{marginBottom:"30px"}}>
            <h2>Next Events</h2>
            <div className="bar"></div>
            
          </div>
        </div>
        <Box sx={{
        display: "flex",
        // flexDirection: {
        //   xs: "column",
        //   lg:"row"
        // },
        justifyContent:"space-between",
          padding: "30px",
        gap:"10px"
      }}>
          <div style={{  maxHeight:"500px"}}>
       
        <div >
          <img src="/images/next-event-dubai-ip.jpg" alt="" style={{ width: "100%",height:"300px" ,borderRadius: "20px 20px 0px 0px "}} />
          <div style={{ background: "white", width: "100%", padding: "0px 10px", fontSize: "16px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div style={{opacity:1,fontSize: "20px",padding:"10px"}}>
              <span> <b>Global Legal Association  Conference 2024 - Dubai </b></span>
              <br />
              <span style={{ fontSize: "14px", }}>Meet the Experts in Legal domain. Get the best in quality knowledge sharing at GLA Amsterdam</span>
              </div>
          </div>
        </div>
        {/* next-event-dubai-legal */}
          </div>
          <div style={{  maxHeight:"500px"}}>
       
        <div >
          <img src="/images/next-event-dubai-legal.jpeg" alt="" style={{ width: "100%",height:"300px",borderRadius: "20px 20px 0px 0px "}} />
          <div style={{ background: "white", width: "100%", padding: "0px 10px", fontSize: "16px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div style={{opacity:1,fontSize: "20px",padding:"10px"}}>
              <span> <b>Global Legal Association IP Conference 2024 - Dubai </b></span>
              <br />
              <span style={{ fontSize: "14px", }}>Meet the Experts in Legal domain. Get the best in quality knowledge sharing at GLA Amsterdam</span>
              </div>
          </div>
        </div>
        {/* next-event-dubai-legal */}
        </div>
        

      </Box>
      </>
  )
}

export default NextEventsIP