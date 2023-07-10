import React from "react";
import MainBanner from "../Speakers/MainBanner";
import OtherFooter from "../Common/OtherFooter";
import NewSpeakers from "../HomeTwo/NewSpeakers";
import LaxDiv from "../Shared/LaxDiv";

const SpeakersAmsterdamIP = () => {
  const cardData = [
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
      linkedIn: "https://www.taylorwessing.com/en/people/netherlands/amsterdam/wim-maas",
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
  return (
    <React.Fragment>
      <MainBanner heading="Speakers - GLA  IP Amsterdam " lastLine="Speakers" />

      <NewSpeakers cardData={cardData} />
      <OtherFooter />
    </React.Fragment>
  );
};

export default SpeakersAmsterdamIP;
