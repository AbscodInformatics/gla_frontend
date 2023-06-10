import React from 'react';
import { Link } from 'react-router-dom';
import RequestToSpeak from '../Common/RequestToSpeak';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import zIndex from '@material-ui/core/styles/zIndex';

class MainBanner extends React.Component {
    state = {
        isOpen: false,
        openSpeak: false,
        openAward: false,
        expanded:false
    };
    handleChange = (panel) => (event, isExpanded) => {
        this.setState({ expanded: isExpanded ? panel : false })
  };

    openModal = () => {
        this.setState({ isOpen: true })
    }
 updateSpeakData = () => {
    this.setState({ openSpeak: !this.state.openSpeak });
   };
    updateAward = () => {
      this.setState({ award: !this.state.award });
      // this.state.award = !this.state.award;
     this.setState({ openSponsor: !this.state.openSponsor });

  };
    render() {
        return (
            
            <React.Fragment>
        {this.state.openSpeak && <RequestToSpeak formName="Want to become a speaker ?" updateData={this.updateSpeakData} Type=" request to speak" />}
         {this.state.award &&
        <RequestToSpeak formName="Want to become a Member ?" updateData={this.updateAward} Type="Member"/>}

               <div className="main-banner item-bg5" style={{position:"relative"}} >
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content banner-content-center ">
                                    
                                   
                                    <h2 style={{color:"white",marginBottom:"40px"}} >Global Legal Association <b>2</b><b>0</b><b>2</b><b>3</b>
                                   
                                    - Amsterdam</h2>

                                    
                                  
                                   
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div style={{ borderRadius: "5px", background: "black", color: "white", padding: "5px 10px", opacity: 0.8, fontSize: "20px", margin: "5px 0px" }}><div style={{fontWeight:500,}}> Date : 4th, 5th & 6th September 2023</div>
                                    </div> */}
                    <div
                        style={{
                         background: "white",
                        borderRadius: "30px 30px 0px 0px",
                         width: "100%",
                        position: "absolute",
                            bottom: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        maxHeight:"180px"
                        }}>
                        <div style={{ display: "flex", gap: "25px", opacity: 0.8, fontSize: "16px", marginTop: "5px" }}>
                            <div style={{ fontWeight: 500, background: "black", color: "white", padding: "5px 10px", borderRadius: "5px" }}> <Link style={{ color: "white" }} to="/events-amsterdam-legal"> Date : 4ᵗʰ, 5ᵗʰ  September 2023 - GLA Litigation </Link></div>
                            
                            <div style={{ fontWeight: 500, background: "black", color: "white", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => window.open("https://parkplazaamsterdamairport.h-rez.com/index.htm?lbl=ggl-en-arpt-rsp&gclid=CjwKCAjwov6hBhBsEiwAvrvN6KoKnbu3Z8GzT1SFBnAjCdlOJCop1EKMaheejaq2vPZKu2XgBin5CxoCXI0QAvD_BwE")} >Venue- Park Plaza Amsterdam Airport</div>
                              <div style={{ fontWeight: 500, background: "black", color: "white", padding: "5px 10px", borderRadius: "5px" }}> <Link style={{ color: "white" }} to="/events-amsterdam-ip"> Date : 5ᵗʰ, 6ᵗʰ  September 2023 - GLA IP </Link></div>
                        </div>
                        <div style={{ display:"flex",
                              gap: "10px",
                            justifyContent: "center",
                        }}>
                            
                          <div  style={{margin:"20px 0px ", zIndex:89 ,}}>
                                {/* <Link to="/sponsors" className="btn btn-primary" >Sponsorship</Link> */}
                                 <Accordion expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')} style={{background:"#FF2D55" }}>
                                  <AccordionSummary
                                   expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                                   aria-controls="panel1bh-content"
                                   id="panel1bh-header"
                                 >
                                <Typography sx={{ width: '33%', flexShrink: 0,color:"white"}}>
                                  Sponsorship
                                 </Typography>
                               </AccordionSummary>
                         <AccordionDetails style={{background:"white"}}>
                        <Typography >
                         <div className="button-box" style={{margin:"10px 0px "}}  onClick={() => this.updateSpeakData()} >
                                        <Link to="/pricing-legal" className="btn btn-primary" >GLA sponsorship  </Link>
                                            </div> 
                                            <div className="button-box" style={{margin:"10px 0px "}}  onClick={() => this.updateSpeakData()} >
                                        <Link to="/pricing-ip" className="btn btn-primary" >GLA IP sponsorship </Link>
                                    </div> 
                             </Typography>
                             </AccordionDetails>
                              </Accordion>
                  
                           </div>
                         <div className="button-box" style={{margin:"20px 0px "}}  onClick={() => this.updateSpeakData()} >
                                        <Link to="#" className="btn btn-primary" >Request to speak </Link>
                                    </div> 
                        <div className="button-box" style={{margin:"20px 0px "}} onClick={() => this.updateAward()}>
                                        <Link to="#" className="btn btn-primary" >Members </Link>
                            </div>
                    </div>
                    </div> 
                    <div style={{ fontSize: "25px", color: "black", fontWeight: "bold", display: "flex", justifyContent: "center", width: "100%", position: "absolute", bottom: "-25px", }}>In association  with &nbsp;<span onClick={() => window.open("https://www.effectualservices.com/")} style={{ cursor: "pointer", color: "#1BCFF3" }}>      <u> Effectual Services </u></span></div>
                    

                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;