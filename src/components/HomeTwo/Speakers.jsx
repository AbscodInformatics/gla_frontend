import React from "react";
// import { Link } from "react-router-dom";
import lax from "lax.js";
import LaxDiv from "../Shared/LaxDiv";

class Speakers extends React.Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function (x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }

  render() {
    return (
      <section className="speakers-area ptb-120 pb-10">
        <div className="container">
          <div className="section-title">
            <span>Listen to the Event Speakers</span>
            <h2>Who's Speaking</h2>
            <div className="bar"></div>
            <LaxDiv text="Speakers" dataPreset="driftRight" />
            
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker56.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Robert Whitehead
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Partner at Hamdan Al Shamsi Lawyers & Legal Consultants</span>
                <p>UAE</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2 " onClick={()=>window.open("https://www.linkedin.com/in/robertwhitehead/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
            
          </div>
          <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker55.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Muna Farid
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Managing Director & Head of Legal at Hatch DWC-LLC</span>
                <p>UAE</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2 " onClick={()=>window.open(" https://www.linkedin.com/in/muna-farid/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
            
          </div>
                 <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker54.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Matthew Page
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Partner at Hadef & Partners</span>
                <p>UAE</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2 " onClick={()=>window.open("https://www.linkedin.com/in/matthew-page-61016436/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
            
          </div>
           <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker53.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Miral Soboh
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Owner & Founder at SSA</span>
                <p>Australia</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2 " onClick={()=>window.open(" https://www.linkedin.com/in/miral-s-60a64bb6/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
            
          </div>
             <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker52.jpg"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Firas Alchoufi
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Managing Partner at Bin Sevan Advocates & Legal Consultants</span>
                <p>United Arab Emirates </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2 " onClick={()=>window.open("https://www.linkedin.com/in/firasalchoufi/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
            
          </div>
               <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker51.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Rajdeep Choudhury
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Partner at Archeus Law</span>
                <p>New Delhi, India </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2 " onClick={()=>window.open(" https://www.linkedin.com/in/rajdeep-choudhury/?originalSubdomain=in")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
            
          </div>
             <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker50.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  Anurag Katarki
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Lawyer at Chambers of Anurag Katarki</span>
                <p>Maharashtra, India </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2 " onClick={()=>window.open("https://www.linkedin.com/in/anurag-katarki-9bb3691a1/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
            
          </div>
            <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker49.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Hugo Lodge
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Senior Counsel at Al Tamimi & Company</span>
                <p>United Kingdom </p>
                
              </div>
              {/* <ul>
                
                <li style={{marginTop:"10px"}}> */}
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/hugo-daniel-lodge/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                  <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                {/* </li>

              
              </ul> */}
            </div>
            
          </div>
          <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker48.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Aniket Raj
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Independent Practitioner </span>
                <p>Uttar Pradesh, India </p>
                
              </div>
              {/* <ul>
                
                <li style={{marginTop:"10px"}}> */}
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/aniket-raj-7b06111b3/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
              
                 
                {/* </li>
              </ul> */}
            </div>
            
          </div>
            <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker45.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Nikita Vaidya
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Senior Director at Ankura</span>
                <p> United Arab Emirates </p>
                
              </div>
              {/* <ul>
                
                <li style={{marginTop:"10px"}}> */}
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/nikita-vaidya-4bb09518/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
{/*               
                </li>
              </ul> */}
            </div>
          </div>
             <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker47.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                John Shehata
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Of Counsel at Pirola Pennuto Zei & Associati</span>
                <p> Milan, Lombardy, Italy </p>
                
              </div>    
       
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/jshehata/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
            
            </div>
          </div>
              <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker46.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                Kaushal Joshi
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Director IPR & Legal at Kashiv BioSciences LLC</span>
                <p>India</p>
                
              </div>    
                
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/kaushal-joshi-56b5246/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>

            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker40.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Sarah Malik                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>CEO at SOL International Ltd</span>
                <p>Abu Dhabi Emirate, United Arab Emirates </p>
                
              </div>
               
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/sarah-malik-fciarb-sol-international-ltd-3439398/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>

                 
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker38.jpg"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Mohammed Noaman

                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>General Counsel at GE Power</span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
           
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/mohammed-noaman-01a33911/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>

                
            </div>
          </div>
            <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker44.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  Nick Braganza

                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Dispute Resolution Partner at HFW</span>
                <p>United Arab Emirates </p>
                
            
              </div>
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open(" https://www.linkedin.com/in/nick-braganza-49a87a19/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker41.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                Sergey Medvedev, PhD, LLM

                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>International Lawyer | Partner at GORODISSKY</span>
                <p>Moscow, Russia</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/sergey-medvedev-phd-llm-63b3262a/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
          
           <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker39.jpg"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                Yosr Hamza

                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Director, Legal & Compliance at Gartner</span>
                <p>Asia </p>
                
              </div>
          
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/yosrhamza/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
            <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker43.jpg"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                Nooshin Rahmani                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Senior Associate at  Horizons & Co Law Firm</span>
                <p>United Arab Emirates </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/nooshin-rahmani-05311166/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0" >
            <div className=""  style={{height:"100%"}}>
             <img
                src="images/speaker42.png"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
               Adrian Cole

                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Independent Arbitrator Mediator Dispute Board Member at Adrian Cole FZ LLE</span>
                <p>United Arab Emirates  </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/adrian-cole-b1a3ba5/?originalSubdomain=ae")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
              style={{ height: "100%" }}
            >
              <img
                src="images/speaker37.png"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Elias Ahonen</div>
                </h3>
                 <span> 
               Author at Cointelegraph</span>
                <p>Dubai, United Arab Emirates</p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open(" https://www.linkedin.com/in/eliasahonen/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
         <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
              style={{height:"100%"}}
            >
              <img
                src="images/speaker36new.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Niten Chauhan</div>
                </h3>
                 <span> 
               Partner and Head of Restructuring and Insolvency at Harold Benjamin</span>
                <p>England, United Kingdom</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open(" https://www.linkedin.com/in/niten-chauhan-463a2147/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
             <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="images/speaker34.png"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div > Sadique Mohd</div>
                </h3>
                 <span> 
                Head of International Arbitration at ALAIDAROUS Advocates & Legal Consultants</span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/sadique-mohd-63920923b/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className="" style={{height:"100%"}}
            >
              <img
                src="/images/speaker14.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Anastasia Skovpen</div>
                </h3>
                <span>Intellectual Property Lawyer, Nestle</span>
                <p>Moscow, Russia</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/anastasia-skovpen-329496a0/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="/images/speaker15.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-1">
                <h3>
                  <div >Raghvendra verma</div>
                </h3>
                <span>Group Head- Legal, Compliance and Company Secretary, ISON Group</span>
                <p>Dubai, United Arab Emirates</p>
                
              </div>
              
                  <div className="linkedin ml-2 " onClick={()=>window.open("https://www.linkedin.com/in/vermaraghvendra/?originalSubdomain=ae")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
            <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="/images/speaker16.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-1">
                <h3>
                  <div >Shaima Al Sayed</div>
                </h3>
                <span style={{fontSize:"13.5px"}}>Legal Counsel - GM International/Connected Services Compliance Counsel - GM Egypt & North Africa</span>
                <p>Dubai, United Arab Emirates</p>
                
              </div>
              
                  <div className="linkedin ml-2" onClick={()=>window.open("https://www.linkedin.com/in/shaima-al-sayed-55b95017/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
              
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 p-0">
            <div className=""  style={{height:"100%"}} >
             <img
                src="images/speaker2.jpg"
                alt="speaker"
                
                style={{width:"100%",height:"70%"}}

              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Shreya Maheshwari 
                </h3>
                <span style={{margin:0,padding:0}}>Corporate Counsel , Amazon</span>
                <p>India</p>
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/maheshwarishreya/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                      <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
         
            <div className="col-lg-3 col-sm-6 p-0" >
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker6.jpg"
                alt="speaker"
                style={{height:"70%",width:"100%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                Astrid Gobardhan 
                </h3>
                <span style={{margin:0,padding:0}}>Senior Global Privacy Counsel, VFS Global
                </span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/astrid-gobardhan-94030221/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
         <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
              style={{ height: "100%" }}
            >
              <img
                src="/images/speaker25.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Suren Gortsunyan </div>
                </h3>
                 <span> 
               Managing Partner / Founder at Rybalkin, Gortsunyan & Partners</span>
                <p>Russia  </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/suren-gortsunyan-434a881/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
               <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker26.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Taron Simonyan</div>
                </h3>
                 <span> 
                Founding Partner at ELL PARTNERSHIP Law Firm</span>
                <p>Armenia</p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/taron-simonyan-41bb9813/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
              <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker27.png"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Nicolas Demigneux</div>
                </h3>
                 <span> 
               Managing Partner at Stephenson Harwood</span>
                <p>Paris, France</p>
                
              </div>

                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/nicolas-demigneux-7181122/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="/images/speaker28.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Ahmad Zaza</div>
                </h3>
                 <span> 
               Partner at  Al Tamimi & Company.</span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/ahmad-zaza-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B8%D8%A7%D8%B8%D8%A7-2489363b/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
        
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="images/speaker32.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Dr. Laura Voda</div>
                </h3>
                 <span> 
                Of Counsel at Fichte & Co.</span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/mlvoda/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
            
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="images/speaker33.png"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Yoav Salomon</div>
                </h3>
                 <span> 
                Managing Partner at Avniel, Salomon & Co.</span>
                <p>Israel </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/yoavsalomon/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
             
            </div>
          </div>
  
          <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker8new.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-1">
                <h3>
                  <div  style={{fontSize:"25px",marginTop:"10px" }} >SAMEET GAMBHIR, FCS, LLB</div>
                </h3>
                <span style={{fontSize:"13px", }}>Vice President (Corp. Law) & Company Secretary, 
                  DCM Shriram LTD</span>
                <p  style={{fontSize:"13px", }}>India</p>
                
              </div>
              
                  <div className="linkedin ml-2 " onClick={()=>window.open("https://www.linkedin.com/in/sameet-gambhir-0107133/?originalSubdomain=in")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
              <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker9new.jpeg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Noor Maki</div>
                </h3>
                <span>Senior Legal Counsel, Ford Motor Company</span>
                <p>Middle East</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/noor-maki-1847684b/?originalSubdomain=ae")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
              
            </div>
          </div>
          
           
          <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
              style={{ height: "100%" }}
            >
              <img
                src="/images/speaker17.jpeg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content">
                <h3>
                  <div >Shilpa Sharma</div>
                </h3>
                 <span> 
                        Vice President Legal & Chairperson of ICC under POSH
                         
                  , Inox Leisure Limited</span>
                <p>Mumbai, Maharashtra, India</p>
                
              </div>
              
                  <div className="linkedin" onClick={()=>window.open("https://www.linkedin.com/in/shilpa-sharma-079a675/?originalSubdomain=in")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>

            <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
              style={{ height:"100%" }}
            >
              <img
                src="/images/speaker18.jpeg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Ahmad Saleh</div>
                </h3>
                 <span> 
                 Partner, Head of Innovation, Patents & Industrial Property (3IP), Al Tamimi & Company</span>
                <p>United Arab Emirates</p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/salehip/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker7.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <h3>Aparajita Mishra</h3>
                </h3>
                <span>Regional Legal Counsel, Mott MacDonald</span>
                <p>Dubai, United Arab Emirates</p>
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/aparajita-mishra-24b8433b/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="images/speaker35.png"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div  style={{fontSize:"25px",marginTop:"10px"}}>Ismaeel Mohammad Beegun</div>
                </h3>
                 <span> 
                 Legal Advisor at Executive Office of Anti-Money Laundering and Counter Terrorism Finance</span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/ismaeel-mohammad-beegun-004b84117/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
          
        <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker20.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-1">
                <h3>
                  <div style={{fontSize:"25px",marginTop:"10px"}}>Menna-t-allah M. El-Kotamy</div>
                </h3>
                 <span style={{fontSize:"14px"}}> 
               Executive Director, Egyptian Innovation Bank</span>
                <p style={{fontSize:"14px"}}>Egypt  </p>
                
              </div>
             
                  <div className="linkedin ml-2 " onClick={()=>window.open("https://www.linkedin.com/in/menna-t-allah-m-el-kotamy-bb026341/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker21.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Manoj Poonia</div>
                </h3>
                 <span> 
               Vice President, Effectual Services</span>
                <p>Gurgaon, Haryana, India</p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/pooniamanoj/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker22.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Ram Tenneti </div>
                </h3>
                 <span> 
               Vice President, Effectual Services</span>
                <p>Delhi, India </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/ram-tenneti-6a91976/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div className="" style={{height:"100%"}}>
             <img
                src="images/speaker1new.jpeg"
                alt="speaker"
                style={{width:"100%",height:"70%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  Andrea Sesin-Tabarelli
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Compliance Manager Lower Gulf & Levant Region  , NESTLÉ United Arab Emirates</span>
                <p>Dubai, United Arab Emirates </p>
              </div>
            
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://ae.linkedin.com/in/andrea-sesin-tabarelli-1a187958")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                  <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />
                  </div>
               
            </div>
          </div>
            <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker23.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Karim El Helaly</div>
                </h3>
                 <span> 
               General Counsel and Data Governance at Lnddo</span>
                <p>UAE </p>
                
              </div>
            
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/karim-el-helaly-63b7342/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
               style={{height:"100%"}}
            >
              <img
                src="/images/speaker24.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Dr. Carsten Witzke</div>
                </h3>
                 <span> 
                Disputes Partner at Ebner Stolz</span>
                <p>Hamburg, Germany</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/dr-carsten-witzke-3763902b/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="/images/speaker10new.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Henzie Healley</div>
                </h3>
                <span>Managing Partner, The Counsel Services (TCS)</span>
                <p>UAE</p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/henzie-healley-7b83b267/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
     <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
              style={{ height: "100%" }}
            >
              <img
                src="/images/speaker11.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Bijan Brahmbhatt</div>
                </h3>
                <span>Senior Corporate Counsel, Precision Drilling</span>
                <p>UAE</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open(" https://www.linkedin.com/in/bijan-brahmbhatt-power-profile/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
       <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="/images/speaker12.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Tobias Speer  </div>
                </h3>
                <span>Group Head-Legal, Easa Saleh Al Gurg Group</span>
                <p>UAE</p>
                
              </div>
           
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open(" https://www.linkedin.com/in/bijan-brahmbhatt-power-profile/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
           <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="/images/speaker13.jpeg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Sean Yates  </div>
                </h3>
                <span>Barrister and Arbitrator at Outer Temple Chambers (FCIArb)</span>
                <p>United Arab Emirates</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open(" https://www.linkedin.com/in/sean-yates-fciarb-6b503611/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
              
            </div>
          </div>
          
             <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="images/speaker29.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Sean Michael Hugo</div>
                </h3>
                 <span> 
               Partner at  CBBG Group</span>
                <p>United Arab Emirates </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/seanhugo/?originalSubdomain=ae")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
            <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""
            >
              <img
                src="images/speaker30.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Malek HANNOUF</div>
                </h3>
                 <span> 
               Head of Intellectual Property department - MEA  at  Louis Vuitton</span>
                <p>Dubai, United Arab Emirates</p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/malek-hannouf-37177228/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
                
            </div>
          </div>
             <div className="col-lg-3 col-sm-6 p-0">
            <div
              className=""  style={{height:"100%"}}
            >
              <img
                src="images/speaker31.jpg"
                alt="speaker"
                style={{ height: "70%", width: "100%" }}
              />

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  <div >Farid Karachiwala</div>
                </h3>
                 <span> 
                Partner at J. Sagar Associates</span>
                <p>Mumbai, Maharashtra, India</p>
                
              </div>
              
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/farid-karachiwala-4925b017b/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
             
            </div>
          </div>
            <div className="col-lg-3 col-sm-6 p-0">
            <div className=""   style={{height:"100%"}}>
             <img
                src="images/speaker3.jpg"
                alt="speaker"
             style={{width:"100%",height:"70%"}}

              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  Olga Simachkova
                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Corporate Counsel at Caterpillar SARL</span>
                <p>Dubai, United Arab Emirates </p>

                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/olga-simachkova-29b1854/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
              
            </div>
          </div>
            <div className="col-lg-3 col-sm-6 p-0" >
            <div className=""  style={{height:"100%"}} >
             <img
                src="images/speaker4.jpg"
                alt="speaker"
             style={{width:"100%",height:"70%"}}

              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                  Saloni Tuteja
                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Regional Legal and Business Conduct Counsel, Gilead Sciences ,Middle East</span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/saloni-tuteja-3b40151a/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content"}} >
                                      <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
               
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 p-0" >
            <div className=""
             style={{height:"100%"}}
            >
             <img
                src="images/speaker5new.jpg"
                alt="speaker"
                style={{width:"100%", height:"70%"}}
              /> 

              <div className="speakers-content ml-2 mt-2">
                <h3>
                 Dr. Mohamed Elmogy

                  
                </h3>
                <span style={{ margin: 0, padding: 0 }}>Regional Leal Counsel Middle East and North East Africa, Siemens Energy</span>
                <p>Dubai, United Arab Emirates </p>
                
              </div>
             
                  <div className="linkedin ml-2 mt-2" onClick={()=>window.open("https://www.linkedin.com/in/elmogy/")}  style={{fontSize:"20px",cursor:"pointer" ,width:"fit-content" ,width:"fit-content"}} >
                                        <img src="images/linkedin.png" alt="" style={{width:"30px"}}  />

                  </div>
              
            </div>
          </div>
         
       
            
        </div>
      </section>
    );
  }
}

export default Speakers;
