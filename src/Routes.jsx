import React, { lazy, Suspense } from "react";
import Preloader from "./components/Shared/Preloader";
import ScrollToTop from "./components/Common/ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeTwo from "./components/pages/HomeTwo";
import Navigation from "./components/Navigation/Navigation";
import PricingAMSIp from "./components/IpRegistration/PricingPage";
import PricingLt from "./components/LTRegistration/PricingLt";
import PricingPageLt from "./components/LTRegistration/PricingPageLt";
import Aboutus from "./components/AboutUs/Aboutus";
import Awards from "./components/Awards/Index"
import PricingIpDubai from "./components/IpRegistrationDubai/PricingIPDubai";
import PricingLegalDubai from "./components/LTRegistrationDubai/PricingDubaiLt";

const Contact = lazy(() => import("./components/pages/Contact"));
const Policies = lazy(() => import("./components/pages/Policies"));

// import Speakers from "./components/pages/Speakers";
const SpeakersAmsterdamIp = lazy(() =>
  import("./components/pages/SpeakersAmsterdamIP")
);
const SpeakersAmsterdamLegal = lazy(() =>
  import("./components/pages/SpeakersAmsLegal")
);
const SpeakersDubaiIP = lazy(() =>
  import("./components/pages/SpeakersDubaiIP")
);
const SpeakersDubaiLegal = lazy(() =>
  import("./components/pages/SpeakersDubaiLegal")
);
const EventAmsterdamIp = lazy(() =>
  import("./components/Events/AmsIP/AmsterdamIp")
);
const EventAmsterdamLegal = lazy(() =>
  import("./components/Events/AmsLegal/AmsterdamLegal")
);
const EventDubaiIp = lazy(() =>
  import("./components/Events/DubaiIP/DubaiIp.jsx")
);
const EventDubaiLegal = lazy(() =>
  import("./components/Events/DubaiLegal/DubaiLegal")
);
const AmsIpSchedulePage = lazy(() =>
  import("./components/Ams-IP-Schedule/AmsIpSchedulePage")
);
const AmsLegalSchedulePage = lazy(() =>
  import("./components/Ams-Legal-Schedule/AmsLegalSchedulePage")
);
const DubaiIPSchedulePage = lazy(() =>
  import("./components/Dubai-IP-Schedule/DubaiIpSchedulePage")
);
const DubaiLegalSchedulePage = lazy(() =>
  import("./components/Dubai-Legal-Schedule/DubaiLegalSchedulePage")
);
const PastEvents = lazy(() =>
  import("./components/Events/PastEvents/Dubai2023")
);

// import Chatbot from "react-chatbot-kit";
// import PricingOne from "./components/pages/PricingOne";
// Conditionally render Navigation
const renderNavigation = () => {
  if (
    !(
      window.location.pathname === "/login" ||
      window.location.pathname === "/signup" ||
      window.location.pathname === "/coming-soon" ||
      window.location.pathname === "/error-404"
    )
  ) {
    return <Navigation />;
  }
};

const AppRouter = () => {
  return (
    <Router>
      {renderNavigation()}
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={HomeTwo} />
          <Suspense fallback={<Preloader />}>
            <Route
              path="/speakers-amsterdam-ip"
              exact
              component={SpeakersAmsterdamIp}
            />
            <Route
              path="/speakers-amsterdam-legal"
              exact
              component={SpeakersAmsterdamLegal}
            />

            <Route
              path="/speakers-dubai-ip"
              exact
              component={SpeakersDubaiIP}
            />
            <Route
              path="/speakers-dubai-legal"
              exact
              component={SpeakersDubaiLegal}
            />

            <Route path="/past-events" exact component={PastEvents} />

            <Route path="/pricing-ip-ams" exact component={PricingAMSIp} />
            <Route path="/pricing-legal-ams" exact component={PricingPageLt} />
            <Route path="/pricing-ip-dubai" exact component={PricingIpDubai} />
            <Route
              path="/pricing-legal-dubai"
              exact
              component={PricingLegalDubai}
            />

            <Route path="/about-us" exact component={Aboutus} />
            <Route path="/Awards" exact component={Awards} />
            <Route
              path="/events-amsterdam-ip"
              exact
              component={EventAmsterdamIp}
            />
            <Route
              path="/events-amsterdam-legal"
              exact
              component={EventAmsterdamLegal}
            />
            <Route path="/events-dubai-ip" exact component={EventDubaiIp} />
            <Route
              path="/events-dubai-legal"
              exact
              component={EventDubaiLegal}
            />

            <Route
              path="/agenda-amsterdam-ip"
              exact
              component={AmsIpSchedulePage}
            />
            <Route
              path="/agenda-amsterdam-legal"
              exact
              component={AmsLegalSchedulePage}
            />
            <Route
              path="/agenda-dubai-ip"
              exact
              component={DubaiIPSchedulePage}
            />
            <Route
              path="/agenda-dubai-legal"
              exact
              component={DubaiLegalSchedulePage}
            />

            {/* <Route path="/schedule" exact component={ScheduleOne} /> */}

            <Route path="/contact" exact component={Contact} />

            {/* <Route path="/sponsors" exact component={Sponsor} /> */}
            <Route path="/policies" exact component={Policies} />
          </Suspense>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default AppRouter;
