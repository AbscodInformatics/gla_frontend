import React from "react";
import "./amsterdam.css"
export default function Amsterdam() {
    // <style></style>
    return (
         <section className="outter option1" >
        <section className="video-container" >
          <div style={{opacity:"0.3"}}>
            
            <video src="https://effectualservices.com/Signature-Images/amsterdam.mp4" autoPlay loop muted />
            </div>
    <div className="callout">
            <h1 className="gla-amsterdam">Global <span  style={{color:"#1F3853"}}> Legal</span> Association </h1>
            <h1 style={{textAlign:"center",color:"#1F3853"}}>WELCOMES</h1>
            <div className="desc">To Their Next Summit
              <p style={{ textAlign: "center", color: "white", fontSize: "25px", marginBottom: 0 }}>In</p>  <p style={{ textAlign: "center", color: "#1F3853", fontSize: "55px", fontWeight: 600,marginBottom:0 }}>AMSTERDAM</p>
              <div className="inner">coming soon...  </div>
            </div>
      <div className="button">

    </div>
     </div>
  </section>
</section>



    );
}
