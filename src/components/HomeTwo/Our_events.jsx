import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LaxDiv from "../Shared/LaxDiv";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';



function Our_events() {
  return (
    <div style={{backgroundColor: "#F6F4F7",padding: "20px 30px"}}>
   <div className="container">
          <div className="section-title">
            <span>Listen to our Event Success Stories</span>
            <h2>Our Events</h2>
            <div className="bar"></div>
            {/* <LaxDiv text="Speakers" dataPreset="driftRight" /> */}
            
          </div>
      </div>

      <Box sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg:"row"
        },
        gap:"10px"
       }}>
          <Link to="/events-amsterdam-legal">
        <div style={{  maxHeight:"500px",borderRadius: "20px" }}>
        <div style={{ background: "black",borderRadius: "20px 20px 0px 0px", color: "white", display:"flex",justifyContent:"space-between", }}>
          <span style={{padding:"5px 15px",fontSize:"17px"}}>GLA IIⁿᵈ Annual Meet 2023 - Amsterdam</span>
          <span style={{background:"#E90F1C",padding:"5px 15px",borderRadius: "0px 20px 0px 0px",fontSize:"12px"}}> Register Now</span>

          </div>
            <div style={{ position: "relative" }} >
          <img src="/images/park_plaza.avif" alt="" style={{ width: "100%",height:"300px" }} />
          <div style={{ position: "absolute", bottom: 0, background: "black", width: "100%", color: "white", padding: "10px 3px", fontSize: "16px"}}>
            
              <span style={{ fontSize: "14px", }}>Meet the Experts in Legal domain. Get the best in quality knowledge sharing at GLA Amsterdam</span>
          </div>
          </div>

        
          </div>
            </Link>
         <Link to="/events-amsterdam-ip">
           <div style={{ maxHeight: "500px",  borderRadius: "20px" }}>
          <div style={{ background: "black", borderRadius: "20px 20px 0px 0px", color: "white", display: "flex", justifyContent: "space-between", }}>
          <span style={{padding:"5px 15px",fontSize:"17px"}}>GLA IIIʳᵈ Conference-IP 2023 - Amsterdam</span>
          <span style={{background:"#E90F1C",padding:"5px 15px",borderRadius: "0px 20px 0px 0px",fontSize:"12px"}}> Register Now</span>

        </div>
        <div style={{position:"relative"}} >
          <img src="/images/amsterdam_event3.avif" alt="" style={{ width: "100%",height:"300px" }} />
          <div style={{ position: "absolute", bottom: 0, background: "black", width: "100%",  color: "white", padding: "10px 3px", fontSize: "17px" }}>
           
              <span style={{ fontSize: "14px" }}>Meet the Experts in IP domain. Get the best in quality knowledge sharing at GLA Amsterdam</span>
          </div>
        </div>
        
            </div>
          </Link>
      </Box>

      <Box sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg:"row"
        },
        gap: "10px",
        marginTop:"3%"
      }}>
        <Box sx={{
          maxHeight: "500px", borderRadius: "20px", background: "green", width: {
            xs: "100%",
            lg:"48%"
          }
        }}>
          <Link to="/events-dubai-legal" style={{width:"100%"}}>
        <div style={{ background: "black",borderRadius: "20px 20px 0px 0px", color: "white", display:"flex",justifyContent:"space-between", }}>
          <span style={{padding:"5px 15px",fontSize:"17px"}}>GLA Ⅳᵗʰ Annual Meet 2024 - Dubai</span>
          <span style={{background:"#E90F1C",padding:"5px 15px",borderRadius: "0px 20px 0px 0px",fontSize:"12px"}}> Register Now</span>

            </div>
        <div style={{position:"relative"}} >
          <img src="/images/home-events-1.jpg" alt="" style={{ width: "100%",height:"300px" }} />
          <div style={{ position: "absolute", bottom: 0, background: "black", width: "100%", color: "white", padding: "10px 3px", fontSize: "16px"}}>
            
              <span style={{ fontSize: "14px", }}>Meet the Experts in Legal domain. Get the best in quality knowledge sharing at GLA Dubai</span>
          </div>
        </div>
            </Link>
        
          </Box>
        <Box sx={{
          maxHeight: "500px", borderRadius: "20px", width: {
            xs: "100%",
            lg:"52%"
          }
        }}>
          <Link to="/events-dubai-ip" style={{width:"100%"}}>
                    <div style={{ background: "black", borderRadius: "20px 20px 0px 0px", color: "white", display: "flex", justifyContent: "space-between", }}>
          <span style={{padding:"5px 15px",fontSize:"17px"}}> GLA Vᵗʰ Conference-IP 2024  - Dubai</span>
          <span style={{background:"#E90F1C",padding:"5px 15px",borderRadius: "0px 20px 0px 0px",fontSize:"12px"}}> Register Now</span>

        </div>
        <div style={{position:"relative"}} >
          <img src="/images/dubai.jpg"alt="" style={{ width: "100%",height:"300px" }} />
          <div style={{ position: "absolute", bottom: 0, background: "black", width: "100%", color: "white", padding: "10px 3px", fontSize: "17px" }}>
             
                  <span style={{ fontSize: "14px" }}>Meet the Experts in IP domain. Get the best in quality knowledge sharing at GLA
                  Dubai</span>
          </div>
            </div>
          </Link>
        
            </Box>

      </Box>

      
  
      <div style={{  maxHeight:"500px",borderRadius: "20px",marginTop:"40px" }}>
        <div style={{ background: "black",borderRadius: "20px 20px 0px 0px", color: "white", display:"flex",justifyContent:"space-between", }}>
          <span style={{ padding: "5px 15px", fontSize: "23px" }}> Past Events</span>
          <span style={{ background: "#E90F1C", padding: "10px 15px", borderRadius: "0px 20px 0px 0px", fontSize: "17px", width: "130px" }}>
      <Link to="/past-events" style={{width:"100%",color:"white"}}>
                        Gallery
              &nbsp;  <img src="/images/right_arrow.png" alt="" style={{ width: "15px" }} />
          </Link>
          </span>
         

        </div>
        <div style={{position:"relative"}} >
          {/* <img src="/images/past_events.jpg" alt="" style={{ width: "100%",zIndex:1 }} />
           */}
      <MDBCarousel showIndicators showControls fade pause={false} >
            <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='/images/home_cor1.avif'
        alt='...'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='/images/home_cor2.avif'
        alt='...'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='/images/home_cor3.avif'
        alt='...'
      >
      
          </MDBCarouselItem>

        <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='/images/home_cor4.avif'
        alt='...'
      >
     
          </MDBCarouselItem>

             <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='/images/home_cor5.avif'
        alt='...'
      >
        
          </MDBCarouselItem>
          
           
          </MDBCarousel>
        
          <div style={{ position: "absolute", bottom: 0, background: "black", width: "100%", opacity: 0.8, color: "white", padding: "20px", fontSize: "20px",zIndex:989 }}>
            <div style={{opacity:1,zIndex:2}}>
              <span>Global Legal Association 2023 - Dubai</span>
              <br />
              <span style={{ fontSize: "14px", }}>Sponsors play a crucial role in making this event a success. Their support reflects a strong commitment to advancing IPR awareness.</span>
              </div>
          </div>
        </div>
        
        </div>
        
   </div>
    );
}


export default Our_events;
