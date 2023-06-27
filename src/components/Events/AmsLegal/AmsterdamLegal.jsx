import React from "react";
import OtherFooter from "../../Common/OtherFooter";
import Attendees from "../../HomeTwo/Attendees";
import NewSpeakers from "../../HomeTwo/NewSpeakers";
import LaxDiv from "../../Shared/LaxDiv";
import BannerAmsLegal from "./BannerAmsLegal";
import NextEventsLegal from "./NextEventsLegal";
import MediaPartners from "../../HomeTwo/MediaPartners";
import PlatinumSpon from "../../HomeTwo/PlatinumSpon";

const AmsterdamLegal = () => {
  const cardData = [
    {
      name: "Ritah Sarwari",
      desg: "Legal Counsel",
      company: "ING",
      country: "Netherlands",
      image: "/images/Ritah Sarwari.jpg",
      linkedIn: "https://www.linkedin.com/in/ritahsarwari/",
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
      name: "James Hall",
      desg: "CEO, Founder and General Counsel",
      company: "Global GC",
      country: "USA",
      image: "/images/James Hall.jpg",
      linkedIn: "https://www.linkedin.com/in/james-hall-98868a7/",
    },
    {
      name: "Dr Rob Vossen",
      desg: " Director",
      company: "CEG - Competition Economists Group",
      country: "Netherlands",
      image: "/images/Rob_Vossen.jpg",
      linkedIn: "https://www.linkedin.com/in/rob-vossen-871945a/",
    },
    {
      name: "Gary Brown",
      desg: " Chief Privacy Officer",
      company: "Westinghouse Electric Company",
      country: "United Kingdom",
      image: "/images/a-l-speaker85.jpg",
      linkedIn: "https://www.linkedin.com/in/gary-brown-37212621/",
    },
    {
      name: "Eoin Cunneen",
      desg: "Partner",
      company: "Flynn O'Driscoll LLP",
      country: "Ireland",
      image: "/images/Eoin_Cunneen.jpg",
      linkedIn: "https://www.linkedin.com/in/eoincunneen/",
    },
    {
      name: "David Curran",
      desg: "Partner",
      company: " Flynn O'Driscoll LLP",
      country: "Ireland",
      image: "/images/David_Curran.jpg",
      linkedIn: "https://www.linkedin.com/in/david-curran-94197b77/",
    },
    {
      name: "Joseph Benkel",
      desg: " Partner",
      company: "Shibolet. Law Firm",
      country: "Israel",
      image: "/images/a-l-speaker88.png",
      linkedIn: "https://www.shibolet.com/en/team/joseph-benkel/",
    },
    {
      name: "Sabrina Strassburger",
      desg: "Compliance Officer",
      company: "Damen",
      country: "Netherlands",
      image: "/images/a-l-speaker34.png",
      linkedIn:
        "https://www.linkedin.com/in/sabrina-strassburger-ph-d-29653a37/",
    },
    {
      name: "Ashraf Motei",
      desg: "Founder/Managing Partner",
      company: "Motei & Associates",
      country: "UAE",
      image: "/images/a-l-speaker30.jpg",
      linkedIn: "https://www.linkedin.com/in/ashrafmotei/",
    },
    {
      name: "Ayman Al-Wadi",
      desg: "Group Executive Chairman",
      company: "AW HOLDING INT'L",
      country: "UAE",
      image: "/images/a-l-speaker29.jpg",
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
      name: "Ahmed Afifi",
      desg: "Senior Commercial Manager",
      company: "",
      country: "KSA",
      image: "/images/a-l-speaker26.jpg",
      linkedIn: "https://www.linkedin.com/in/ahmed-afifi-90501b26/",
    },
    {
      name: "Irith Kist",
      desg: "Data Protection Officer",
      company: "The Netherlands Cancer Institute",
      country: "Netherlands",
      image: "/images/a-l-speaker25.jpg",
      linkedIn: "https://www.linkedin.com/in/irith-kist-9727769/",
    },
    {
      name: "Jan McSweeney",
      desg: "Member (Professor Wolfgang Kraft PhD)",
      company: "The United Nations international taxation experts",
      country: "Australia",
      image: "/images/a-l-speaker24.jpg",
      linkedIn: "https://www.linkedin.com/in/jpsmstorytime/",
    },
    {
      name: "Tatevik S. Karapetyan, PhD",
      desg: "Senior Researcher ",
      company: "Fondazione Giorgio Cini Onlus, Venice",
      country: "Armenia",
      image: "/images/a-l-speaker23.JPG",
      linkedIn: "https://www.linkedin.com/in/tatev-s-karapetyan-phd-35aa82200/",
    },
    {
      name: "Carlos Landazabal Angeli ",
      desg: "Compliance & Data Protection Officer",
      company: "Canadian Solar Inc",
      country: "Spain",
      image: "/images/a-l-speaker22.jpg",
      linkedIn: "https://www.linkedin.com/in/clandazabal/",
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
      name: "R Rishi",
      desg: "Founder & Principal",
      company: "Rishi & Partners",
      country: "Malaysia",
      image: "/images/a-l-speaker18.jpeg",
      linkedIn:
        "https://www.linkedin.com/in/r-rishi-%E7%91%9E%E7%86%99-9a351510/",
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
      name: "Ashok Venkateshmurthy",
      desg: "Partner",
      company: "Factum Law",
      country: "India",
      image: "/images/a-l-speaker15.jpg",
      linkedIn: "https://www.linkedin.com/in/ashokgv/",
    },
    {
      name: "Rajesh Ramanathan",
      desg: "Partner",
      company: "Factum Law",
      country: "India",
      image: "/images/a-l-speaker14.jpg",
      linkedIn: "https://www.linkedin.com/in/rajesh-ramanathan-5b87191/",
    },

    {
      name: "Chucks Obi",
      desg: "Compliance Professional",
      company: " ",
      country: "Netherlands",
      image: "/images/a-l-speaker13.jpg",
      linkedIn: "https://www.linkedin.com/in/chucks-obi-5227389b/",
    },
    {
      name: "Linda Mouaz",
      desg: "General Counsel",
      company: "Nestlé",
      country: "UAE",
      image: "/images/a-l-speaker12.jpg",
      linkedIn: " https://www.linkedin.com/in/linda-mouaz-93a11a119/",
    },
    {
      name: "Adrian Cole",
      desg: "  Board Member",
      company: "Adrian Cole FZ LLE",
      country: "UAE",
      image: "/images/speaker42.png",
      linkedIn:
        "https://www.linkedin.com/in/adrian-cole-b1a3ba5/?originalSubdomain=ae",
    },
    {
      name: "Yoav Salomon",
      desg: "Managing Partner",
      company: "Avniel, Salomon & Co ",
      country: "Israel ",
      image: "/images/speaker33.png",
      linkedIn: "https://www.linkedin.com/in/yoavsalomon/",
    },
    {
      name: "Galina Lyubcheva ",
      desg: "Legal Counsel ",
      company: "OpenPayd ",
      country: "Bulgaria ",
      image: "/images/a-l-speaker11.jpeg",
      linkedIn: "https://www.linkedin.com/in/galina-lyubcheva-7b9b8a52/",
    },
    {
      name: "Sameet Gambhir",
      desg: "Vice President (Corp. Law) & Company Secretary ",
      company: " DCM Shriram Ltd",
      country: "India",
      image: "/images/speaker8.jpg",
      linkedIn: " https://www.linkedin.com/in/sameet-gambhir-0107133/",
    },
    {
      name: " Pavle Bojkovski",
      desg: "Senior Commercial Legal Counsel",
      company: "Accenture",
      country: "Netherlands",
      image: "/images/a-l-speaker10.jpg",
      linkedIn: " https://www.linkedin.com/in/pavlebojkovski/",
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
      name: "Beatriz Ruiz-Beato",
      desg: "Global Head of Data Privacy",
      company: "NEC Corporation",
      country: "Spain",
      image: "/images/a-l-speaker8.jpg",
      linkedIn: " https://www.linkedin.com/in/beatrizruizbeato/",
    },
    {
      name: "John Giannakakis ",
      desg: "Senior Partner",
      company: "Hellenic Ministry of Migration and Asylum ",
      country: "Greece",
      image: "/images/a-l-speaker7.png",
      linkedIn: "https://www.linkedin.com/in/johngiannakakis/",
    },
    {
      name: "Berardino Tizzani",
      desg: "Legal Counsel",
      company: "NewCold",
      country: "Netherlands",
      image: "/images/a-l-speaker6.jpg",
      linkedIn: "https://www.linkedin.com/in/berardino-tizzani/",
    },
    {
      name: "Richard Milchior",
      desg: "Partner ",
      company: "Herald",
      country: "France",
      image: "/images/a-l-speaker5.jpg",
      linkedIn: "https://www.linkedin.com/in/richard-milchior/",
    },
    {
      name: "Ozan Akyurek",
      desg: "Partner ",
      company: "Jones Day",
      country: "France",
      image: "/images/a-l-speaker4.jpg",
      linkedIn: "https://www.linkedin.com/in/ozan-akyurek-6a22281/",
    },
    {
      name: " Renata Berzanskiene",
      desg: "General Counsel ",
      company: "ORLEN Lietuva, AB ",
      country: "Lithuania",
      image: "/images/a-l-speaker3.jpg",
      linkedIn: " https://www.linkedin.com/in/renata-berzanskiene-3363773/",
    },
    {
      name: "Dilara Kasapoğlu",
      desg: "Corporate Counsel ",
      company: " ",
      country: "Netherlands",
      image: "/images/a-l-speaker2.jpg",
      linkedIn: " https://www.linkedin.com/in/dilara-k/",
    },
    {
      name: "Nicolas Demigneux",
      desg: "Managing Partner ",
      company: "Stephenson Harwood",
      country: "France",
      image: "/images/speaker27.png",
      linkedIn: "https://www.linkedin.com/in/nicolas-demigneux-7181122/",
    },
    {
      name: "John Shehata, MSc, PhD ",
      desg: "Lawyer and Professional Faculty Member",
      company: "SDA Bocconi School of Management",
      country: "Italy",
      image: "/images/speaker47.png",
      linkedIn: " https://www.linkedin.com/in/jshehata/",
    },
    {
      name: "Dr. Dimitrios Athanasakis",
      desg: "Vice President Legal",
      company: "Hill International, Inc.",
      country: "Netherlands",
      image: "/images/a-l-speaker1.png",
      linkedIn: " https://www.linkedin.com/in/athanasakis-legalcounsel/",
    },
  ];
  const mediaPartners = [
    {
      image: "/images/a-l-media2.jpg",
      link: "https://exhibitorsvoice.com/",
    },
    {
      image: "/images/a-l-media1.png",
      link: "https://conventuslaw.com/",
    },
    {
      image: "/images/a-l-media3.png",
      link: "https://www.womensipworld.com/",
    },
    {
      image: "/images/a-l-media4.png",
      link: "https://www.gipmatrix.com/events",
    },
  ];
  const attending = [
    {
      image: "images/ING_Group.png",
    },
    {
      image: "images/Exalt-IP-4.3.png",
    },
    {
      image: "images/D&T Juris.png",
    },
    {
      image: "images/Fieldfisher.png",
    },
    {
      image: "images/Ripen Marine Contractors Ltd.jpg",
    },
    {
      image: "images/SDSAdvocates.png",
    },
    {
      image: "images/CEG_Logo_RGB_Peach.png",
    },
    {
      image: "images/Flynn O'Driscoll LLP-white background.jpg",
    },
    {
      image: "images/a-l-attendees84.jpg",
    },
    {
      image: "images/a-l-attendees88.jpg",
    },
    {
      image: "images/a-l-attendees35.png",
    },
    {
      image: "images/a-l-attendees31.png",
    },
    {
      image: "images/a-l-attendees30.jpg",
    },
    {
      image: "images/a-l-attendees29.png",
    },
    // {
    //   image: "images/a-l-attendees28.jpg",
    // },
    {
      image: "images/a-l-attendees27.jpg",
    },
    {
      image: "images/a-l-attendees26.jpg",
    },
    {
      image: "images/a-l-attendees25.png",
    },
    {
      image: "images/a-l-attendees24.jpg",
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
      image: "images/a-l-attendees18.png",
    },
    {
      image: "images/a-l-attendees17.jpg",
    },

    {
      image: "images/a-l-attendees16.jpg",
    },
    {
      image: "images/a-l-attendees15.png",
    },
    {
      image: "images/a-l-attendees14.png",
    },
    {
      image: "images/a-l-attendees13.png",
    },
    {
      image: "images/speakerLogo1.jpg",
    },
    {
      image: "images/speakerLogo8.jpg",
    },
    {
      image: "images/a-l-attendees12.png",
    },
    {
      image: "images/a-l-attendees11.jpg",
    },
    {
      image: "images/a-l-attendees10.jpg",
    },
    {
      image: "images/a-l-attendees9.jpg",
    },
    {
      image: "images/a-l-attendees8.png",
    },
    {
      image: "images/a-l-attendees6.jpg",
    },
    {
      image: "images/a-l-attendees5.jpg",
    },
    {
      image: "images/speakerLogo27.png",
    },
    {
      image: "images/speakerLogo51.jpg",
    },
    {
      image: "images/a-l-attendees2.jpg",
    },
    {
      image: "images/a-l-attendees1.jpg",
    },
  ];

  const PlatinumSponsors = [
    {
      image: "images/a-l-attendees88.jpg",
      link: "https://www.shibolet.com/en/",
    },
    {
      image: "images/a-l-attendees30.jpg",
      link: "https://alwadiholding.com/",
    },
    {
      image: "/images/effectual_logo.png",
      link: "https://www.effectualservices.com/",
    },
  ];
  return (
    <div>
      <BannerAmsLegal />
      {/* <NextEventsLegal /> */}
      <div className="container">
        <div className="section-title" style={{ marginTop: "30px" }}>
          <span> About the Event</span>
          <div className="bar"></div>
          <div style={{ margin: "10px 0px", textAlign: "justify" }}>
            We are very excited to announce our upcoming flagship event, the
            Global Legal Association Litigation Conference in Amsterdam, Europe,
            scheduled for September 4-5, 2023. This conference is expected to
            bring together 150 - 200 Heads of Legal Departments, General
            Counsels, Litigation Managers, Arbitration Heads, ADR's
            Professionals, Chief Dispute resolution, Risk & Compliance
            Professionals, Data Privacy Managers, Legal Attorneys &
            Professionals, Directors/Partners of Law Firms, and similar Service
            Providers.
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

      <MediaPartners attending={mediaPartners} />

      <Attendees attending={attending} />
      <OtherFooter />
    </div>
  );
};

export default AmsterdamLegal;
