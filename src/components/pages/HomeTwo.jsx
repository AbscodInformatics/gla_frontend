import React from "react";
import lax from "lax.js";
import MainBanner from "../HomeTwo/MainBanner";
import CountDown from "../HomeTwo/CountDown";
import About from "../HomeTwo/About";
import WhyUs from "../Common/WhyUs";
import NewSpeakers from "../HomeTwo/NewSpeakers";
import Motive from "../HomeThree/WhyUs";

import Pricing from "../HomeTwo/Pricing";

import Footer from "../Common/Footer";
import GoTop from "../Shared/GoTop";
import SponsorsForm from "../Common/SponsorsForm";

import Leadership from "../HomeTwo/Leadership";
import Attendees from "../HomeTwo/Attendees";
import HomeForm from "../Common/HomeForm";
import { Box } from "@material-ui/core";
import AwardForm from "../Common/AwardForm";
import PreloaderPayment from "../Shared/PreloaderPayment";
import ExhibitionLogo from "../HomeTwo/ExhibitionLogo";
import Amsterdam from "../HomeTwo/Amsterdam";
import AmsterdamNew from "../HomeTwo/AmsterdamNew";
import OurEvents from "../HomeTwo/Our_events";
import WhoShouldAttend from "../HomeTwo/WhoShouldAttend";

