import React, { useCallback } from "react";
import lax from "lax.js";
import LaxDiv from "../Shared/LaxDiv";
import { Box } from "@material-ui/core";
import SpeakersForm from "../Common/SpeakersForm";
import { useState } from "react";
import GroupPassForm from "../Common/GroupPassForm";
import PreloaderPayment from "../Shared/PreloaderPayment";
import { useEffect } from "react";
import CoctailForm from "../Common/CoctailForm";

const PricingPage = ({ conf }) => {
  const [paid, setPaid] = useState(false);
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
              padding: "20px 10px ",
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
              <img
                src="/images/congratulations.jpg"
                alt="congratulations img"
              />
            </div>
          </div>
        </Box>
      )
    );
  };

  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDelegate, setOpenDelegate] = useState(false);
  const [openSpeaker, setOpenSpeaker] = useState(false);
  const [openExhibition, setOpenExhibition] = useState(false);
  const [openCoctail, setOpenCoctail] = useState(false);
  const [openAccess, setOpenAccess] = useState(false);

  const [delegateAmount, setDelegateAmount] = useState(10);
  const [speakerAmount, setSpeakerAmount] = useState(10);
  const [coctailAmount, setCocktailAmount] = useState(10);
  const [exhiAmount, setExhiAmount] = useState(10);
  const [accessAmount, setAccessAmount] = useState(10);

  useEffect(() => setIsSubmit(false), [isSubmit]);

  //  const   updateSpeakData = () => {
  //     setOpenSpeak(!openSpeak)
  //      };
  const chooseValues = (formValues) => {
    let delegatePay;
    let speakerPay;
    let cocktailPay;
    let exhiPay = 2999;
    let accessPay;

    delegatePay = formValues.passes * 699;
    speakerPay = formValues.passes * 599;
    accessPay = formValues.passes * 1199;

    if (formValues.voucher === "GLA-AMS-20") {
      delegatePay = 0.8 * delegatePay;
      speakerPay = 0.8 * speakerPay;
      exhiPay = 0.8 * exhiPay;
      accessPay = 0.8 * accessPay;
    }
    if (formValues.voucher === "GLA-AMS-30") {
      delegatePay = 0.7 * delegatePay;
      speakerPay = 0.7 * speakerPay;
      exhiPay = 0.7 * exhiPay;
      accessPay = 0.7 * accessPay;
    }
    if (formValues.dinner === true) {
      delegatePay = delegatePay + formValues.passes * 249;
      speakerPay = speakerPay + formValues.passes * 249;
      accessPay = accessPay + formValues.passes * 249;
    }
    cocktailPay = formValues.passes * 249;

    delegatePay = delegatePay.toString();
    speakerPay = speakerPay.toString();
    cocktailPay = cocktailPay.toString();
    exhiPay = exhiPay.toString();
    accessPay = accessPay.toString();

    setDelegateAmount(delegatePay);
    setSpeakerAmount(speakerPay);
    setCocktailAmount(cocktailPay);
    setExhiAmount(exhiPay);
    setAccessAmount(accessPay);

    console.log(formValues, "formValues");
  };
  return loading ? (
    <PreloaderPayment />
  ) : (
    <section className="pricing-are ptb-120 bg-image">
      {payconfirmation()}
      <div className="container">
        <div className="section-title">
          <span>Pricing Plan</span>
          <h2>Get Your Tickets</h2>

          <LaxDiv text="Pricing" dataPreset="driftLeft" />

          <div className="bar"></div>
        </div>

        {openDelegate && (
          <SpeakersForm
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            chooseValues={chooseValues}
            formName="Hurry up!  Buy Tickets Now"
            currency="USD"
            amount={delegateAmount}
            Type={`Delegate Pass for ${conf}`}
            updateData={() => setOpenDelegate(!openDelegate)}
            loading={loading}
            setLoading={setLoading}
            setPaid={setPaid}
            conf={conf}
            venue="Dubai"
          />
        )}

        {/* {openExhibition && <GroupPassForm isSubmit={isSubmit} setIsSubmit={setIsSubmit} defaultPasses="2" chooseValues={chooseValues} formName="Hurry up!  Buy Tickets Now" currency="USD" checked={true} disabled={true} Type="Exhibition Pass" amount="2000" updateData={() => setOpenExhibition(!openExhibition)} loading={loading} setLoading={setLoading} setPaid={setPaid} />} */}
        {openExhibition && (
          <SpeakersForm
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            chooseValues={chooseValues}
            formName="Hurry up!  Buy Tickets Now"
            currency="USD"
            amount={exhiAmount}
            Type={`Exhibition  Pass for ${conf}`}
            updateData={() => setOpenExhibition(!openExhibition)}
            loading={loading}
            setLoading={setLoading}
            setPaid={setPaid}
            conf={conf}
            venue="Dubai"
          />
        )}

        {openSpeaker && (
          <SpeakersForm
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            chooseValues={chooseValues}
            formName="Hurry up!  Buy Tickets Now"
            currency="USD"
            amount={speakerAmount}
            Type={`Speaker  Pass for ${conf}`}
            updateData={() => setOpenSpeaker(!openSpeaker)}
            loading={loading}
            setLoading={setLoading}
            setPaid={setPaid}
            conf={conf}
            venue="Dubai"
          />
        )}

        {/* {openCoctail && <CoctailForm isSubmit={isSubmit} setIsSubmit={setIsSubmit} chooseValues={chooseValues} formName="Hurry up!  Buy Tickets Now" currency="USD" amount={coctailAmount} Type="Cocktail Pass" updateData={() => setOpenCoctail(!openCoctail)} loading={loading} setLoading={setLoading} setPaid={setPaid} />} */}

        {openCoctail && (
          <SpeakersForm
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            chooseValues={chooseValues}
            formName="Hurry up!  Buy Tickets Now"
            currency="USD"
            amount={coctailAmount}
            Type={`Dinner & Cocktail  Pass for ${conf}`}
            updateData={() => setOpenCoctail(!openCoctail)}
            loading={loading}
            setLoading={setLoading}
            setPaid={setPaid}
            conf={conf}
            venue="Dubai"
          />
        )}

        {openAccess && (
          <SpeakersForm
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            chooseValues={chooseValues}
            formName="Hurry up!  Buy Tickets Now"
            currency="USD"
            amount={accessAmount}
            Type={`3 Days Access Pass for  ${conf}`}
            updateData={() => setOpenAccess(!openAccess)}
            loading={loading}
            setLoading={setLoading}
            setPaid={setPaid}
            conf={conf}
            venue="Dubai"
          />
        )}

        <div className="row">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3> Delegate Pass </h3>
                <h5> Standard Price - $̶9̶9̶9̶</h5>
                <h5> Early Bird Offer - $̶7̶9̶9̶</h5>
                <h4> Super Early Bird Offer $699 </h4>
              </div>
              <button
                onClick={() => setOpenDelegate(!openDelegate)}
                className="btn btn-primary"
                style={{ height: "60px" }}
              >
                Buy Ticket Now
              </button>
            </div>
            {/* <p style={{ color: "black", fontWeight: 600 }}>
              Get voucher code to avail 20% off till 31st May 2023
            </p> */}
            <h5>Benefits</h5>
            <ul>
              <li>Meet with 150-200 IP Professionals</li>
              <li> Participation Certificate.</li>
              <li>Access to all program.</li>
              <li> Lunch & Coffee during the conference. </li>
              <li>Conference Bag (Accessories & Goodies).</li>
              <li>Access to attendees list post conference.</li>
            </ul>
          </div>
          <hr />

          <div style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3> Speaker Marketing Package </h3>
                <h5> Standard Price - $̶89̶9̶</h5>
                <h5> Early Bird Offer - <strike>$̶6̶99</strike></h5>
                <h4> Super Early Bird Offer $599 </h4>
              </div>

              <button
                onClick={() => setOpenSpeaker(!openSpeaker)}
                className="btn btn-primary"
                style={{ height: "60px" }}
              >
                Buy Ticket Now
              </button>
            </div>

            <h5>Benefits</h5>
            <ul>
              <li>
                {" "}
                	1 Speaking slot as per the defined topics in the conference.
              </li>
              <li>Meet with 150-200 Legal Professionals.</li>
              <li>Access to all program. </li>
              <li>Lunch & Coffee during the conference.</li>
              <li>
              Conference Bag (Accessories & Goodies).
              </li>
              <li>Participation Certificate.</li>
              <li>One on One Networking Session.</li>
              <li>Promotion on Social Media platforms.</li>
              <li>Logo in the pre marketing materials prior/during the conference.</li>
              <li>Access to attendee’s list post conference.</li>
              <li>We will publish your firms Bio (services) in our annual Magazine(A4 Size) as well.</li>
            </ul>
          </div>

          <hr />

          <div style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3> Exhibition Booth </h3>
                <h5> Standard Price -$̶3̶8̶9̶9̶</h5>
                <h5> Early Bird Offer - $̶3̶4̶9̶9̶</h5>
                <h4> Super Early Bird Offer $2999 </h4>
              </div>

              <button
                onClick={() => setOpenExhibition(!openExhibition)}
                className="btn btn-primary"
                style={{ height: "60px" }}
              >
                Buy Ticket Now
              </button>
            </div>

            <h5>Benefits</h5>
            <ul>
              <li> Exhibit Table with Chairs.</li>
              <li>2 Complimentary Delegate Passes.</li>
              <li>Promotion of your firm on all Social Media platforms. </li>
              <li>Partnership Logo in the Website.</li>
              <li>
                Receive Participants List 1 weeks after the event with all the
                contact details.
              </li>
              <li>Branding as an Associate Sponsor on event backdrop.</li>
            </ul>
          </div>
          <hr />

          <div style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3> Dinner & Cocktail Pass- $249</h3>
               
              <button
                onClick={() => setOpenCoctail(!openCoctail)}
                className="btn btn-primary"
              >
                Buy Ticket Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
