import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lax from "lax.js";
import OwlCarousel from "react-owl-carousel3";
import PlatinumSponsors from "../LaxButton/PlatinumSponsors";
import GoldSponsors from "../LaxButton/GoldSponsors";
import SilverSponsors from "../LaxButton/SilverSponsors";
import BronzeSponsors from "../LaxButton/BronzeSponsors";
import OtherFooter from "../Common/OtherFooter";
import LaxDiv from "../Shared/LaxDiv";
import { Box } from "@material-ui/core";
import NonExhibitionForm from "../Common/SponsorshipForm";
import MainSponsorForm from "../Common/MainSponsorForm";
import PreloaderPayment from "../Shared/PreloaderPayment";
import { useState } from "react";
import Button from "@mui/material/Button";

const style = {
  padding: "10px",
  border: "1px solid black",
};
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const SponsorIP = ({ conf }) => {
  const [open, setOpen] = useState(false);
  const [openSponsor, setOpenSponsor] = useState(false);
  const [openPlatinum, setOpenPlatinum] = useState(false);
  const [openGold, setOpenGold] = useState(false);
  const [openSilver, setOpenSilver] = useState(false);
  const [openBronze, setOpenBronze] = useState(false);
  const [openSession, setOpenSession] = useState(false);
  const [openLanyard, setOpenLanyard] = useState(false);
  const [openMemento, setOpenMemento] = useState(false);
  const [openLunch, setOpenLunch] = useState(false);
  const [openDinner, setOpenDinner] = useState(false);

  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => setIsSubmit(false), [isSubmit]);

  const updateSponsorData = () => {
    // this.setState({ openSponsor: !this.state.openSponsor });
    setOpenSponsor(!openSponsor);
  };
  const updatePlatinumSponsor = () => {
    //  this.setState({ openPlatinum: !this.state.openPlatinum });
    setOpenPlatinum(!openPlatinum);
  };
  const updateGoldSponsor = () => {
    //  this.setState({ openGold: !this.state.openGold });
    setOpenGold(!openGold);
  };
  const updateSilverSponsor = () => {
    //  this.setState({ openSilver: !this.state.openSilver });
    setOpenSilver(!openSilver);
  };
  const updateBronzeSponsor = () => {
    // this.setState({ openBronze: !this.state.openBronze });
    setOpenBronze(!openBronze);
  };
  const updateSessionSponsor = () => {
    // this.setState({ openSession: !this.state.openSession });
    setOpenSession(!openSession);
  };
  const updateLanyardSponsor = () => {
    // this.setState({ openLanyard: !this.state.openLanyard });
    setOpenLanyard(!openLanyard);
  };
  const updateMementoSponsor = () => {
    //  this.setState({ openMemento: !this.state.openMemento });
    setOpenMemento(!openMemento);
  };
  const updateLunchSponsor = () => {
    // this.setState({ openLunch: !this.state.openLunch });
    setOpenLunch(!openLunch);
  };
  const updateDinnerSponsor = () => {
    // this.setState({ openDinner: !this.state.openDinner });
    setOpenDinner(!openDinner);
  };

  const payconfirmation = () => {
    return (
      paid && (
        <Box
          sx={{
            display: "flex",
            background: "transparent",
            width: "100%",
            height: { xs: "26%", sm: "37%", md: "40%", lg: "40%", xl: "45%" },
            position: "fixed",
            zIndex: 1000,
            justifyContent: "center",
            top: "30%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              background: "white",
              padding: "20px",
              width: "50%",
              boxShadow: "rgba(0, 0, 0, 0.8) 0px 5px 15px",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "25px ", lg: "28px" },
                fontWeight: 600,
              }}
            >
              {" "}
              Your payment has been successful
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "6%",
              }}
            >
              <img src="images/congratulations.jpg" alt="" />
            </div>
          </div>
        </Box>
      )
    );
  };

  return loading ? (
    <PreloaderPayment />
  ) : (
    <React.Fragment>
      {payconfirmation()}

      <section
        className="pricing-area  bg-image"
        style={{ padding: "50px 0px" }}
      >
        <div className="container">
          <div className="section-title">
            <span>Sponsorship </span>
            <h2>Get Your Plans</h2>

            <LaxDiv text="Sponsorship" dataPreset="driftRight" />

            <div className="bar"></div>
          </div>

          <div className="row">
            <div
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3> Lunch Sponsor - $ 3200</h3>

                <button
                  onClick={() => setOpenLunch(!openLunch)}
                  className="btn btn-primary"
                >
                  Buy Ticket Now
                </button>
              </div>

              <h5>Benefits</h5>
              <ul>
                <li>2 Complimentary Delegate Passes</li>
                <li>Logo listed on general conference Banner </li>
                <li>A4-Advert in conference Magazine</li>
                <li>Post-event attendee registration mailing list</li>
              </ul>
            </div>

            <div
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3> Pen and Notepad Sponsor - $2999</h3>

                <button
                  onClick={() => updateDinnerSponsor()}
                  className="btn btn-primary"
                >
                  Buy Ticket Now
                </button>
              </div>

              <h5>Benefits</h5>
              <ul>
                <li>2 Complimentary Delegate Passes</li>
                <li>One complimentary booth space on the Exhibit Floor</li>
                <li>Logo on the home page of the conference web site</li>
                <li>A4-Advert in conference Magazine</li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                <h3>
                  {" "}
                  Sponsor a Session <span>$4999</span>
                </h3>

                <ul className="pricing-content">
                  <li>3 Speaker opportunity</li>
                  <li>1 moderator opportunity</li>

                  <li>Logo listing as Session sponsor</li>
                  <li>4 Complimentary Delegate Passes</li>
                </ul>

                <Link
                  onClick={() => updateSessionSponsor()}
                  to="#"
                  className="btn btn-primary"
                >
                  Become Sponsor
                </Link>
              </div>
              {openPlatinum && (
                <NonExhibitionForm
                  formName={`Become a platinum sponsor for ${conf} event Dubai`}
                  Type={`Platinum sponsor for ${conf} event`}
                  currency="USD"
                  amount="17999"
                  updateData={() => setOpenPlatinum(!openPlatinum)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  conf={conf}
                  venue="Dubai"
                />
              )}

              {openGold && (
                <NonExhibitionForm
                  formName={`Become a Gold sponsor for ${conf} event Dubai`}
                  Type={`Gold sponsor for ${conf} event`}
                  updateData={() => setOpenGold(!openGold)}
                  currency="USD"
                  amount="13999"
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}

              {openSilver && (
                <NonExhibitionForm
                  formName={`Become a Silver sponsor for ${conf} event Dubai`}
                  Type={`Silver sponsor for ${conf} event`}
                  updateData={() => setOpenSilver(!openSilver)}
                  currency="USD"
                  amount="9999"
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}

              {openBronze && (
                <NonExhibitionForm
                  formName={`Become a Bronze sponsor for ${conf} event Dubai`}
                  Type={`Bronze sponsor for ${conf} event`}
                  updateData={() => setOpenBronze(!openBronze)}
                  currency="USD"
                  amount="4800"
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}

              {openSession && (
                <MainSponsorForm
                  formName={`Become a 
                Session sponsor for ${conf} event Dubai`}
                  currency="USD"
                  Type={`Session sponsor for ${conf} event`}
                  amount="4999"
                  updateData={() => setOpenSession(!openSession)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}

              {openLanyard && (
                <MainSponsorForm
                  formName={`Become a Lanyard sponsor for ${conf} event Dubai`}
                  currency="USD"
                  Type={`Lanyard sponsor for ${conf} event`}
                  amount="2000"
                  updateData={() => setOpenLanyard(!openLanyard)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}

              {openMemento && (
                <MainSponsorForm
                  formName={`Become a Memento sponsor for ${conf} event Dubai`}
                  currency="USD"
                  Type={`Memento sponsor for ${conf} event`}
                  amount="2400"
                  updateData={() => setOpenMemento(!openMemento)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}

              {openLunch && (
                <MainSponsorForm
                  formName={`Become a Lunch sponsor for ${conf} event Dubai`}
                  currency="USD"
                  Type={`Lunch sponsor for ${conf} event`}
                  amount=" 3200"
                  updateData={() => setOpenLunch(!openLunch)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}

              {openDinner && (
                <MainSponsorForm
                  formName={`Become a Pen n Notepad sponsor for ${conf} event Dubai`}
                  currency="USD"
                  Type={`Pen n Notepad sponsor for ${conf} event`}
                  amount="2999"
                  updateData={() => setOpenDinner(!openDinner)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                  venue="Dubai"
                />
              )}
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="pricing-plan">
              <h3>
                  {" "}
                  LANYARD SPONSOR<p>
                    <span>
                      <strike style={{ text: "red", "font-size": "15px" }}>
                        $2499
                      </strike>
                      <b style={{ text: "red", "font-size": "30px" }}>$2000</b>
                    </span>
                  </p>
                </h3>

                <ul className="pricing-content">
                  <li>Logo on the Lanyard (Distributed to all Attendees)</li>
                  <li>1 Speaker Pass</li>

                  <li> 1 Full Page Ad in Conference Volume </li>
                  <li>Receive Attendees List 1 week before the event</li>
                </ul>

                <Link
                  to="#"
                  onClick={() => updateLanyardSponsor()}
                  className="btn btn-primary"
                >
                  Become Sponsor
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="pricing-plan">
              <h3>
                  MEMENTO SPONSORSHIP
                  <p>
                    <span >
                      <strike style={{ text: "red", "font-size": "15px" }}>
                        $2999
                      </strike>
                      <b style={{ text: "red", "font-size": "30px" }}>$2400</b>
                    </span>
                  </p>
                </h3>

                <ul className="pricing-content">
                  <li>1 Speaker Pass </li>
                  <li>Company Logo on the Event Page </li>
                  <li> Full Page Ad in Conference Volume</li>
                  <li>Receive Attendees List 1 week before the event</li>
                </ul>

                <Link
                  to="#"
                  onClick={() => updateMementoSponsor()}
                  className="btn btn-primary"
                >
                  Become Sponsor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark" style={{ padding: "20px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <div className="container">
            <h2 style={{ color: "white", marginTop: "20px" }}>
              Sponsorship Benefits Categories
            </h2>
            <div style={{ width: "100%", marginTop: "4%" }}>
              <table
                style={{ background: "white", width: "100%", fontSize: "18px" }}
              >
                <tr>
                  <th style={style}>Benefits</th>
                  <th style={style}>Platinum sponsor-$17999</th>
                  <th style={style}>Gold sponsor-$13999</th>
                  <th style={style}>Silver sponsor-$9999</th>
                  <th style={style}>Bronze sponsor-$4800</th>
                </tr>

                <tr>
                  <td style={style}> Speaker Opportunity</td>
                  <td style={style}>4</td>
                  <td style={style}>3</td>
                  <td style={style}>2</td>
                  <td style={style}>1</td>
                </tr>

                <tr>
                  <td style={style}>Complimentary Delegate Passes</td>
                  <td style={style}>6</td>
                  <td style={style}>4</td>
                  <td style={style}>2</td>
                  <td style={style}>2</td>
                </tr>

                <tr>
                  <td style={style}>
                    {" "}
                    Title Sponsor Branding of Any One Panel Discussion of Your
                    Choice
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/cross.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/cross.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={style}> Company logo in collaterals and online</td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                </tr>

                <tr>
                  <td style={style}>
                    Distribution of promotional material in Delegate Kit{" "}
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                </tr>

                <tr>
                  <td style={style}>
                    {" "}
                    Logo presence on conference banner & magazine
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />{" "}
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                </tr>

                <tr>
                  <td style={style}>
                    {" "}
                    Exhibition Booth (One table, Two Chairs, One drapping)
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/cross.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                </tr>

                <tr>
                  <td style={style}>logo Signage as Sponsor at Event Podium</td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                </tr>

                <tr>
                  <td style={style}>
                    Moderator Opportunity (subject to availability at the time
                    of registration)
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/cross.png"
                      style={{ width: "30px" }}
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td style={style}>
                    {" "}
                    Organization Standee at Registration Desk
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/tick.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/cross.png"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td style={style}>
                    <img
                      src="/images/cross.png"
                      style={{ width: "30px" }}
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td style={style}>
                    <b>Registration </b>
                  </td>
                  <td style={style}>
                    <Button
                      onClick={() => setOpenPlatinum(!openPlatinum)}
                      variant="contained"
                    >
                      Buy Tickets{" "}
                    </Button>
                  </td>
                  <td style={style}>
                    <Button
                      variant="contained"
                      onClick={() => setOpenGold(!openGold)}
                    >
                      Buy Ticket{" "}
                    </Button>
                  </td>
                  <td style={style}>
                    <Button
                      variant="contained"
                      onClick={() => setOpenSilver(!openSilver)}
                    >
                      Buy Ticket{" "}
                    </Button>
                  </td>
                  <td style={style}>
                    <Button
                      variant="contained"
                      onClick={() => setOpenBronze(!openBronze)}
                    >
                      Buy Ticket{" "}
                    </Button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SponsorIP;