class HomeTwo extends React.Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function (x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);

    this.state = {
      open: false,
      award: false,
      isSubmit: false,
      loading: false,
    };

    // this.state = {
    //   openSpeak: false,
    // };
    //  this.state = {
    //   openPrice: false,
    // };
  }
  updateSponsorData = () => {
    this.setState({ openSponsor: !this.state.openSponsor });
    console.log("update sponsor data");
  };
  updateAward = () => {
    this.setState({ award: !this.state.award });

    this.setState({ openSponsor: !this.state.openSponsor });

    console.log("update award data");
  };

  updateLoading = () => {
    this.state.loading
      ? this.setState({ loading: false })
      : this.setState({ loading: true });
    console.log(this.state.loading);
    console.log("update loading");
  };

  //  updateSpeakData = () => {
  //   this.setState({ openSpeak: !this.state.openSpeak });
  //  };
  //    updatePriceData = () => {
  //   this.setState({ openPrice: !this.state.openPrice });
  // };

  render() {
    // setTimeout(() => {
    //   this.setState({openSponsor:true})
    // }, 1500);
    const attending = [
      {
        image: "images/speakerLogo1.jpg",
      },
      {
        image: "images/speakerLogo2.jpg",
      },
      {
        image: "images/speakerLogo4.jpg",
      },
      {
        image: "images/speakerLogo5.jpg",
      },
      {
        image: "images/speakerLogo6.jpg",
      },
      {
        image: "images/speakerLogo7.jpg",
      },
      {
        image: "images/speakerLogo8.jpg",
      },
      {
        image: "images/speakerLogo9.jpg",
      },
      {
        image: "images/speakerLogo10.jpg",
      },
      {
        image: "images/speakerLogo11.jpg",
      },
      {
        image: "images/speakerLogo12.jpg",
      },
      {
        image: "images/speakerLogo13.jpg",
      },
      {
        image: "images/speakerLogo14.jpg",
      },
      {
        image: "images/speakerLogo15.jpg",
      },
      {
        image: "images/speakerLogo16.jpg",
      },
      {
        image: "images/speakerLogo17.png",
      },
      {
        image: "images/speakerLogo19.jpg",
      },
      {
        image: "images/speakerLogo20.jpg",
      },
      {
        image: "images/speakerLogo21.png",
      },
      {
        image: "images/speakerLogo22.png",
      },
      {
        image: "images/speakerLogo23.png",
      },
      {
        image: "images/speakerLogo24.jpg",
      },
      {
        image: "images/speakerLogo25.jpg",
      },
      {
        image: "images/speakerLogo26.jpg",
      },
      {
        image: "images/speakerLogo27.png",
      },
      {
        image: "images/speakerLogo28.jpg",
      },
      {
        image: "images/speakerLogo29.jpg",
      },
      {
        image: "images/speakerLogo30.jpg",
      },
      {
        image: "images/speakerLogo31.jpg",
      },
      {
        image: "images/speakerLogo32.jpg",
      },
      {
        image: "images/speakerLogo33.jpg",
      },
      {
        image: "images/speakerLogo34.jpg",
      },
      {
        image: "images/speakerLogo35.jpg",
      },
      {
        image: "images/speakerLogo36.jpg",
      },
      {
        image: "images/speakerLogo37.avif",
      },
      {
        image: "images/speakerLogo38.jpg",
      },
      {
        image: "images/speakerLogo39.jpg",
      },
      {
        image: "images/speakerLogo40.jpg",
      },
      {
        image: "images/speakerLogo41.jpg",
      },
      {
        image: "images/speakerLogo42.jpg",
      },
      {
        image: "images/speakerLogo43.jpg",
      },
      {
        image: "images/speakerLogo44.jpg",
      },
      {
        image: "images/speakerLogo45.png",
      },
      {
        image: "images/speakerLogo46.jpg",
      },
      {
        image: "images/speakerLogo47.jpg",
      },
      {
        image: "images/speakerLogo48.jpg",
      },
      {
        image: "images/speakerLogo49.jpg",
      },
      {
        image: "images/speakerLogo50.png",
      },
      {
        image: "images/speakerLogo51.jpg",
      },
      {
        image: "images/speakerLogo52.png",
      },
      {
        image: "images/speakerLogo53.png",
      },
      {
        image: "images/speakerLogo54.jpg",
      },
      {
        image: "images/speakerLogo55.jpg",
      },
      {
        image: "images/speakerLogo56.png",
      },
      {
        image: "images/speakerLogo57.jpg",
      },
      {
        image: "images/speakerLogo58.jpg",
      },
      {
        image: "images/speakerLogo59.png",
      },
      {
        image: "images/speakerLogo60.png",
      },
      {
        image: "images/speakerLogo61.png",
      },
      {
        image: "images/speakerLogo62.jpg",
      },
      {
        image: "images/speakerLogo63.jpg",
      },
      {
        image: "images/speakerLogo64.jpeg",
      },
      {
        image: "images/speakerLogo65.png",
      },
      {
        image: "images/speakerLogo66.jpg",
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

    return this.state.loading ? (
      <PreloaderPayment />
    ) : (
      <React.Fragment>
        <MainBanner
        // updateData={this.updateSponsorData}
        />

        {!this.state.openSponsor && (
          <HomeForm
            updateData={this.updateSponsorData}
            updateAward={this.updateAward}
          />
        )}
        {this.state.award && (
          <AwardForm
            updateData={this.updateAward}
            amount="399"
            currency="USD"
            isSubmit={this.state.isSubmit}
            setLoading={this.updateLoading}
          />
        )}

        {/* {this.state.openSpeak && <SpeakersForm formName="Want to become a Speaker" updateData={this.updateSpeakData} />}
        {this.state.openPrice && <SpeakersForm formName="Hurry up!  Buy Tickets Now" updateData={this.updatePriceData} />} */}

        <CountDown />
        <OurEvents />
        {/* <Amsterdam/> */}
        {/* <AmsterdamNew/> */}
        {/* <About /> */}
        {/* <Motive /> */}
        {/* Why Choose Us Area */}
        <WhyUs />
        <WhoShouldAttend />
        {/* <Leadership/> */}
        {/* Speakers Area */}
        {/* <NewSpeakers /> */}
        {/* <WhoAttendTwo/> */}
        {/* Schedule Area */}
        {/* <EventSchedules /> */}
        {/* FunFacts Area */}
        {/* <FunFact /> */}
        {/* Pricing Area */}
        <ExhibitionLogo />
        <Attendees attending={attending} />
        {/* <Pricing  updateData={this.updatePriceData} /> */}
        {/* Partner Area */}
        {/* <Partner /> */}
        {/* Blog Area */}
        {/* <LatesNews /> */}
        {/* Buy Tickets Area */}
        {/* <BuyTicket /> */}
        {/* Subscribe Area */}
        {/* <Subscribe /> */}
        {/* Footer Area */}
        <Footer />
        {/* Back Top top */}
        <h1 style={{ display: "none" }}>GLobal Legal Asscoiation</h1>
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default HomeTwo;
