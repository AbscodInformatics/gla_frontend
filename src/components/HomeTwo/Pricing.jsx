import React,{useCallback} from 'react';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';
import { Box } from '@material-ui/core';
import SpeakersForm from "../Common/SpeakersForm";
import { useState } from 'react';
import GroupPassForm from '../Common/GroupPassForm';
import PreloaderPayment from '../Shared/PreloaderPayment';
import { useEffect } from 'react';
import CoctailForm from '../Common/CoctailForm';


    


const Pricing = ({conf}) => {
    const [paid, setPaid] = useState(false)
    const payconfirmation = () => {
        
        return (
            paid &&
            
            <Box sx={{display:"flex", background: "transparent", width: "100%",height:{xs:"26%",sm:"37%",md:"40%",lg:"40%",xl:"45%"}, position: "fixed", zIndex: 1000,justifyContent:"center" ,top:"30%"}}>
                <div style={{textAlign:"center",background:"white",padding:"20px 10px ",width:"50%", boxShadow:"rgba(0, 0, 0, 0.8) 0px 5px 15px"}}>
                        <Box sx={{ fontSize: { xs: "16px", sm: "20px", md: "25px ", lg: "28px" },fontWeight:600 }}>  Your  payment has been successful</Box>
                        <div style={{display:"flex",justifyContent:"center",marginTop:"6%"}}><img src="images/congratulations.jpg" /></div></div>
                    </Box>

            )
    }
    
    const [isSubmit, setIsSubmit] = useState(false);
   const [loading,setLoading]=useState(false)
    const [openDelegate, setOpenDelegate] = useState(false);
    const [openGroup, setOpenGroup] = useState(false);
    const [openSpeaker, setOpenSpeaker] = useState(false)
    const [openExhibition, setOpenExhibition] = useState(false);
    const [openCoctail, setOpenCoctail] = useState(false);


    const [delegateAmount, setDelegateAmount] = useState(10)
    const [speakerAmount, setSpeakerAmount] = useState(10)
    const [coctailAmount, setCocktailAmount] = useState(10)


    useEffect(()=>setIsSubmit(false),[isSubmit])
    

//  const   updateSpeakData = () => {
//     setOpenSpeak(!openSpeak)
//      };
    const chooseValues = (formValues) => {
        let delegatePay;
        let speakerPay;
        let cocktailPay;
    
    if (formValues.passes==1) {
        delegatePay = "799";
        speakerPay = "599";
        cocktailPay="200"
          }
         else if (formValues.passes==2) {
        delegatePay = "1199"
        speakerPay = "1150"
        cocktailPay="400"
        
        
          }
          else if (formValues.passes == 3) {
        delegatePay = "1399"
        cocktailPay="600"
        
          }
          else {
              delegatePay = (0.9 * (formValues.passes * 799))
        delegatePay = delegatePay.toString();
        speakerPay = (0.9 * (formValues.passes * 599))
        speakerPay = speakerPay.toString();
        cocktailPay = (formValues.passes * 200)
        cocktailPay=cocktailPay.toString()
              
    }
        setDelegateAmount(delegatePay)
        setSpeakerAmount(speakerPay)
        setCocktailAmount(cocktailPay)
 
    };
    
    return (
            loading?<PreloaderPayment/>:
            <section className="pricing-are ptb-120 bg-image">
                {payconfirmation()}
                <div className="container">
                    <div className="section-title">
                        <span>Pricing Plan</span>
                        <h2>Get Your <b>Tickets</b></h2>
                        
                        <LaxDiv text="Pricing" dataPreset="driftLeft" />

                        <div className="bar"></div>
                    </div>

                            {openDelegate && <SpeakersForm isSubmit={isSubmit} setIsSubmit={setIsSubmit} chooseValues={chooseValues} formName="Hurry up!  Buy Tickets Now" currency="USD" amount={delegateAmount} Type="Delegate Pass for" updateData={() => setOpenDelegate(!openDelegate)} loading={loading} setLoading={setLoading} setPaid={setPaid} />}

                            {openGroup && <GroupPassForm  isSubmit={isSubmit} setIsSubmit={setIsSubmit} chooseValues={chooseValues} defaultPasses="3" formName="Hurry up!  Buy Tickets Now" currency="USD" Type="Group Pass" amount="1799"  disabled={false} updateData={() => setOpenGroup(!openGroup)} loading={loading} setLoading={setLoading} setPaid={setPaid}/>}

                    {openExhibition && <GroupPassForm isSubmit={isSubmit} setIsSubmit={setIsSubmit} defaultPasses="2" chooseValues={chooseValues} formName="Hurry up!  Buy Tickets Now" currency="USD" checked={true} disabled={true} Type=" Exhibition Pass" amount="2000" updateData={() => setOpenExhibition(!openExhibition)} loading={loading} setLoading={setLoading} setPaid={setPaid} />}
                    {openSpeaker && <SpeakersForm isSubmit={isSubmit} setIsSubmit={setIsSubmit} chooseValues={chooseValues} formName="Hurry up!  Buy Tickets Now" currency="USD" amount={speakerAmount} Type="Speaker Pass" updateData={() => setOpenSpeaker(!openSpeaker)} loading={loading} setLoading={setLoading} setPaid={setPaid} />}
                    {openCoctail && <CoctailForm isSubmit={isSubmit} setIsSubmit={setIsSubmit} chooseValues={chooseValues} formName="Hurry up!  Buy Tickets Now" currency="USD" amount={coctailAmount} Type="Cocktail Pass" updateData={() => setOpenCoctail(!openCoctail)} loading={loading} setLoading={setLoading} setPaid={setPaid} />}
                    

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="pricing-plan">
                                {/* <h3>BASIC PASS <span><sup>$</sup>9999</span></h3> */}
                                <h3> DELEGATE PASS
                                 
                                    <span style={{color:"gray",fontSize:"26px"}}> ̶$̶1̶5̶0̶0̶   </span>  <Box sx={{ marginTop: {xs:"-120px",lg:"-130px"}, fontSize: {xs:"30px",lg:"35px"}, color: "#fe2d55" }}>$799</Box></h3>

                                    
                                <ul className="pricing-content">
                                   
                                    <li> <b>over 300+ Legal Professionals</b></li>
                                    <li> Pre Conference Meet – High Tea </li>
                                    <li>Access to Expo Area</li>
                                    <li>Lunch & Coffee each day</li>
                                    <li>Access to 2 Day Expert-led sessions</li>
                                    <li>Access to Networking Games and Events</li>
                                    <li>Delegate List Post Conference</li>
                                </ul>
                                
                                <button  onClick={()=>setOpenDelegate(!openDelegate)} className="btn btn-primary">Buy Ticket Now</button>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6 mb-3">
                            <div className="pricing-plan">
                                
                                <h3>SPEAKER PASS
                                    
                                  
                                    <span>$599</span> </h3>
                                 
                                    
                                <ul className="pricing-content">
                                      
                                    <li> <b>over 300+ Legal Professionals</b></li>
                                    
                                     <li>Access to all sessions and Expo area</li>
                                    <li> Networking Breaks and Lunch</li>
                                    <li>Speaker Banner posting and Profile Listing over Website </li>
                                    <li>A4- Advert in conference Magazine</li>
                                    <li> Social Media Announcement Post for Speakers</li>
                                    <li>Delegate List Post Conference with Contact Details</li>

                                </ul>
                                
                                <button onClick={() => setOpenSpeaker(!openSpeaker)} className="btn btn-primary">Buy Ticket Now</button>
                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="pricing-plan">
                                <h3>GROUP PASS   <span style={{color:"gray",fontSize:"26px"}}>$̶2̶5̶0̶0̶</span>  <Box sx={{ marginTop: {xs:"-120px",lg:"-130px"}, fontSize: {xs:"30px",lg:"35px"}, color: "#8dc63f" }}>$1799</Box></h3>
                                    
                                <ul className="pricing-content">
                                     
                                    <li> <b>over 300+ Legal Professionals</b></li>
                                    <li>Group pass includes Three Delegate Passes</li>
                                    <li>engagement with multiple legal firms </li>
                                    <li>3 Delegate Passes</li>
                                    <li>Organization Logo on all marketing materials</li>
                                    <li>Happy Hours, Networking Jams & Dinner</li>
                                    <li>people around the globe</li>
                                </ul>
                                
                                <button onClick={() => setOpenGroup(!openGroup)} className="btn btn-primary">Buy Ticket Now</button>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="pricing-plan">
                                
                                <h3>EXHIBITION BOOTH
                                    {/* <p style={{
                                        position: "absolute", right: "5px", marginBottom: "0px", color: "#8dc63f", background: "white", top: "12%",
                                        padding:"2px 4px",marginTpadding: "5px", borderRadius: "5px", fontSize: "13px",
                                    }}>be a early bird</p> */}
                                    <span style={{color:"gray",fontSize:"26px"}}> ̶$̶5̶0̶0̶0̶</span> <Box sx={{ marginTop: {xs:"-115px",lg:"-130px"}, fontSize: {xs:"30px",lg:"35px"}, color: "#fe2d55" }}>$2799</Box></h3>
                                    
                                <ul className="pricing-content">
                                      
                                    <li> <b>over 300+ Legal Professionals</b></li>
                                    
                                     <li>2m x 2m Exhibition Space</li>
                                    <li>A descriptive listing on the event website with a Logo</li>
                                    <li>A4-Advert in conference Magazine </li>
                                    <li>Two complimentary exhibitor registrations </li>
                                    <li>Identification sign at your booth</li>
                                    <li>One six feet skirted table Two chairs & Wastebasket</li>

                                </ul>
                                
                                <button onClick={() => setOpenExhibition(!openExhibition)} className="btn btn-primary">Buy Ticket Now</button>
                               
                            </div>
                        </div>

                          <div className="col-lg-4 col-md-6 mb-3">
                            <div className="pricing-plan">
                                
                                <h3>DINNER & COCKTAIL
                                    {/* <p style={{
                                        position: "absolute", right: "5px", marginBottom: "0px", color: "#8dc63f", background: "white", top: "12%",
                                        padding:"2px 4px",marginTpadding: "5px", borderRadius: "5px", fontSize: "13px",
                                    }}>be a early bird</p> */}
                                    <span >$200</span></h3>
                                    
                                <ul className="pricing-content">
                                      
                                    <li> <b>over 300+ Legal Professionals</b></li>
                                    
                                     <li>Networking Dinner</li>
                                    <li>Networking Cocktails</li>
                                   <li>Enjoy food with the best legal officials </li>
                                    <li>Good food with great ambience</li>
                                     <li>Best food at your convenience</li>

                                </ul>
                                
                                <button onClick={() => setOpenCoctail(!openCoctail)} className="btn btn-primary">Buy Ticket Now</button>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
}
 
export default Pricing;