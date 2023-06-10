import React from 'react'

const MainPolicies = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",padding:"50px",gap:"20px",margin:"50px 0px "}}>
      <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <div> <span style={{ fontSize: "25px", color: "grey" }}>1.</span> <span style={{ fontSize: "20px", fontWeight: 600,textDecoration:"underline",textDecorationColor:"grey" }}>GDPR Policies</span></div>
        <div className="text-justify mt-3">At “GLA” we are committed to protecting and respecting your privacy. We hold, as with most businesses, personal information about our customers and people who may be interested in our products and services. This privacy policy explains the type of information we process, how that processing may affect you and your rights. GLA will occasionally update this privacy policy. We will post a notice of any material changes on our website prior to implementing the changes, and, where appropriate, notify you using any of the contact details we hold for you for this purpose. We encourage you to periodically review our policies to be informed of how we use your information.
          Our Data Protection Officers can be contacted at faiz@globallegalassociation.org</div>
      </div>
      
      <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <div> <span style={{ fontSize: "25px", color: "grey" }}>2.</span> <span style={{ fontSize: "20px", fontWeight: 600,textDecoration:"underline",textDecorationColor:"grey" }}>Cancellation and Refund Policy</span></div>
        <div className="text-justify mt-3">Registration Cancellation by Participant
          <ul>
          <li>All payments made for event registrations are non-refundable.</li> 
           <li> Only substitution/Change in name is provided at no extra charges.</li>
            </ul>
           Event Cancellation by GLA The Global Legal Association (GLA) reserves the right to cancel an event due to low enrollment or other circumstances which would make the event non-viable. If GLA cancels or postpones an event, registrants will be offered a full credit which can be utilized in future/postponed GLA conferences. We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</div>
      </div>
      
      <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <div> <span style={{ fontSize: "25px", color: "grey" }}>3.</span> <span style={{ fontSize: "20px", fontWeight: 600,textDecoration:"underline",textDecorationColor:"grey" }}>Terms and Conditions</span></div>
        <div className="text-justify mt-3">By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at faiz@globallegalassociation.org .
        If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.
        Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Global Legal Association and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Global Legal Association</div>
      </div>

      <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <div> <span style={{ fontSize: "25px", color: "grey" }}>4.</span> <span style={{ fontSize: "20px", fontWeight: 600,textDecoration:"underline",textDecorationColor:"grey" }}>Shipping & Delivery Policy</span></div>
        <div className="text-justify mt-3">There is no shipping/delivery cost involved as we Usually send a letter of confirmation to the attendee once he/she makes the payment on our website. We do not send physical letters. We confirm the participation via email only. The moment an attendee makes the payment he/she gets the notification through email immediately.</div>
      </div>
    </div>
  )
}

export default MainPolicies