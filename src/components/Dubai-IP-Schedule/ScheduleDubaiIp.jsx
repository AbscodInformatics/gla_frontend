import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const  ScheduleDubaiIp =()=> {
  
    return (
   <section className="schedule-area bg-image pb-120 " style={{paddingTop:"40px"}}>
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
          

           <div style={{ background: "white", color: "black", width: "100%", borderRadius: "20px", padding: "15px",fontSize:"20px" ,boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
           <b> Theme :-  “Intellectual Property Rights (IPR) In The Middle East And Africa Is Complex And Multifaceted”</b>
          </div>
          <div className="row">
            <div className="col-lg-12">
               <div className="tab" style={{marginTop:"3%"}}>
                <ul className="tabs active">
                  <div style={{ width: "100%", background: "#FF2D53", color: "white", padding: "10px 0px", fontSize: "20px" }}>
                 <b>  February 12, 2024  </b></div>             

                 
                </ul>

                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    <ul className="accordion">
                     

                      <li className="accordion-item">
                         
                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                              Session 1 : Intellectual Property Rights Enforcement In Gulf And Around The World
          
                            </p>

                           
                          </div>

                    
                      </li>

                      <li className="accordion-item">
                          

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                            Session 2 :  IP As An Important Value Driver For Start-up Strategies In Established Companies
          
                            </p>

                          </div>

                     
                      </li>

                      <li className="accordion-item">
                         

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                          Session 3 : How Machine Learning & Automation Will Keep Track Of Competitors In A RevolvingIP & Patent Landscape

                            </p>

                           
                          </div>

                      
                      </li>

                      <li className="accordion-item">
                        

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                              Session 4 : The Protection Of Trade Secrets: A Key Element To Increase The Value Of IP Right

                            </p>

                           
                          </div>

                        
                      </li>

                          <li className="accordion-item">
                         

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                         Session 5 : Can Chat GPT Be Used For Patent Search Work?
                            </p>

                           
                          </div>

                      
                      </li>
                   

                    </ul>
                  </div>
                
                </div>
              </div>

                <div className="tab" style={{marginTop:"3%"}}>
                <ul className="tabs active">
                  <div style={{ width: "100%", background: "#09A9F7", color: "white", padding: "10px 0px", fontSize: "20px" }}>
                 <b> February 13, 2024 </b></div>             

                 
                </ul>

                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    <ul className="accordion">
                      <li className="accordion-item">
                          

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                            Session 6 : Diversity And Inclusion In The Intellectual Property Rights (IPR) Field, Do They Play A Critical Role In Promoting Innovation, Creativity, And Economic Growth In EMEA Region

                            </p>

                            
                          </div>
                      </li>

                      <li className="accordion-item">
                         
                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                             Session 7 : Emerging Technologies: Finally, Emerging Technologies Such As Artificial Intelligence, Blockchain, And Biotech Are Posing New Challenges For IPR In The Middle East And Africa

                            </p>

                           
                          </div>

                    
                      </li>

                      <li className="accordion-item">
                          

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                            Session 8 : No Headcount? No Problem. Optimizing Your IP Efforts In A World Of Reduced Resources
                            </p>

                          </div>

                     
                      </li>

                      <li className="accordion-item">
                         

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                            Session 9 : Strong IPR Protections Are Increasingly Important For International Trade And Investment. Many Companies And Investors May Be Reluctant To Do Business In Regions Where IPR Protections Are Weak Or Inconsistent, Limiting Economic Opportunities For These Regions.
                            </p>

                           
                          </div>

                      
                      </li>

                      <li className="accordion-item">
                        

                          <div className="schedule-info">
                            <p style={{fontWeight:700}}>
                           Session 10 : How To Control IP Costs And Obtain Transparency/LegalTech & Online Brand Protection – IT Vs Legal

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
}

export default ScheduleDubaiIp;
