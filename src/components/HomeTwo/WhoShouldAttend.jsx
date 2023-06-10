import React from 'react'
import LaxDiv from '../Shared/LaxDiv'

const WhoShouldAttend = () => {
    const style={padding:"10px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",borderRadius:"10px",background:"black",color:"white",fontSize:"16px"}
  return (
      <div className="container" style={{ marginBottom: "5%" }}>
          <div className="section-title mt-10 " >
            <span>Who Should Attend</span>
            <h3>Who should attend our event</h3>
            <div className="bar"></div>
          {/* <LaxDiv text="Partners" dataPreset="driftRight" /> */}
          
            
      </div>
          <div>
              <p style={style}>GCs, Corporate Counsels & In-house Counsels</p>
                     <p style={style}> Head Legal, CLOs</p>
                      <p style={style}>ADR Practitioners, Mediators and Arbitrators
                      </p>
                      <p style={style}>Online Dispute Resolution Service Providers & Pioneers
                          
                      </p>
                      <p style={style}>LegalTech experts and Developers</p>
                      <p style={style}>Head / VP / SVP / Director / Manager - Legal</p>
              <p style={style}>Head of Litigation/IP Litigation   </p>
                <p style={style}>Legal Operations</p>
                  <p style={style}>Litigation Funders</p>
                      <p style={style}>Policymakers, Judicial Officers and Government Officials</p>
                      <p style={style}>CEOs / Managing & Senior Partners of Law firms</p>
                      <p style={style}>Solicitors, Advocates, Practitioners, Lawyers Specialized in Dispute Resolution</p>
                      <p style={style}>Marketing / Business Heads of Legal Products & Services Companies</p>
      </div>
      </div>
  )
}

export default WhoShouldAttend