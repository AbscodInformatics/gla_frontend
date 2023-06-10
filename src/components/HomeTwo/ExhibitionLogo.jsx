import React from 'react'
import LaxDiv from "../Shared/LaxDiv";


const ExhibitionLogo = () => {
  return (
    <div className="pb-20 " style={{marginBottom:"5%"}}> 
    <div class="dark:bg-white">
      <section class="py-14 px-6 lg:px-0 bg-gray-100 dark:bg-white">
        <div class="mx-auto container flex justify-start xl:items-start items-center flex-col">
          <div className="container">
          <div className="section-title mt-10" >
            <span>Sponsors and Partners</span>
            <h2>Our past Sponsors</h2>
            <div className="bar"></div>
            <LaxDiv text="Partners" dataPreset="driftRight" />
            
          </div>
        </div>
          <div  style={{display:"flex",flexWrap:"wrap",gap:"10%",marginTop:"1%",width:"100%",padding:"5px",justifyContent:"center"}}>
            <div style={{background:"white",width:"150px",justifySelf:"flex-start"}}>
              <div style={{width:"fit-content",borderRadius:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
                <img src="images/effectual_logo.png" style={{width:"100%",borderRadius:"20px",padding:"20px"}} alt="atteendes" />
              </div>
             
            </div>
             <div style={{background:"white",width:"150px",borderRadius:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <div style={{width:"fit-content"}} >
                <img src="images/abscod.png" style={{width:"100%",borderRadius:"20px",padding:"10px"}} alt="atteendes" />
              </div>
             
              </div>     
             <div style={{background:"white",width:"180px",borderRadius:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <div style={{width:"fit-content"}} >
                <img src="images/lexisSponsor.jpg" style={{width:"100%",borderRadius:"20px",padding:"10px"}} alt="atteendes" />
              </div>
             
              </div>    
              <div style={{background:"white",width:"180px",borderRadius:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <div style={{width:"fit-content"}} >
                <img src="images/ss1.png" style={{width:"100%",borderRadius:"20px",padding:"10px"}} alt="atteendes" />
              </div>
             
            </div>  
          </div>
        </div>
      </section>
    </div>
  
  </div>
  )
}

export default ExhibitionLogo