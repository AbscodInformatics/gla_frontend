import React from "react";
import OtherFooter from "../../Common/OtherFooter";
import Attendees from "../../HomeTwo/Attendees";
import NewSpeakers from "../../HomeTwo/NewSpeakers";
import BannerAmsIp from "./BannerAmsIP";
import NextEvents from "./NextEventsIP";
import PlatinumSpon from "../../HomeTwo/PlatinumSpon";

const AmsterdamIp = () => {
  const cardData = [
    
    {
      name: " Agnieszka Mencel",
      desg: "Associate General Counsel",
      company: "McKinsey & Company",
      country: " Poland",
      image: "/images/Agnieszka-logo.jpeg",
      linkedIn: " https://www.linkedin.com/in/agnieszka-mencel-15096bb1/",
    },
    {
      name: "George Mueller",
      desg: "Head of IP",
      company: "TomTom",
      country: " Netherlands",
      image: "/images/Georg.jpeg",
      linkedIn: "https://www.linkedin.com/in/georg-m%C3%BCller-a36056a6/",
    },
    {
      name: "Dawn Sims",
      desg: "Vice President and Assistant General Counsel",
      company: "JPMorgan Chase & Co.",
      country: "USA",
      image: "/images/Solid_white.png",
      linkedIn: "https://www.linkedin.com/in/dawn-s-4930245/",
    },
    {
      name: " DeFeng(Devin) SONG",
      desg: " Partner",
      company: "Fieldfisher",
      country: "China",
      image: "/images/DeFeng.jpeg",
      linkedIn: "https://www.linkedin.com/in/songdefeng/",
    },
    {
      name: "Julius Handler",
      desg: "Associate",
      company: "Morrison & Foerster LLP",
      country: "UK",
      image: "/images/Julius Handler.jpg",
      linkedIn: "https://www.mofo.com/people/julius-handler",
    },
    {
      name: "Avi Ordo",
      desg: "Partner",
      company: "S. Horowitz & Co.",
      country: "Israel",
      image: "/images/Adv. Avi Ordo - Color backround.jpg",
      linkedIn: "https://www.linkedin.com/in/avi-ordo-60405114/",
    },
    {
      name: "Dr. Wim Maas",
      desg: "Partner",
      company: "Taylor Wessing",
      country: "Netherlands",
      image: "/images/Maas-Wim-sit-mobile.jpg",
      linkedIn:
        "https://www.taylorwessing.com/en/people/netherlands/amsterdam/wim-maas",
    },
    {
      name: "John Pryor",
      desg: "CEO / Founder",
      company: "Exalt IP Business Intellectual Property",
      country: "UK",
      image: "/images/John Pryor.jpg",
      linkedIn: "https://www.linkedin.com/in/john-pryor-gb/",
    },
    {
      name: "Ayman Al-Wadi",
      desg: "Group Executive Chairman",
      company: "AW HOLDING INT'L",
      country: "UAE",
      image: "/images/Ayman Al-Wadi.jpeg",
      linkedIn: "https://www.linkedin.com/in/ayman-al-wadi/",
    },
    {
      name: "Mirjam Ros",
      desg: "Author",
      company: "The Innovation Matrix",
      country: "Netherlands",
      image: "/images/a-l-speaker28.jpg",
      linkedIn: "https://www.linkedin.com/in/mirjamros/",
    },
    {
      name: "Alejandro Llosa",
      desg: "Senior Legal Counsel ",
      company: "Accenture",
      country: "Ireland",
      image: "/images/a-l-speaker27.jpg",
      linkedIn: "https://www.linkedin.com/in/alejandrollosa/",
    },
    {
      name: "Sukla Chandra",
      desg: "Senior Managing Director",
      company: "GE",
      country: "India",
      image: "/images/a-l-speaker20.png",
      linkedIn: "https://www.linkedin.com/in/sukla-chandra-84a8ba13/",
    },
    {
      name: "Ray Lei ZHAO, LL.M",
      desg: "Senior Partner",
      company: "Unitalen Attorneys at Law ",
      country: "China",
      image: "/images/a-l-speaker19.jpg",
      linkedIn: "https://www.linkedin.com/in/ray-lei-zhao-ll-m-08621a62/",
    },
    {
      name: "Onur Korucu",
      desg: "Vice President",
      company: "TerzionDx",
      country: "Ireland",
      image: "/images/a-l-speaker17.png",
      linkedIn: "https://www.linkedin.com/in/onur-korucu-73a9b47b/",
    },
    {
      name: "Mahmoud Shaarawy",
      desg: "Chief Legal and Compliance Officer",
      company: "HSA Group",
      country: "Egypt",
      image: "/images/a-l-speaker16.jpg",
      linkedIn: "https://www.linkedin.com/in/shaarawy/",
    },

    {
      name: "Beatriz Ruiz-Beato",
      desg: "Global Head of Data Privacy",
      company: "NEC Corporation",
      country: "Spain",
      image: "/images/a-l-speaker8.jpg",
      linkedIn: " https://www.linkedin.com/in/beatrizruizbeato/",
    },
    {
      name: "Ahmad Saleh",
      desg: "Partner",
      company: "Al Tamimi & Company",
      country: "UAE",
      image: "/images/a-l-speaker9.jpg",
      linkedIn: " https://www.linkedin.com/in/salehip/",
    },
    {
      name: " Pavle Bojkovski",
      desg: "Senior Commercial Legal Counsel",
      company: "Sentia Group",
      country: "Netherlands",
      image: "/images/a-l-speaker10.jpg",
      linkedIn: " https://www.linkedin.com/in/pavlebojkovski/",
    },
    {
      name: "Sameet Gambhir",
      desg: "Vice President (Corp. Law) & Company Secretary ",
      company: " DCM Shriram Ltd",
      country: "India",
      image: "/images/speaker8.jpg",
      linkedIn: " https://www.linkedin.com/in/sameet-gambhir-0107133/",
    },
  ];
  const attending = [
    {
      image: "images/McK_Logo_RGB_DeepBlue.png",
    },
    {
      image: "images/TomTom-Logo.png",
    },
    {
      image: "images/sangam-university.jpg",
    },
    {
      image: "images/Dawn-Sims-logo.png",
    },
    {
      image: "images/GEORGEYYIANGOU.jpeg",
    },
    {
      image: "images/100 years english_page-0001.jpg",
    },
    {
      image: "images/Pineal Legal Advocates LLP.png",
    },
    {
      image: "images/Morrison & Foerster LLP.png",
    },
    {
      image: "images/TW_LOGO_GROEN_PNG.png",
    },
    {
      image: "images/Exalt-IP-4.3.png",
    },
    {
      image: "images/a-l-attendees21.png",
    },
    {
      image: "images/a-l-attendees20.png",
    },
    {
      image: "images/a-l-attendees19.jpg",
    },
    {
      image: "images/a-l-attendees16.jpg",
    },
    {
      image: "images/a-l-attendees15.png",
    },
    {
      image: "images/a-l-attendees9.jpg",
    },
    {
      image: "images/a-l-attendees1.jpg",
    },
    {
      image: "images/a-l-attendees12.png",
    },
    {
      image: "images/speakerLogo8.jpg",
    },
  ];

  const PlatinumSponsors = [
    {
      image: "/images/effectual_logo.png",
    },
  ];
  return (
    <div>
      <BannerAmsIp />
      {/* <NextEvents /> */}
      <div className="container" style={{ marginTop: "2%" }}>
        <div className="section-title">
          <span> About the Event</span>

          <div className="bar"></div>
          <div style={{ margin: "10px 0px", textAlign: "justify" }}>
            We are very happy to announce our upcoming flagship event, the GLA
            Intellectual Property Conference (GLAIPC) in Amsterdam, Europe,
            scheduled for September 5-6, 2023. This conference is expected to
            bring together 150 - 200 Heads of IP Depts., IP Counsel, Patent
            Managers, Chief IP Officers, Trademark Managers, Risk & Compliance
            Professionals, Data Privacy Officers, Head of Patents, Patent
            Attorneys, IP Tech Professionals, IP Law Firm Partners, Directors
            Data Privacy & IP, and similar Service Providers. The attendees in
            our conference will share their operational difficulties related to
            IP, Risk, patent, trademark, security, CCPA, GDPR, compliance, data
            privacy, AI, legal tech Innovations, automation, machine learning
            and e-discovery. However, this list is not exhaustive. Let
            participate in our conference to find out the solution to these
            challenges through meeting the right service provider.
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
      </div>
      <NewSpeakers cardData={cardData} />
      <PlatinumSpon attending={PlatinumSponsors} />
      <Attendees attending={attending} />
      <OtherFooter />
    </div>
  );
};

export default AmsterdamIp;
