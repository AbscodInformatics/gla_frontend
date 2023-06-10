import React from "react";
import OtherFooter from "../../Common/OtherFooter";
import Attendees from "../../HomeTwo/Attendees";
import NewSpeakers from "../../HomeTwo/NewSpeakers";
import BannerDubaiIP from "./BannerDubaiIP";
import PlatinumSpon from "../../HomeTwo/PlatinumSpon";

const DubaiIp = () => {
  const cardData = [
    {
      name: "Robert Whitehead",
      desg: "Partner",
      company: "Hamdan Al Shamsi Lawyers & Legal Consultants",
      country: "UAE",
      image: "/images/speaker56.jpg",
      linkedIn: "https://www.linkedin.com/in/robertwhitehead/",
    },
  ];

  const attending = [
    {
      image: "images/speakerLogo1.jpg",
    },
    {
      image: "images/speakerLogo67.png",
    },
    {
      image: "images/speakerLogo68.jpg",
    },
    {
      image: "images/speakerLogo70.jpg",
    },
    {
      image: "images/speakerLogo71.png",
    },
  ];
  const PlatinumSponsors = [
    {
      image: "/images/effectual_logo.png",
    },
  ];

  return (
    <div>
      <BannerDubaiIP />

      <div className="container" style={{ marginTop: "4%" }}>
        <div className="section-title">
          <span> About the Event</span>

          <div className="bar"></div>
          <div style={{ margin: "10px 0px", textAlign: "justify" }}>
            We are very happy to announce our upcoming flagship event, the GLA
            Intellectual Property Conference (GLAIPC) in Dubai, scheduled for
            February 12-13 , 2024. This conference is expected to bring together
            150 - 200 Heads of IP Depts., IP Counsel, Patent Managers, Chief IP
            Officers, Trademark Managers, Risk & Compliance Professionals, Data
            Privacy Officers, Head of Patents, Patent Attorneys, IP Tech
            Professionals, IP Law Firm Partners, Directors Data Privacy & IP,
            and similar Service Providers. The attendees in our conference will
            share their operational difficulties related to IP, Risk, patent,
            trademark, security, CCPA, GDPR, compliance, data privacy, AI, legal
            tech Innovations, automation, machine learning and e-discovery.
            However, this list is not exhaustive. Let participate in our
            conference to find out the solution to these challenges through
            meeting the right service provider.
            <h5 style={{ margin: "10px 0px" }}>EVENT HIGHLIGHTS</h5>
            <ul>
              <li>Up to 150-200 IP Counsels and Law Firm Partners</li>
              <li>5-10 Exhibitors</li>
              <li>35+ Speakers</li>
              <li>10+ Media Partners</li>
              <li>Business Dialogues</li>
              <li>Round Table Discussions</li>
              <li>Exclusive Case Study Presentations</li>
              <li> Keynote Addresses</li>
              <li>Qualified Business Leads</li>
              <li>Unique Networking Opportunities</li>
              <li>Invitations for C - Level Executives Only</li>
            </ul>
          </div>
        </div>
        <div className="section-title">
          <span>Listen to the Event Speakers</span>
          <h2>Who's Speaking</h2>
          <h4>( to be updated soon...)</h4>
          <div className="bar"></div>
          <div className="bg-title lax" data-lax-preset="driftRight">
            Speakers
          </div>
        </div>
      </div>
      {/* <NewSpeakers cardData={cardData} /> */}
      <PlatinumSpon attending={PlatinumSponsors} />

      <Attendees attending={attending} />
      <OtherFooter />
    </div>
  );
};

export default DubaiIp;
