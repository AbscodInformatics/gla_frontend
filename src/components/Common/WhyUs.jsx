import React from 'react';
// import { Link } from 'react-router-dom';
 
class WhyUs extends React.Component {
    render(){
        return (
            <section style={{padding:"30px 20px",color:"black" ,marginTop:"9%"}}>
               
                <div style={{width:"100%",borderRadius:"40px",display:"flex",padding:"10px 0px "}}>
                    <div style={{width:"25%",boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius: "40px 0px 0px 40px",textAlign:"center",marginTop:"20px"}}>
                        <p style={{fontWeight:800,fontSize:"20px"}}> Networking Opportunity</p>
                        <p className="text-justify p-3">Imagine meeting your academic or professional heroes and getting to interact with them. These luminaries could answer yourdoubtsand you couldalso get to interact with representatives of premier law firms and enterprises.</p>
                    </div>
                     <div style={{width:"25%",boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius: "40px 0px 0px 40px",textAlign:"center",marginTop:"20px"}}>
                        <p style={{fontWeight:800,fontSize:"20px"}}>Exchanging Ideas</p>
                        <p className="text-justify p-3">You will have the opportunity to engage with the audience by presenting your research work. Interestingly, while exchanging ideas, you may notice certain creases in your thought process, which require ironing out.</p>
                    </div>
                     <div style={{width:"25%",boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius: "40px 0px 0px 40px",textAlign:"center",marginTop:"20px"}}>
                        <p style={{fontWeight:800,fontSize:"20px"}}>Improving Communication Skills</p>
                        <p className="text-justify p-3">You can learn from the other presenters too. Try to pick up some of their positive qualities and traits like poise, diction, and time management to improve your communication ability.</p>
                    </div>
                      <div style={{width:"25%",boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius: "40px 0px 0px 40px",textAlign:"center",marginTop:"20px"}}>
                        <p style={{fontWeight:800,fontSize:"20px"}}>Updating Legal Tech Information</p>
                        <p className="text-justify p-3">seminars and conferences are a good way to expand your knowledge base and become more versatile. As a versatile legal professional, you will be able to practice in various law fields.

</p>
                    </div>
          </div>

            </section>
        );
    }
}
 
export default WhyUs;