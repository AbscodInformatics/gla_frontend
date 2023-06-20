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

const Sponsor = () => {
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
  const [openDinnerCruise, setOpenDinnerCruise] = useState(false);
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
  const updateDinnerCruiseSponsor = () => {
    // this.setState({ openDinnerCruise: !this.state.openDinnerCruise });
    setOpenDinnerCruise(!openDinnerCruise);
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
      <div className="page-title-area item-bg2 " style={{ height: "500px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "5px",
            }}
          >
            {" "}
            <div
              style={{
                fontSize: "20px",
                color: "white",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              In association with Effectual Services
            </div>{" "}
            <span
              className="ml-2"
              onClick={() => window.open("https://www.effectualservices.com/")}
            >
              <img
                style={{ width: "120px", cursor: "pointer" }}
                src="images/effectual_logo.png"
                alt="effectual logo"
              />
            </span>
          </div>
          <h1>Sponsors</h1>
          <span>Check Who Makes This Event Possible!</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Sponsors</li>
          </ul>
        </div>
      </div>

      <section className="partner-area ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="partner-title platinum-sponsor">
                <PlatinumSponsors />
              </div>
            </div>

            <OwlCarousel
              className="platinum-partner-slides owl-carousel owl-theme"
              {...options}
            >
              <div
                className="col-lg-12 col-md-12"
                style={{ width: "45%", height: "100%" }}
              >
                <div className="partner-item" style={{ height: "100%" }}>
                  <Link>
                    <img src="images/effectual_logo.png" alt="" />
                    <img src="images/effectoal_logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-12 col-md-12" style={{ width: "70%" }}>
                <b style={{ fontSize: "25px" }}> Become a Platinum Sponsor</b>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="partner-item" style={{ width: "45%" }}>
                  <>
                    <img src="images/abscod.png" alt="" />
                    <img src="" alt="" />
                  </>
                </div>
              </div>

              <div className="col-lg-12 col-md-12" style={{ width: "70%" }}>
                <b style={{ fontSize: "25px" }}> Become a Platinum Sponsor</b>
              </div>
            </OwlCarousel>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                    lg: "20px",
                    xl: "22px",
                  },
                  backgroundColor: "#ff2d55",
                  color: "white",
                  textAlign: "center",
                  padding: "6px 16px",
                  width: "fit-content",
                  fontWeight: 600,
                  borderRadius: "5px",
                  boxShadow: "3px 3px #8dc63f",
                }}
              >
                PRICING : $ 17500{" "}
              </Box>
              <button
                onClick={() => updatePlatinumSponsor()}
                className="btn btn-primary"
              >
                Become Sponsor
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#platinum"
              >
                Benefits
              </button>

              <div
                class="modal fade"
                id="platinum"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Benefits of Platinum Sponsors
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body" style={{ padding: "0px 10px" }}>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            2 Speaker Opportunity
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            6 Complimentary Delegate Passes
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Prominent Company logo in collaterals and online
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Distribution of 5 promotional material in Delegate
                            Kit{" "}
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            prominent Logo presence on conference banner &
                            magazine
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Exhibition Booth (One table, Two Chairs, One
                            drapping)
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            Prominent logo Signage as Sponsor at Event Podium
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Moderator Opportunity (subject to availability at
                            the time of registration)
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>

            <div className="col-lg-12">
              <div className="border"></div>
            </div>

            <div className="col-lg-12">
              <div className="partner-title gold-sponsor">
                <GoldSponsors />
              </div>
            </div>

            <OwlCarousel
              className="gold-partner-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="col-lg-12 col-md-12" style={{ width: "90%" }}>
                <b style={{ fontSize: "25px" }}> Become a Gold Sponsor</b>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="partner-item">
                  <Link to="#">
                    {/* <img src="images/sponsor2.jpg" alt="" />
                                            <img src="" alt="" /> */}
                  </Link>
                </div>
              </div>

              <div className="col-lg-12 col-md-12" style={{ width: "90%" }}>
                <b style={{ fontSize: "25px" }}> Become a Gold Sponsor</b>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="partner-item">
                  <Link to="#">
                    {/* <img src="images/sponsor4.png" alt="" />
                                            <img src="" alt="" /> */}
                  </Link>
                </div>
              </div>

              <div className="col-lg-12 col-md-12" style={{ width: "90%" }}>
                <b style={{ fontSize: "25px" }}> Become a Gold Sponsor</b>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="partner-item">
                  <Link to="#">
                    {/* <img src="images/sponsor4.png" alt="" />
                                            <img src="" alt="" /> */}
                  </Link>
                </div>
              </div>
            </OwlCarousel>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                    lg: "20px",
                    xl: "22px",
                  },
                  backgroundColor: "#8dc63f",
                  color: "white",
                  textAlign: "center",
                  padding: "6px 16px",
                  width: "fit-content",
                  fontWeight: 600,
                  borderRadius: "5px",
                  boxShadow: "3px 3px #ff2d55",
                }}
              >
                PRICING : $13999{" "}
              </Box>
              <Link
                to="#"
                onClick={() => updateGoldSponsor()}
                className="btn btn-primary"
              >
                Become Sponsor
              </Link>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#gold"
              >
                Benefits
              </button>

              <div
                class="modal fade"
                id="gold"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Benefits of Gold Sponsors
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body" style={{ padding: "0px 10px" }}>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Speaker Opportunity
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            4 Complimentary Delegate Passes
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Medium Company logo in collaterals and online
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Distribution of 3 promotional material in Delegate
                            Kit{" "}
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            Medium Logo presence on conference banner & magazine
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Exhibition Booth (One table, Two Chairs, One
                            drapping)
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            Medium logo Signage as Sponsor at Event Podium
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Moderator Opportunity (subject to availability at
                            the time of registration)
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
            <div className="col-lg-12">
              <div className="border"></div>
            </div>

            <div className="col-lg-12">
              <div className="partner-title platinum-sponsor">
                <SilverSponsors />
              </div>
            </div>

            <OwlCarousel
              className="platinum-partner-slides owl-carousel owl-theme"
              {...options}
            >
              <div
                className="col-lg-12 col-md-12"
                style={{ width: "100%", marginTop: "30px" }}
              >
                <b style={{ fontSize: "25px" }}> Become a Silver Sponsor</b>
              </div>

              <div
                className="col-lg-12 col-md-12"
                style={{ width: "70%", marginBottom: "30px" }}
              >
                <img src="images/ss1.png" alt="trawego travels" />
              </div>

              {/* <div className="col-lg-12 col-md-12">
                                    <div className="partner-item">
                                        <Link to="#">
                                        </Link>
                                    </div>
                                </div> */}
              <div
                className="col-lg-12 col-md-12"
                style={{ width: "100%", marginTop: "30px" }}
              >
                <b style={{ fontSize: "25px" }}> Become a Silver Sponsor</b>
              </div>
              <div
                className="col-lg-12 col-md-12"
                style={{ width: "70%", marginBottom: "30px" }}
              >
                <img src="images/ss1.png" alt="trawego travels" />
              </div>

              {/* <div className="col-lg-12 col-md-12" style={{width:"70%",marginBottom:"30px"}}>
                                    <div className="partner-item">
                                        <Link to="#">
                                        </Link>
                                    </div>
                                </div> */}
            </OwlCarousel>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                    lg: "20px",
                    xl: "22px",
                  },
                  backgroundColor: "#ff2d55",
                  color: "white",
                  textAlign: "center",
                  padding: "6px 16px",
                  width: "fit-content",
                  fontWeight: 600,
                  borderRadius: "5px",
                  boxShadow: "3px 3px #8dc63f",
                }}
              >
                PRICING : $ 10500{" "}
              </Box>
              <Link
                to="#"
                onClick={() => updateSilverSponsor()}
                className="btn btn-primary"
              >
                Become Sponsor
              </Link>

              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#silver"
              >
                Benefits
              </button>

              <div
                class="modal fade"
                id="silver"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Benefits of Silver Sponsors
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body" style={{ padding: "0px 10px" }}>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Speaker Opportunity
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            2 Complimentary Delegate Passes
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Medium Company logo in collaterals and online
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Distribution of 2 promotional material in Delegate
                            Kit{" "}
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            Medium Logo presence on conference banner & magazine
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Exhibition Booth (One table, Two Chairs, One
                            drapping)
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            Medium logo Signage as Sponsor at Event Podium
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Sponsor organisation name inclusion in pre
                            conference press release
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>

            <div className="col-lg-12">
              <div className="border"></div>
            </div>

            <div className="col-lg-12">
              <div className="partner-title gold-sponsor">
                <BronzeSponsors />
              </div>
            </div>

            <OwlCarousel
              className="gold-partner-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="col-lg-12 col-md-12" style={{ width: "100%" }}>
                <b style={{ fontSize: "25px" }}> Become a Bronze Sponsor</b>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="partner-item">
                  <Link to="#"></Link>
                </div>
              </div>

              <div className="col-lg-12 col-md-12" style={{ width: "100%" }}>
                <b style={{ fontSize: "25px" }}> Become a Bronze Sponsor</b>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="partner-item">
                  <Link to="#"></Link>
                </div>
              </div>
            </OwlCarousel>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                    lg: "20px",
                    xl: "22px",
                  },
                  backgroundColor: "#8dc63f",
                  color: "white",
                  textAlign: "center",
                  padding: "6px 16px",
                  width: "fit-content",
                  fontWeight: 600,
                  borderRadius: "5px",
                  boxShadow: "3px 3px red",
                }}
              >
                PRICING : $6999
              </Box>
              <Link
                to="#"
                onClick={() => updateBronzeSponsor()}
                className="btn btn-primary"
              >
                Become Sponsor
              </Link>

              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#bronze"
              >
                Benefits
              </button>

              <div
                class="modal fade"
                id="bronze"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Benefits of Bronze Sponsors
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body" style={{ padding: "0px 10px" }}>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            2 Complimentary Delegate Passes
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Small Company logo in collaterals and online
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Distribution of 1 promotional material in Delegate
                            Kit{" "}
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            Small Logo presence on conference banner & magazine
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            1 Exhibition Booth (One table, Two Chairs, One
                            drapping)
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            {" "}
                            Small logo Signage as Sponsor at Event Podium
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative">
                          <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center  mr-3">
                            <img
                              src="images/arrow.jpg"
                              alt="clock"
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-start flex-col ml-6 ">
                          <h4 className="text-lg font-semibold leading-4 text-gray-800">
                            Sponsor organisation name inclusion in pre
                            conference press release
                          </h4>
                          {/* <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p> */}
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </section>

      <section className="pricing-area ptb-120 bg-image">
        <div className="container">
          <div className="section-title">
            <span>Sponsorship Plan</span>
            <h2>
              Get Your <b>Plans</b>
            </h2>

            <LaxDiv text="Sponsorship" dataPreset="driftRight" />

            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                {/* <h3>BASIC PASS <span><sup>$</sup>9999</span></h3> */}
                <h3>
                  {" "}
                  Sponsor a Session <span>$3999</span>
                </h3>

                <ul className="pricing-content">
                  {/* <li><b style={{fontSize:"17px"}}>
                                        Features with Group sponsor</b></li> */}
                  <li>3 Speaker opportunity</li>
                  <li>1 moderator opportunity</li>
                  <li>Signage as Session Sponsor at Event Podium</li>
                  <li>Logo listing as a Session sponsor</li>
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
                  formName="Become a platinum sponsor"
                  Type="Platinum sponsor"
                  currency="USD"
                  amount="17500"
                  updateData={() => setOpenPlatinum(!openPlatinum)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openGold && (
                <NonExhibitionForm
                  formName="Become a Gold sponsor"
                  Type="Gold sponsor"
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
                />
              )}

              {openSilver && (
                <NonExhibitionForm
                  formName="Become a Silver sponsor"
                  Type="Silver sponsor"
                  updateData={() => setOpenSilver(!openSilver)}
                  currency="USD"
                  amount="10500"
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openBronze && (
                <NonExhibitionForm
                  formName="Become a Bronze sponsor"
                  Type="Bronze sponsor"
                  updateData={() => setOpenBronze(!openBronze)}
                  currency="USD"
                  amount="6999"
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openSession && (
                <MainSponsorForm
                  formName="Become a Session sponsor"
                  currency="USD"
                  Type="Session sponsor"
                  amount="3999"
                  updateData={() => setOpenSession(!openSession)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openLanyard && (
                <MainSponsorForm
                  formName="Become a Lanyard sponsor"
                  currency="USD"
                  Type="Lanyard sponsor"
                  amount="1999"
                  updateData={() => setOpenLanyard(!openLanyard)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openMemento && (
                <MainSponsorForm
                  formName="Become a Memento sponsor"
                  currency="USD"
                  Type="Memento sponsor"
                  amount="2800"
                  updateData={() => setOpenMemento(!openMemento)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openLunch && (
                <MainSponsorForm
                  formName="Become a Lunch sponsor"
                  currency="USD"
                  Type="Lunch sponsor"
                  amount="3499"
                  updateData={() => setOpenLunch(!openLunch)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openDinner && (
                <MainSponsorForm
                  formName="Become a Pen & Notepad  sponsor"
                  currency="USD"
                  Type="Pen & Notepad sponsor"
                  amount="3499"
                  updateData={() => setOpenDinner(!openDinner)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}

              {openDinnerCruise && (
                <MainSponsorForm
                  formName="Become a Dinner Cruise sponsor"
                  currency="USD"
                  Type="Dinner Cruise sponsor"
                  amount="3499"
                  updateData={() => setOpenDinnerCruise(!openDinnerCruise)}
                  loading={loading}
                  setLoadingTrue={() => setLoading(true)}
                  setLoadingFalse={() => setLoading(false)}
                  setPaidFalse={() => setPaid(false)}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setPaidTrue={() => setPaid(true)}
                />
              )}
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="pricing-plan">
                <h3>
                  {" "}
                  LANYARD SPONSOR<span>$1999</span>
                </h3>

                <ul className="pricing-content">
                  {/* <li><b style={{fontSize:"17px"}}>
                                        Features with  Landyard sponsor</b></li>*/}
                  <li>Logo on the Lanyard (Distributed to all Attendees)</li>
                  <li>1 Speaker Pass</li>
                  <li>Company Logo on the Event website and banner</li>
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
                    <span>
                      <strike style={{ text: "red", "font-size": "15px" }}>
                        $2999
                      </strike>
                      <b style={{ text: "red", "font-size": "30px" }}>$2400</b>
                    </span>
                  </p>
                </h3>

                <ul className="pricing-content">
                  {/* <li><b style={{fontSize:"17px"}}>
                                        Features with  momento sponsor </b></li> */}
                  <li>Logo on the Memento (Distributed to all Speakers)</li>
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
          <div className="row pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                {/* <h3>BASIC PASS <span><sup>$</sup>9999</span></h3> */}
                <h3>
                  {" "}
                  LUNCH SPONSOR <span>$3200</span>
                </h3>

                <ul className="pricing-content">
                  {/* <li><b style={{fontSize:"17px"}}>
                                            Features with  Lunch Sponsor </b></li> */}
                                            <li>Two Complimentary Delegate Passes</li>
                <li>One Speaker Pass</li>
                <li>Logo listed on general conference banner</li>
                <li>
                  Branding/Promotion as a Lunch Sponsor on event backdrop,
                  website, and social media sites like LinkedIn etc.
                </li>
                <li>A4-Advert in conference Magazine</li>
                <li>
                  We will share the participants list one week before/after the
                  event with all the contact details.
                </li>
                </ul>

                <Link
                  to="#"
                  onClick={() => updateLunchSponsor()}
                  className="btn btn-primary"
                >
                  Become Sponsor
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="pricing-plan">
                <h3>
                  {" "}
                  PEN & NOTEPAD SPONSOR<span>$3499</span>
                </h3>

                <ul className="pricing-content">
                  {/* <li><b style={{fontSize:"17px"}}>
                                        Features with  Dinner sponsor </b></li> */}
                  <li>2 Complimentary Delegate Passes</li>
                  <li>
                    {" "}
                    Logo and company profile in Sponsor/Exhibitor web page
                  </li>
                  <li>One complimentary booth space on the Exhibit Floor</li>

                  <li>Logo on the home page of the conference web site</li>
                  <li>A4-Advert in conference Magazine</li>
                </ul>

                <Link
                  to="#"
                  onClick={() => updateDinnerSponsor()}
                  className="btn btn-primary"
                >
                  Become Sponsor
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="pricing-plan">
                <h3>
                  {" "}
                  CRUISE DINNER SPONSOR <span>$3499</span>
                </h3>

                <ul className="pricing-content">
                  {/* <li><b style={{fontSize:"17px"}}>
                                        Features with  cruise dinner sponsor </b></li> */}
                  <li>2 Complimentary Delegate Passes</li>
                  <li>Logo listed on general conference Banner</li>
                  <li>Post-event attendee registration mailing list </li>
                  <li>
                    Logo and “Sponsored by your company” on Lunch and Dinner
                    Station Signage
                  </li>
                  <li>Logo on the home page of the conference web site</li>
                </ul>

                <Link
                  to="#"
                  onClick={() => updateDinnerCruiseSponsor()}
                  className="btn btn-primary"
                >
                  Become Sponsor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OtherFooter />
    </React.Fragment>
  );
};

export default Sponsor;
