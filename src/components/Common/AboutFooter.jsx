import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";


const OtherFooter=()=> {
 
    return (
      <footer className="footer-area">
        <Box sx={{ px: "5%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent:"space-around"
            }}
          >
            <div className="col py-sm-3 py-lg-0">
              <div className="single-footer-widget " style={{textAlign:"center"}} >
                <h3>Contact Us</h3>
             

                <p className="location" style={{display:"flex",justifyContent:"center",paddingLeft:0}}>
                   <img src="images/location.png" alt="" style={{height:"20px",marginTop:"5px"}} />
                 <p style={{fontsize:"11px"}}>
                 Suite-427,425 Broadhollow Road, Melville | NY-11747 </p>
                </p>
                <Box className="location" sx={{ display: "flex",  justifyContent:{xs:"center",md:"flex-start",whiteSpace:"noWrap"}}}>
                  <img src="images/phone.png" alt="" style={{ height: "20px" }} />
                 <p style={{whiteSpace:"noWrap",fontsize:"11px"}}>
                  +91 97114 25481 , +1 716 941 7798
                </p>
                </Box>
              </div>
            </div>

            <div className="col py-sm-3 py-lg-0 ">
              <div className="single-footer-widget" style={{textAlign:"center"}}>
                <h3>Quick Links</h3>
                 <p> <div style={{ cursor: "pointer" }} onClick={()=>window.scrollTo({ top: 600, behavior: 'smooth'})} > <p> Who We Are </p></div></p>
               <p> <div style={{cursor:"pointer"}} onClick={()=>window.scrollTo({ top: 1300, behavior: 'smooth'})} > <p>Founders & Leadership</p> 
</div></p>
                <p style={{cursor:"pointer"}}  onClick={() => window.open("https://www.linkedin.com/in/global-legal-association-68a89b249", '_blank')}>LinkedIn</p>
                <Link to="/contact"><p >Contact</p></Link>
               

<div class="modal fade" id="ampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">              
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cancellation and Refund Policy</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{padding:"10px 30px",paddingTop:"20px",textAlign:"left"}}>
                        Registration Cancellation by Participant
                        <ul>
                          <li style={{ listStyle: "disc",marginTop:"10px" }}>	All payments made for event registrations are non-refundable.</li>
                          <li style={{ listStyle: "disc" }}>Only substitution/Change in name is provided at no extra charges. </li>
                          
                          </ul>
                          Event Cancellation by GLA
                          The Global Legal Association (GLA) reserves the right to cancel an event due to low enrollment or other circumstances which would make the event non-viable.
                        If GLA cancels or postpones an event, registrants will be offered a full credit which can be utilized in future/postponed GLA conferences.
                        We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
                      </div>
                        <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">              
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">GDPR Policy</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{padding:"10px 30px",paddingTop:"20px",textAlign:"left"}}>
      At “GLA” we are committed to protecting and respecting your privacy. We hold, as with most businesses, personal information about our customers and people who may be interested in our products and services.
      This privacy policy explains the type of information we process, how that processing may affect you and your rights.
      GLA will occasionally update this privacy policy. We will post a notice of any material changes on our website prior to implementing the changes, and, where appropriate, notify you using any of the contact details we hold for you for this purpose. We encourage you to periodically review our policies to be informed of how we use your information.

     <span style={{color:"black" , marginTop:"10px"}}>Our Data Protection Officers can be contacted at <b> faiz@globallegalassociation.org</b></span></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="termsConditions" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">              
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Terms and  Conditions</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{padding:"10px 30px",paddingTop:"20px",textAlign:"left"}}>
                        By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at <b> faiz@globallegalassociation.org </b>.
                        <div>
                        If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.</div>
                      Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Global Legal Association and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Global Legal Association.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>

                    <div className="col py-sm-3 py-lg-0">
              <div className="single-footer-widget " style={{textAlign:"center"}} >
                <h3>Our Policy</h3>
             

                <p type="button" data-toggle="modal" data-target="#exampleModalLong">GDPR Policy</p>
                 <p type="button" data-toggle="modal" data-target="#ampleModalLong">
              Cancellation & Refund  Policy
                </p>
                 <p type="button" data-toggle="modal" data-target="#termsConditions">
              Terms & Conditions
                </p>
                
                
              </div>
            </div>

          
            

        
          </Box>
          <div className="copyright-area" style={{ display: "flex" }}>
            <p>
              Copyright © 2023 Global Legal
              Association. All rights reserved.
            </p>
            <p className="ml-5">
            <b>  For further queries contact us at Faiz@globallegalassociation.org </b>
            </p>
          </div>
        </Box>
      </footer>
    );
}

export default OtherFooter;
