import React from 'react'
import LaxDiv from '../../Shared/LaxDiv'

const Testimonial = () => {
    const reviewData = [
        {
            review: "It was a real privilege to speak at a second panel at the #Globallegalassociation conference, this time covering #Compliance & #Riskmanagement in the #Digital Age.",
            image: "/images/speaker55.png",
            name: "Muna Farid",
            desg: "Managing Director & Head of Legal",
            company:"Hatch DWC-LLC",
            learnMore:"https://www.linkedin.com/feed/update/urn:li:activity:7029499517393645568?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7029499517393645568%29"
        },
         {
            review: "I got an opportunity to participate and address the Global legal association Annual Meet held in Dubai for the last two days. Got opportunity to meet many legal leaders from various countries sharing their insights on challenges and advancements in legal domain.",
            image: "/images/test-image1.jpg",
            name: "Brijesh Chedayan",
             desg: "CEO",
            company:"Beveron Technologies",
            learnMore:"https://www.linkedin.com/feed/update/urn:li:activity:7028687235289890816?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7028687235289890816%29"
            
        },
         {
            review: "Another interesting and highly relevant session at the Global legal association conference in Dubai this time on Litigation Finance: Trends, Risks and Opportunities. ",
            image: "/images/speaker36new.jpg",
            name: "Niten Chauhan",
             desg: "Partner and Head of Restructuring",
            company:"Harold Benjamin",
            learnMore:"https://www.linkedin.com/feed/update/urn:li:activity:7028979298057248768/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7028979298057248768%29"
           
        },
         {
            review: "Thank you Firas Alchoufi FCIArb, DiplCIArb, LLM, LLB, Bijan Brahmbhatt and Suren Gortsunyan for all of your valuable insights at the Global Legal Association pannel on Contracts and Disputes.",
            image: "/images/speaker10new.jpg",
            name: "Henzie Healley",
             desg: "Managing Partner",
            company:"The Counsel Services (TCS)",
            learnMore:"https://www.linkedin.com/posts/henzie-healley-7b83b267_legal-contractsanddisputes-avoidingproblems-activity-7032267711661379584-4pkk?utm_source=share&utm_medium=member_desktop"
           
        },
         {
            review: "The Global Legal Association 2023 Annual meet in Dubai brought together leading practitioners from around the globe resulting in stimulating presentations and productive networking discussions.   A very enjoyable event.",
            image: "/images/speaker42.png",
            name: "Adrian Cole",
             desg: "Independent Arbitrator Mediator Dispute Board",
            company:"Member at Adrian Cole FZ LLE",
            learnMore:"https://www.linkedin.com/in/adrian-cole-b1a3ba5/?originalSubdomain=ae"
           
        }
    ]
    const reviewCard = (review,image,name,desg,company,learnMore,) => {
        return (
            <div className="cards" style={{ padding: "10px", flexBasis: "45%", background: "white", borderRadius: "20px", marginTop:"20px"}}>
              <div >
                      <p><img src="images/linked-in-full.png" alt="" style={{ width: "30%" }} /></p>
                      <p >{review}</p>

                      <div style={{display:"flex",gap:"10%"}} >
                          <span style={{width:"20%"}}><img src={image} alt="speaker" style={{ width: "100%", borderRadius: "20px" }} /></span>
                        <span style={{ flexGrow: 1,display:"flex",justifyContent:"space-between",flexDirection:"column" }}>
                            <div style={{}}>
                                <div>{name}</div>
                                <div>{desg}</div>
                                <div>{company}</div>

                            </div>
                            <div style={{ color: "#0A66C2", fontWeight: 600,cursor:"pointer" }} onClick={() => {
                                window.open(learnMore);
                               
                            }}>Learn More</div>
                          </span>
                    </div>
            </div>
            </div>
        )
    }

  return (
      <div style={{ background: "#2E2E2E",padding:"5% 0px " }}>
          <div className="container">
          <div className="section-title">
            {/* <span>Listen to the Past Event Speakers</span> */}
                  <h2 style={{ color: "white" }}>Reviews</h2>
                  <span>Read what our Attendees think about us</span>
            <div className="bar"></div>
            <LaxDiv text="Speakers" dataPreset="driftRight" />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap",  width: "100%", padding: "0px 5%",justifyContent:"space-between" }}>
              {reviewData.map((item,key) => {
                  return reviewCard(item.review, item.image, item.name, item.desg, item.company, item.learnMore)
              })}
          </div>
    </div>
  )
}

export default Testimonial