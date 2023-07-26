import React from "react";
import OtherFooter from "../../Common/OtherFooter";
import Attendees from "../../HomeTwo/Attendees";
import NewSpeakers from "../../HomeTwo/NewSpeakers";
import BannerDubaiLegal from "./BannerDubaiLegal";
import PlatinumSpon from "../../HomeTwo/PlatinumSpon";

const DubaiLegal = () => {
  const cardData = [
    {
      name: "Nicola Jackson",
      desg: "Legal Director",
      company: "Clyde & Co LLP",
      country: "UAE",
      image: "/images/NICOLA JACKSON COLOR HIGH RES.jpg",
      linkedIn: "https://www.clydeco.com/en/people/j/nicola-jackson",
    },
    {
      name: "Richard Bell",
      desg: "Partner",
      company: "Clyde & Co LLP",
      country: "UAE",
      image: "/images/bell, richard.jpg",
      linkedIn: " https://www.clydeco.com/en/people/b/richardbell",
    },
    {
      name: "Narguiz Birk-Petersen",
      desg: "Vice President and Regional General Counsel",
      company: "Takeda",
      country: "UAE",
      image: "/images/Narguiz photo.jpg",
      linkedIn: "https://www.linkedin.com/in/narguiz-birk-petersen-8211365/",
    },
    {
      name: "Cîhan Seuleiman-Morgan",
      desg: "Chief Legal and Compliance Officer and Board Secretary",
      company: "Airtel Mobile Commerce BV",
      country: "UAE",
      image: "/images/Seuleiman-Morgan.jpg",
      linkedIn: "https://www.linkedin.com/in/c%C3%AEhan-seuleiman-morgan-5568a22b/",
    },
    {
      name: "Bijan Brahmbhatt",
      desg: "Senior Corporate Counsel",
      company: "Precision Drilling",
      country: "UAE",
      image: "/images/Bijan Brahmbhatt.jpg",
      linkedIn: "https://www.linkedin.com/in/bijan-brahmbhatt-power-profile/",
    },
    {
      name: " Dr Susann Funke",
      desg: "CEO, Legal Officer",
      company: "LEX AI",
      country: "Germany",
      image: "/images/a-l-speaker82.jpg",
      linkedIn: "https://www.linkedin.com/in/drsusannfunke/",
    },
    {
      name: "Dr Amer Tabbara",
      desg: "Assistant Professor of International Commercial Dispute Resolution",
      company: "University of Birmingham",
      country: "UAE",
      image: "/images/a-l-speaker81.jpg",
      linkedIn:
        "https://www.linkedin.com/in/dr-amer-tabbara-llm-phd-fciarb-aa66b990/",
    },
    {
      name: "Astrid Gobardhan",
      desg: " Data Protection Officer",
      company: "VFS Global",
      country: "UAE",
      image: "/images/a-l-speaker91.jpg",
      linkedIn: "https://www.linkedin.com/in/astrid-gobardhan-94030221/",
    },
    {
      name: "Alessio Santoriello",
      desg: "General Counsel",
      company: "ZTE Italia",
      country: " Italy",
      image: "/images/a-l-speaker11.jpg",
      linkedIn: "https://www.linkedin.com/in/alessiosantoriello/",
    },
    {
      name: "Fatima Al Qubaisi",
      desg: " Legal Counsel",
      company: "Abu Dhabi Commercial Bank",
      country: "UAE",
      image: "/images/a-l-speaker122.jpg",
      linkedIn: "https://www.linkedin.com/in/fatima-alqubaisi-073a55a7/",
    },
    {
      name: "Sameet Gambhir",
      desg: " Vice President (Corp. Law) & Company Secretary",
      company: "DCM Shriram LTD",
      country: " India",
      image: "/images/a-l-speaker12233.jpg",
      linkedIn: "https://www.linkedin.com/in/sameet-gambhir-0107133/",
    },
    {
      name: "Henrietta Newton Martin",
      desg: "Legal Counsel / Generalist",
      company: "Silal",
      country: "UAE",
      image: "/images/a-l-speaker33.jpg",
      linkedIn: "https://www.linkedin.com/in/henriettanewtonmartin/",
    },
    {
      name: "Riham Naim",
      desg: "Corporate Head of Legal",
      company: "Novartis",
      country: "UAE",
      image: "/images/a-l-speaker32.jpg",
      linkedIn: "https://www.linkedin.com/in/riham-naim-12b16a7/",
    },
    {
      name: "Yasser Aboismail",
      desg: "General Counsel",
      company: "Schindler Group",
      country: "UAE",
      image: "/images/a-l-speaker31.jpg",
      linkedIn: "https://www.linkedin.com/in/yasser-aboismail-36322a23/",
    },
    {
      name: "Saloni Tuteja",
      desg: "Head of Legal",
      company: "Servier",
      country: "UAE",
      image: "/images/speaker4.jpg",
      linkedIn: "https://www.linkedin.com/in/saloni-tuteja-3b40151a/",
    },
    {
      name: " Alessio Santoriello",
      desg: "Counsel",
      company: "Dubai International Arbitration Centre",
      country: "UAE",
      image: "/images/a-l-speaker21.jpg",
      linkedIn: "https://www.linkedin.com/in/antonin-sobek-42318511b/",
    },
  ];
  const attending = [
    {
      image: "images/Clyde.jpg",
    },
    {
      image: "images/Takeda Pharmaceuticals.jpg",
    },
    {
      image: "images/Precision Drilling.jpg",
    },
    {
      image: "images/a-l-attendees82.jpg",
    },
    {
      image: "images/a-l-attendees81.jpg",
    },
    {
      image: "images/a-l-attendees91.jpg",
    },

    {
      image: "images/a-l-attendees122.jpg",
    },
    {
      image: "images/a-l-attendees111.jpg",
    },
    {
      image: "images/a-l-speaker1223.jpg",
    },
    {
      image: "images/a-l-attendees31.png",
    },
    {
      image: "images/a-l-attendees32.jpg",
    },
    {
      image: "images/a-l-attendees33.jpg",
    },
    {
      image: "images/a-l-attendees23.jpg",
    },
    {
      image: "images/a-l-attendees22.jpg",
    },
    {
      image: "images/speakerLogo1.jpg",
    },
  ];
  const PlatinumSponsors = [
    {
      image: "/images/effectual_logo.png",
    },
   
  ];
  return (
    <div>
      <BannerDubaiLegal />
      <div className="container" style={{ marginTop: "4%" }}>
        <div className="section-title" style={{ marginTop: "30px" }}>
          <span> About the Event</span>
          <div className="bar"></div>
          <div style={{ margin: "10px 0px", textAlign: "justify" }}>
            We are very excited to announce our upcoming flagship event, the
            Global Legal Association Litigation Conference in Dubai, scheduled
            for February 14-15, 2024. This conference is expected to bring
            together 150 - 200 Heads of Legal Departments, General Counsels,
            Litigation Managers, Arbitration Heads, ADR's Professionals, Chief
            Dispute resolution, Risk & Compliance Professionals, Data Privacy
            Managers, Legal Attorneys & Professionals, Directors/Partners of Law
            Firms, and similar Service Providers.
            <br />
            We will discuss their operational challenges and provide solutions.
            <h5 style={{ margin: "10px 0px" }}>EVENT HIGHLIGHTS</h5>
            <ul>
              <li>Up to 150-200 Legal Counsels and Law Firm Partners</li>
              <li>5-10 Exhibitors</li>
              <li>35+ Speakers</li>
              <li>10+ Media Partners</li>
              <li>Business Dialogues</li>
              <li>Round Table Discussions</li>
              <li>Exclusive Case Study Presentations</li>
              <li> Keynote Addresses</li>
              <li>Qualified Business Leads</li>
              <li>Unique Networking Opportunities</li>
              <li>Invitations for C-Level Executives Only</li>
            </ul>
          </div>
        </div>
      </div>
      <NewSpeakers cardData={cardData} />
      <PlatinumSpon attending={PlatinumSponsors} />

      <Attendees attending={attending} />
      <OtherFooter />
    </div>
  );
};

export default DubaiLegal;
