import React from "react";
import MainBanner from "../Speakers/MainBanner";
import OtherFooter from "../Common/OtherFooter";
import NewSpeakers from "../HomeTwo/NewSpeakers";
import LaxDiv from "../Shared/LaxDiv";

const SpeakersAmsterdamIP = () => {
  const cardData = [
    {
      name: "Luca Valente",
      desg: "Co-Founder",
      company: "TRIPL Protection",
      country: "Italy",
      image: "/images/Luca Valente.jpg",
      linkedIn: "https://www.linkedin.com/in/luca-valente-11767616",
    },
    {
      name: "Deepika Dhar",
      desg: "IP Management & Technology transfer",
      company: "IIT Delhi",
      country: "India",
      image: "/images/Deepika Dhar.jpg",
      linkedIn: "https://www.linkedin.com/in/deepika-dhar-1492065/",
    },
    {
      name: "Samuel Deschamps",
      desg: "Partner",
      company: "IPSIDE - IP Law Firm",
      country: "France",
      image: "/images/Samuel Deschamps.jpg",
      linkedIn: "https://www.ipside.com/fr/component/contact/contact/65-samuel-deschamps",
    },
    {
      name: "Yiannos Georgiades",
      desg: "Managing Partner",
      company: "Y. GEORGIADES & ASSOCIATES LLC",
      country: " Cyprus",
      image: "/images/yiannos.georgiades.jpg",
      linkedIn: "https://www.linkedin.com/in/yiannosgeorgiades/",
    },
    {
      name: "Gaëtan Lassere",
      desg: "Managing Partner",
      company: "Laurent and Charras",
      country: " France",
      image: "/images/Lassere.jpg",
      linkedIn: "https://www.linkedin.com/in/gaetanlassere/",
    },
    {
      name: "Mr. Sachiv Kumar",
      desg: "Senior Partner",
      company: "SDS Advocates",
      country: " India",
      image: "/images/img5.jpg",
      linkedIn: "https://www.linkedin.com/in/sachiv-kumar-8a2a5517/",
    },
    {
      name: " Sonya Ebermann",
      desg: "Counsel",
      company: "WilmerHale",
      country: " UK",
      image: "/images/Ebermann_Sonya.jpg",
      linkedIn: "https://www.wilmerhale.com/en/people/sonya-ebermann",
    },
    {
      name: " Agnieszka Mencel",
      desg: "Associate General Counsel",
      company: "McKinsey & Company",
      country: " Poland",
      image: "/images/Agnieszka-logo.jpeg",
      linkedIn: " https://www.linkedin.com/in/agnieszka-mencel-15096bb1/",
    },
    {
      name: "Dr. Georg Müller",
      desg: "Head of IP",
      company: "TomTom",
      country: " Netherlands",
      image: "/images/Georgupdated.jpeg",
      linkedIn: "https://www.linkedin.com/in/georg-m%C3%BCller-a36056a6/",
    },
    {
      name: "Dawn Sims",
      desg: "Vice President and Assistant General Counsel",
      company: "JPMorgan Chase & Co.",
      country: "USA",
      image: "/images/Dawn.jpg",
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
  return (
    <React.Fragment>
      <MainBanner heading="Speakers - GLA  IP Amsterdam " lastLine="Speakers" />

      <NewSpeakers cardData={cardData} />
      <OtherFooter />
    </React.Fragment>
  );
};

export default SpeakersAmsterdamIP;
