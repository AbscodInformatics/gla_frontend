import React from "react";
import "./amsterdamNew.css"
import Box from '@mui/material/Box';

export default function AmsterdamNew() {
    // <style></style>
    return (
       
    

      <Box className="container1" sx={{
        height: {
          xs: "40vh",
          sm: "70vh",
          md: "70vh",
          lg:"80vh"
      }}}>
        <img src="/images/amsterdam.png" alt="Snow" style={{ width: "100%", height:"100%",opacity:0.8}}/>
  
        <Box className="centered" >
          <h1 className="gla-amsterdam" style={{ color: "white" }}>Global <span  > Legal</span> Association </h1>
          <h1 style={{ textAlign: "center", color: "white" }}>WELCOMES YOU</h1>
             <div className="desc">To Their Next Summit
              <div style={{ textAlign: "center", color: "white", fontSize: "20px", marginBottom: 0 }}>in</div>  <div style={{ textAlign: "center", color: "white", fontSize: "65px", fontWeight: 700,marginBottom:0 }}>AMSTERDAM</div>
              {/* <div className="inner">coming soon...  </div> */}
            </div>
  </Box>
</Box>



    );
}
