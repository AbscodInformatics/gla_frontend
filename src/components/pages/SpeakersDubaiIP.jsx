import React from 'react'
import MainBanner from '../Speakers/MainBanner';
import OtherFooter from '../Common/OtherFooter';
import NewSpeakers from '../HomeTwo/NewSpeakers';
 
class SpeakerDubaiIP extends React.Component {
    render() {
      const cardData = [
        {
      name: "Firas Alchoufi",
      desg: "Managing Partner",
      company: "Bin Sevan Advocates & Legal Consultants",
      country: "UAE",
      image: "/images/speaker52.jpg",
      linkedIn:" https://www.linkedin.com/in/firasalchoufi/"
    },
  
        {
      name: "Nikita Vaidya",
      desg: "Senior Director",
      company: "Ankura",
      country: "UAE",
      image: "/images/speaker45.png",
      linkedIn:"https://www.linkedin.com/in/nikita-vaidya-4bb09518/"
    },
     {
      name: "John Shehata",
      desg: "Of Counsel",
      company: "Pirola Pennuto Zei & Associati",
      country: "Italy",
      image: "/images/speaker47.png",
      linkedIn:"https://www.linkedin.com/in/jshehata/"
        },
       {
      name: "Rajdeep Choudhury",
      desg: "Partner",
      company: "Archeus Law",
      country: "India",
      image: "/images/speaker51.png",
      linkedIn:"https://www.linkedin.com/in/rajdeep-choudhury/?originalSubdomain=in"
        },
     {
      name: "Miral Soboh",
      desg: "Owner & Founder",
      company: "SSA",
      country: "Australia",
      image: "/images/speaker53.png",
      linkedIn:" https://www.linkedin.com/in/miral-s-60a64bb6/"
    },

        {
      name: "Nick Braganza",
      desg: "Dispute Resolution Partner",
      company: "HFW",
      country: "UAE",
      image: "/images/speaker44.png",
      linkedIn: "https://www.linkedin.com/in/nick-braganza-49a87a19/"
    },
     {
      name: "Sergey Medvedev, PhD, LLM",
      desg: "International Lawyer | Partner",
      company: "GORODISSKY",
      country: "Russia",
      image: "/images/speaker41.png",
      linkedIn: "https://www.linkedin.com/in/sergey-medvedev-phd-llm-63b3262a/"
     },
      {
      name: "Yosr Hamza",
      desg: "Director, Legal & Compliance",
      company: "Gartner",
      country: "Asia",
      image: "/images/speaker39.jpg",
      linkedIn: "https://www.linkedin.com/in/yosrhamza/"
    },
     {
      name: "Nooshin Rahmani",
      desg: "Senior Associate ",
      company: "Horizons & Co Law Firm",
      country: "UAE",
      image: "/images/speaker43.jpg",
      linkedIn: "https://www.linkedin.com/in/nooshin-rahmani-05311166/"
    },
    {
      name: "Anurag Katarki",
      desg: "Lawyer",
      company: "Chambers of Anurag Katarki",
      country: "India",
      image: "/images/speaker50.png",
      linkedIn:"https://www.linkedin.com/in/anurag-katarki-9bb3691a1/"
    },
     {
      name: "Hugo Lodge",
      desg: "Senior Counsel ",
      company: "Al Tamimi & Company",
      country: "United Kingdom ",
      image: "/images/speaker49.png",
      linkedIn:"https://www.linkedin.com/in/hugo-daniel-lodge/"
    },
     {
      name: "Aniket Raj",
      desg: " Independent Practitioner",
      company: ". ",
      country: "India",
      image: "/images/speaker48.png",
      linkedIn:"https://www.linkedin.com/in/aniket-raj-7b06111b3/"
    },
    {
      name: "Robert Whitehead",
      desg: "Partner",
      company: "Hamdan Al Shamsi Lawyers & Legal Consultants",
      country: "UAE",
      image: "/images/speaker56.jpg",
      linkedIn:"https://www.linkedin.com/in/robertwhitehead/"
    },
    {
      name: "Muna Farid",
      desg: "Managing Director & Head of Legal",
      company: "Hatch DWC-LLC",
      country: "UAE",
      image: "/images/speaker55.png",
      linkedIn:"https://www.linkedin.com/in/muna-farid/"
    },
     {
      name: " Matthew Page",
      desg: "Partner",
      company: "Hadef & Partners",
      country: "UAE",
      image: "/images/speaker54.png",
      linkedIn:"https://www.linkedin.com/in/matthew-page-61016436/"
    },

        {
      name: "Kaushal Joshi",
      desg: "Director IPR & Legal",
      company: "Kashiv BioSciences LLC",
      country: "India",
      image: "/images/speaker46.png",
      linkedIn:"https://www.linkedin.com/in/kaushal-joshi-56b5246/"
    },
  {
      name: " Sarah Malik",
      desg: "CEO",
      company: "SOL International Ltd",
      country: "UAE",
      image: "/images/speaker40.png",
      linkedIn:"https://www.linkedin.com/in/sarah-malik-fciarb-sol-international-ltd-3439398/"
    },
    {
      name: "Mohammed Noaman",
      desg: "General Counsel",
      company: "GE Power",
      country: "UAE",
      image: "/images/speaker38.jpg",
      linkedIn:"https://www.linkedin.com/in/mohammed-noaman-01a33911/"
    },

     {
      name: "Adrian Cole",
      desg: "  Board Member",
      company: "Adrian Cole FZ LLE",
      country: "UAE",
      image: "/images/speaker42.png",
      linkedIn: "https://www.linkedin.com/in/adrian-cole-b1a3ba5/?originalSubdomain=ae"
    },
     {
      name: "Elias Ahonen",
      desg: "Author",
      company: "Cointelegraph",
      country: "UAE",
      image: "/images/speaker37.png",
      linkedIn: " https://www.linkedin.com/in/eliasahonen/"
    },
    {
      name: "Niten Chauhan",
      desg: " Partner and Head of Restructuring ",
      company: "Harold Benjamin",
      country: " United Kingdom",
      image: "/images/speaker36new.jpg",
      linkedIn: " https://www.linkedin.com/in/niten-chauhan-463a2147/"
    },
       {
      name: "Niten Chauhan",
      desg: " Partner and Head of Restructuring ",
      company: "Harold Benjamin",
      country: " United Kingdom",
      image: "/images/speaker36new.jpg",
      linkedIn: " https://www.linkedin.com/in/niten-chauhan-463a2147/"
    },
    {
      name: "Sadique Mohd",
      desg: "  Head of International Arbitration ",
      company: "ALAIDAROUS Advocates & Legal Consultants",
      country: " UAE",
      image: "/images/speaker34.png",
      linkedIn: " https://www.linkedin.com/in/sadique-mohd-63920923b/"
    },
      {
      name: "Anastasia Skovpen",
      desg: "Intellectual Property Lawyer",
      company: "Nestle",
      country: " Russia",
      image: "/images/speaker14.jpg",
      linkedIn: "https://www.linkedin.com/in/anastasia-skovpen-329496a0/"
    },
   {
      name: "Raghvendra verma",
      desg: "Group Head",
      company: "ISON Group",
      country: " UAE",
      image: "/images/speaker15.jpg",
      linkedIn: "https://www.linkedin.com/in/vermaraghvendra/?originalSubdomain=ae"
    },
   {
      name: "Shaima Al Sayed",
      desg: "Legal Counsel ",
      company: "General Motors Africa & Middle East",
      country: " UAE",
      image: "/images/speaker16.jpg",
      linkedIn: "https://www.linkedin.com/in/shaima-al-sayed-55b95017/"
    },
   {
      name: "Shreya Maheshwari",
      desg: "Corporate Counsel",
      company: "Amazon",
      country: " India",
      image: "/images/speaker2.jpg",
      linkedIn:"https://www.linkedin.com/in/maheshwarishreya/"
    },
    {
      name: " Astrid Gobardhan ",
      desg: "Senior Global Privacy Counsel",
      company: " VFS Global",
      country: " UAE",
      image: "/images/speaker6.jpg",
      linkedIn:"https://www.linkedin.com/in/astrid-gobardhan-94030221/"
    },
    {
      name: " Suren Gortsunyan ",
      desg: "Managing Partner / Founder",
      company: "Rybalkin, Gortsunyan & Partners",
      country: " Russia",
      image: "/images/speaker25.jpg",
      linkedIn:"https://www.linkedin.com/in/suren-gortsunyan-434a881/"
    },
     {
      name: "Taron Simonyan",
      desg: " Founding Partner",
      company: "ELL PARTNERSHIP Law Firm",
      country: " Armenia",
      image: "/images/speaker26.jpg",
      linkedIn:"https://www.linkedin.com/in/taron-simonyan-41bb9813/"
    },
     {
      name: "Nicolas Demigneux",
      desg: " Managing Partner",
      company: "Stephenson Harwood",
      country: "France",
      image: "/images/speaker27.png",
      linkedIn:"https://www.linkedin.com/in/nicolas-demigneux-7181122/"
    },
     {
      name: "Ahmad Zaza",
      desg: "Partner",
      company: " Al Tamimi & Company",
      country: "UAE",
      image: "/images/speaker28.jpg",
      linkedIn:"https://www.linkedin.com/in/ahmad-zaza-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B8%D8%A7%D8%B8%D8%A7-2489363b/"
    },
    {
      name: "Ahmad Zaza",
      desg: "Partner",
      company: " Al Tamimi & Company",
      country: "UAE",
      image: "/images/speaker28.jpg",
      linkedIn:"https://www.linkedin.com/in/ahmad-zaza-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B8%D8%A7%D8%B8%D8%A7-2489363b/"
    },
    {
      name: "Dr. Laura Voda",
      desg: " Of Counsel",
      company: "Fichte & Co.",
      country: "UAE",
      image: "/images/speaker32.jpg",
      linkedIn:"https://www.linkedin.com/in/mlvoda/"
    },
     {
      name: "Yoav Salomon",
      desg: " Managing Partner",
      company: "Avniel, Salomon & Co",
      country: "Israel",
      image: "/images/speaker33.png",
      linkedIn:"https://www.linkedin.com/in/yoavsalomon/"
    },
     {
      name: "SAMEET GAMBHIR",
      desg: " Vice President & Company Secretary",
      company: "DCM Shriram LTD",
      country: "India",
      image: "/images/speaker8new.jpg",
      linkedIn:"https://www.linkedin.com/in/sameet-gambhir-0107133/?originalSubdomain=in"
     },
       {
      name: "Noor Maki",
      desg: " Senior Legal Counsel",
      company: " Ford Motor Company",
      country: "Middle East",
      image: "/images/speaker9new.jpeg",
      linkedIn:"https://www.linkedin.com/in/noor-maki-1847684b/?originalSubdomain=ae"
    },
     {
      name: "Shilpa Sharma",
      desg: "Vice President Legal & Chairperson of ICC",
      company: " Inox Leisure Limited",
      country: "India",
      image: "/images/speaker17.jpeg",
      linkedIn:"https://www.linkedin.com/in/shilpa-sharma-079a675/?originalSubdomain=in"
    },
     {
      name: "Ahmad Saleh",
      desg: " Partner, Head of Innovation",
      company: "  Al Tamimi & Company",
      country: "UAE",
      image: "/images/speaker18.jpeg",
      linkedIn:"https://www.linkedin.com/in/salehip/"
    },
      {
      name: "Aparajita Mishra",
      desg: "Regional Legal Counsel",
      company: "Mott MacDonald",
      country: "UAE",
      image: "/images/speaker7.jpg",
      linkedIn:"https://www.linkedin.com/in/aparajita-mishra-24b8433b/"
    },
      {
      name: "Ismaeel Mohammad Beegun",
      desg: "Legal Advisor",
      company: "Counter Terrorism Finance",
      country: "UAE",
      image: "/images/speaker35.png",
      linkedIn:"https://www.linkedin.com/in/ismaeel-mohammad-beegun-004b84117/"
    },
      {
      name: "Menna-t-allah M. El-Kotamy",
      desg: " Executive Director",
      company: " Egyptian Innovation Bank",
      country: "Egypt",
      image: "/images/speaker20.jpg",
      linkedIn:"https://www.linkedin.com/in/menna-t-allah-m-el-kotamy-bb026341/"
    },
      {
      name: "Manoj Poonia",
      desg: " Vice President",
      company: "Effectual Services",
      country: "India",
      image: "/images/speaker21.jpg",
      linkedIn:"https://www.linkedin.com/in/pooniamanoj/"
    },
      {
      name: "Ram Tenneti",
      desg: " Vice President",
      company: "Effectual Services",
      country: "India",
      image: "/images/speaker22.jpg",
      linkedIn:"https://www.linkedin.com/in/ram-tenneti-6a91976/"
    },
      {
      name: "Andrea Sesin-Tabarelli",
      desg: "Compliance Manager ",
      company: "NESTLÉ United Arab Emirates",
      country: "UAE",
      image: "/images/speaker1new.jpeg",
      linkedIn:"https://ae.linkedin.com/in/andrea-sesin-tabarelli-1a187958"
    },
       {
      name: "Karim El Helaly",
      desg: "General Counsel and Data Governance",
      company: "Lnddo",
      country: "UAE",
      image: "/images/speaker23.jpg",
      linkedIn:"https://www.linkedin.com/in/karim-el-helaly-63b7342/"
    },
       {
      name: "Dr. Carsten Witzke",
      desg: "Disputes Partner",
      company: " Ebner Stolz",
      country: "Germany",
      image: "/images/speaker24.jpg",
      linkedIn:"https://www.linkedin.com/in/dr-carsten-witzke-3763902b/"
    },
        {
      name: "Henzie Healley",
      desg: "Managing Partner",
      company: "The Counsel Services (TCS)",
      country: "UAE",
      image: "/images/speaker10new.jpg",
      linkedIn:"https://www.linkedin.com/in/henzie-healley-7b83b267/"
    },
   {
      name: "Bijan Brahmbhatt",
      desg: "Senior Corporate Counsel",
      company: "Precision Drilling",
      country: "UAE",
      image: "/images/speaker11.jpg",
      linkedIn:" https://www.linkedin.com/in/bijan-brahmbhatt-power-profile"
    },
   {
      name: "Tobias Speer",
      desg: "Group Head-Legal",
      company: "Easa Saleh Al Gurg Group",
      country: "UAE",
      image: "/images/speaker12.jpg",
      linkedIn:"https://www.linkedin.com/in/tobiasspeer/"
    },
   {
      name: "Sean Yates",
      desg: "Barrister and Arbitrator",
      company: "Outer Temple Chambers (FCIArb)",
      country: "UAE",
      image: "/images/speaker13.jpeg",
      linkedIn:" https://www.linkedin.com/in/sean-yates-fciarb-6b503611/"
    },
   {
      name: "Sean Michael Hugo",
      desg: "Partner",
      company: "CBBG Group",
      country: "UAE",
      image: "/images/speaker29.jpg",
      linkedIn:"https://www.linkedin.com/in/seanhugo/?originalSubdomain=ae"
    },
   {
      name: "Malek HANNOUF",
      desg: "Head of Intellectual Property department",
      company: " Louis Vuitton",
      country: "UAE",
      image: "/images/speaker30.jpg",
      linkedIn:"https://www.linkedin.com/in/malek-hannouf-37177228/"
    },
   {
      name: "Farid Karachiwala",
      desg: "Partner",
      company: " J. Sagar Associates",
      country: "India",
      image: "/images/speaker31.jpg",
      linkedIn:"https://www.linkedin.com/in/farid-karachiwala-4925b017b/"
    },
    {
      name: "Olga Simachkova",
      desg: "Corporate Counsel",
      company: "Caterpillar SARL",
      country: "UAE",
      image: "/images/speaker3.jpg",
      linkedIn:"https://www.linkedin.com/in/olga-simachkova-29b1854/"
    },
    {
      name: "Saloni Tuteja",
      desg: "Business Conduct Counsel",
      company: "Gilead Sciences, Middle East",
      country: "UAE",
      image: "/images/speaker4.jpg",
      linkedIn:"https://www.linkedin.com/in/saloni-tuteja-3b40151a/"
    },
    
     {
      name: " Dr. Mohamed Elmogy",
      desg: "Regional Legal Counsel",
      company: " Siemens Energy",
      country: "UAE",
      image: "/images/speaker5new.jpg",
      linkedIn:"https://www.linkedin.com/in/elmogy/"
    }

  ]
  
 
        return (
            <React.Fragment>
                <MainBanner heading="Speakers - GLA IP Dubai" lastLine="Speakers" />
                <NewSpeakers cardData={cardData}/>
                <OtherFooter />
            </React.Fragment>
        );
    }
}
 
export default SpeakerDubaiIP;