import React from 'react'
import { Box } from '@material-ui/core'
import {AiOutlineDoubleRight} from 'react-icons/ai'

const WhoAttend = () => {
  return (
      <Box style={{
          display: "flex", alignItems: "center",flexDirection:"column", backgroufdColor:"#ffffff",
      }}> <Box style={{
          width: "80% ", background: "pink", display: "flex", alignItems: "center", flexDirection: "column"
      }}>
              <Box style={{ display:"flex", fontSize: "30px",width:"fit-content",alignItems:"center",flexDirection:"column" }}> Who Should Attend
                  <Box style={{ width: "30%"}}><hr /></Box>
              
              </Box>
              <Box  className=" tableContent" style={{
                  display: "flex" ,flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "column",
                      lg: "row",
                      xl: "row",
                        
                  },
                  width:"100%"
              }}>
                
                  <Box  style={{background:"cyan",width:"50%"}}><p>GCs, Corporate Counsels & In-house Counsels</p>
                     <p> Head Legal, CLOs</p>
                      <p>ADR Practitioners, Mediators and Arbitrators
                      </p>
                      <p>Online Dispute Resolution Service Providers & Pioneers
                          
                      </p>
                      <p>LegalTech experts and Developers</p>
                      <p>Head / VP / SVP / Director / Manager - Legal</p>
                      <p>Head of Litigation/IP Litigation
                          
                      </p>
                  </Box>
                  <Box style={{background:"cyan",width:"50%"}} >
                      <p>Legal Operations</p>
                  <p>Litigation Funders</p>
                      <p>Policymakers, Judicial Officers and Government Officials</p>
                      <p>CEOs / Managing & Senior Partners of Law firms</p>
                      <p>Solicitors, Advocates, Practitioners, Lawyers Specialized in Dispute Resolution</p>
                      <p>Marketing / Business Heads of Legal Products & Services Companies</p>
                  </Box>
              </Box>
          </Box>
      </Box>
  )
}
