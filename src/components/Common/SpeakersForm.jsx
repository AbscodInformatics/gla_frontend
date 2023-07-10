import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import useRazorpay from "react-razorpay";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const SpeakersForm = ({
  updateData,
  formName,
  currency,
  amount,
  Type,
  chooseValues,
  setIsSubmit,
  isSubmit,
  setPaid,
  setLoading,
  conf,
  venue,
}) => {
  let exhibitionCheck = Type.includes("Exhibition");
  let cocktailCheck = Type.includes("Cocktail");

  const [showPayment, setShowPayment] = useState(false);

  const type = Type;
  let paymentRequestData = {};
  let response = {};
  const Razorpay = useRazorpay();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    try {
      setLoading(true);
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Rajor pay SDK failed to load ");
        return;
      }
      const data = await fetch(
        `https://gla-backend-new-dt4z.onrender.com/razorpay/${currency}/${amount}`,

        {
          method: "post",
          headers: {
            "Content-Type": "appliation/json",
          },
        }
      ).then((t) => t.json());
      if (data && Object.keys(response).length === 0) {
        failedPayments();
      }

      paymentRequestData = data;

      const options = {
        key: "rzp_live_UeiEPxqvCQonX9",
        amount: data.amount.toString(),
        currency: data.currency,
        name: "Global legal association",
        description: "Transaction",
        timeout: "300",
        order_id: data.id,

        handler: (res) => {
          response = res;
          response.bill_id = res.razorpay_order_id;
          console.log(response);
          // setPaid(true)
          setTimeout(() => {
            setPaid(false);
          }, 2100);
          postPayment();
        },
      };
      const rzpay = new Razorpay(options);
      setLoading(false);
      rzpay.open();
    } catch (err) {
      console.log("err in payment", err);
    } finally {
      setLoading(false);
    }
  };

  const displayPaypal = () => {
    console.log(currency, amount);
    return (
      <PayPalScriptProvider
        options={{
          "client-id":
            "AXl-aEPtisx3FRaeelqyIwygWwddtSXVpvMJlr5-6vYwS6vOZyhp_q-Pvk7mns9eGrUWrMnbOU--Xnpc",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: `${amount}`,
                    currency_code: `${currency}`,
                  },
                },
              ],
            });
          }}
          style={{
            layout: "horizontal",
            color: "blue",
            shape: "rect",
            label: "paypal",
          }}
          onApprove={(data, actions) => {
            response = data;
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name} via paypal`);
              postPayment();
            });
          }}
          onError={(err) => {
            alert(err);
          }}
        />
      </PayPalScriptProvider>
    );
  };

  const postPayment = () => {
    if (response !== {}) {
      let info = axios({
        url: "https://gla-backend-new-dt4z.onrender.com/razorpay",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify({
          response,
          name,
          email,
          phone,
          companyName,
          type,
          paymentRequestData,
        }),
      })
        .then((res) => {
          info = res.json();
        })
        .catch((err) => {});
    }
  };

  const failedPayments = () => {
    let info = axios({
      url: "https://gla-backend-new-dt4z.onrender.com/no-payments",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: JSON.stringify({
        name,
        email,
        phone,
        companyName,
        type,
      }),
    })
      .then((res) => {
        info = res.json();
      })
      .catch((err) => {});
  };

  const intialValue = {
    name: "",
    email: "",
    companyName: "",
    phone: "",
    passes: exhibitionCheck ? 2 : 0,
    address: "",
    payment: "",
    location: venue,
    voucher: "",
    dinner: false,
    type,
  };
  const [formValues, setFormValues] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [captcha, setCaptcha] = useState(false);

  const { name, email, companyName, phone, passes, payment, voucher } =
    formValues;

  chooseValues(formValues);
  const collectdata = async () => {
    if (
      name !== "" &&
      companyName !== "" &&
      phone !== "" &&
      passes !== 0 &&
      passes !== "" &&
      captcha &&
      payment !== "" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formValues.type = Type;
      let info = axios({
        url: "https://gla-backend-new-dt4z.onrender.com/speaker",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify(formValues),
      })
        .then((res) => {
          info = res.json();
          console.log(info, "info");
        })
        .catch((err) => {});
      setShowPayment(true);

      if (formValues.payment === "Razorpay") {
        setTimeout(displayRazorpay, 300);
      }
    } //   info =await info.json();
    // console.log(info, "info");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formValues, "formvalues");
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      updateData();
    }
  }, [formErrors, formValues, isSubmit, updateData]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.name) {
      errors.name = " Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.email.match(regex)) {
      errors.email = "Email is invalid";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    }
    if (!values.companyName) {
      errors.companyName = "Company Name is required";
    }
    if (values.passes === 0) {
      errors.passes = `${
        cocktailCheck ? "Food coupons" : "Passes"
      } are required`;
    }
    if (!values.passes) {
      errors.passes = `${
        cocktailCheck ? "Food coupons" : "Passes"
      } are required`;
    }
    if (!captcha) {
      errors.captcha = "Please fill the Captcha";
    }
    if (!values.payment) {
      errors.payment = "Please enter the mode of payment";
    }

    // if ((values.voucher)) {
    //   console.log("first")
    //     (values.voucher !== "GLA-AMS-20" || values.voucher !== "") ?
    //   // console.log("second")
    //     errors.voucher = "Please check the voucher code ":errors.voucher=""

    //      }

    return errors;
  };
  const handleCaptcha = () => {
    setCaptcha(!captcha);
  };

  return (
    <Box
      style={{
        width: "90% ",
        height: "80%",
        right: "5%",
        top: "2%",
        zIndex: 1300000,
        margin: "5% 0 0% 0",
        position: "fixed",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "black 0px 3px 7px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "8px",
            sm: "11px",
            md: "15px",
            lg: "17px",
            xl: "20px",
          },
          padding: {
            xs: "20px",
            sm: "16px",
            md: "7px",
          },
          fontWeight: "bold",
        }}
        style={{ textAlign: "center" }}
      >
        Register for GLA-{conf} Conference {venue}
      </Box>

      <div
        style={{
          border: "1px solid #e6e6e6",
          position: "absolute",
          right: "3%",
          top: "3%",
          zIndex: 100,
          padding: "7px 10px",
          cursor: "pointer",
          backgroundColor: "#fff",
          flexWrap: "wrap",
        }}
        onClick={updateData}
      >
        <ImCross scale={1} />
      </div>
      {!showPayment || formValues.payment !== "Paypal" ? (
        <form
          action=""
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
          onSubmit={handleSubmit}
        >
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              className="form-group"
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "13px",
                  lg: "15px",
                  xl: "18px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label style={{ marginBottom: "0px" }} for="firstName">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                style={{ height: "10px", padding: "14px" }}
              />

              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.name}
              </Box>
            </Box>

            <Box
              className="form-group"
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "13px",
                  lg: "15px",
                  xl: "18px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label style={{ marginBottom: "0px" }} for="email">
                E-mail Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                style={{ height: "10px" }}
              />

              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.email}
              </Box>
            </Box>
            <Box
              className="form-group"
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "13px",
                  lg: "15px",
                  xl: "18px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label
                style={{ marginBottom: "0px", whiteSpace: "nowrap" }}
                for="companyName"
              >
                Organization
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                value={formValues.companyName}
                onChange={handleChange}
                style={{ height: "10px" }}
              />
              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.companyName}
              </Box>
            </Box>
            <Box
              className="form-group"
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "13px",
                  lg: "15px",
                  xl: "18px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label style={{ marginBottom: "0px" }} for="phone">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                style={{ height: "10px" }}
              />
              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.phone}
              </Box>
            </Box>
            <Box
              className="form-group"
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "13px",
                  lg: "15px",
                  xl: "18px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label
                style={{ marginBottom: "0px", whiteSpace: "nowrap" }}
                for="passes"
              >
                Number of {cocktailCheck ? "food coupons" : "passes"}
              </label>
              <input
                type="number"
                className="form-control"
                min="0"
                max="3"
                id="passes"
                name="passes"
                readonly={exhibitionCheck && "readonly"}
                value={formValues.passes}
                onChange={handleChange}
                style={{ height: "10px" }}
              />
              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.passes}
              </Box>
            </Box>

            <Box
              className="form-group"
              sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  marginBottom: "0px",
                  whiteSpace: "noWrap",
                }}
                for="payment"
                className="mr-4 mt-1"
              >
                Payment Mode
                <div
                  style={{
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  ( Debit/Credit cards also accepted here )
                </div>
              </label>

              <Box
                className="form-check form-check-inline"
                style={{ position: "relative" }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  id="Razorpay"
                  value="Razorpay"
                  name="payment"
                  onChange={handleChange}
                />
                <label
                  style={{ marginBottom: "0px", flexBasis: "80%" }}
                  className="form-check-label"
                  for="yes"
                >
                  Razorpay{" "}
                  <span style={{ fontSize: "13px" }}> ( preferred mode )</span>
                  <span style={{ fontSize: "13px" }}>
                    {" "}
                    (Choose if your card has 3D security enabled)
                  </span>
                </label>
              </Box>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="Paypal"
                  value="Paypal"
                  name="payment"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="no">
                  Paypal{" "}
                  {/* <span style={{ fontSize: "13px" }}> ( preferred mode )</span> */}
                </label>
              </div>
              
              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.payment}
              </Box>
            </Box>

            {(exhibitionCheck || cocktailCheck) === false && (
              <Box
                className="form-group"
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "13px",
                    lg: "15px",
                    xl: "18px",
                  },
                  width: "40%",
                  marginBottom: "12px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    marginBottom: "0px",
                    whiteSpace: "noWrap",
                    fontSize: "14px",
                  }}
                  for="dinner "
                  className="mr-4 mt-1"
                >
                  Gala Dinner - $249 (Optional)
                </label>

                <input
                  type="checkbox"
                  id="dinner"
                  name="dinner"
                  value="yes"
                  onChange={() =>
                    setFormValues({ ...formValues, dinner: !formValues.dinner })
                  }
                />
                <label
                  for="dinner"
                  className="ml-2"
                  style={{ fontSize: "13px" }}
                >
                  Yes, I want Dinner coupons
                </label>
              </Box>
            )}
            <Box
              className="form-group"
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "13px",
                  lg: "15px",
                  xl: "18px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label
                style={{ marginBottom: "0px", whiteSpace: "nowrap" }}
                for="address"
              >
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formValues.address}
                onChange={handleChange}
                style={{ height: "10px" }}
              />
              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                  marginBottom: 0,
                }}
              >
                {formErrors.address}
              </Box>
            </Box>
            {!cocktailCheck && (
              <Box
                className="form-group"
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "13px",
                    lg: "15px",
                    xl: "18px",
                  },
                  width: "40%",
                }}
              >
                <label style={{ marginBottom: "0px" }} for="voucher">
                  Voucher (if any)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="voucher"
                  name="voucher"
                  value={formValues.voucher}
                  onChange={handleChange}
                  style={{ height: "10px", padding: "14px" }}
                />
                {/* <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                    xl: "15px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.voucher}
              </Box> */}
              </Box>
            )}
            <Box
              style={{
                width: "40%",
                transform: "scale(0.6)",
                transformOrigin: "0 0",
              }}
            >
              <ReCAPTCHA
                sitekey="6LfkoP4hAAAAAMlydoOEf43pE7HC5EZfKd1xEpmt"
                onChange={handleCaptcha}
              />
              <Box
                sx={{
                  color: "#FF2D55",
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "13px",
                    lg: "15px",
                    xl: "18px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.captcha}
              </Box>
            </Box>

            {exhibitionCheck === true && (
              <Box
                style={{
                  width: "40%",
                  transform: "scale(0.6)",
                  transformOrigin: "0 0",
                }}
              ></Box>
            )}

            <Box
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{
                  whiteSpace: "nowrap",
                  backgroundColor: "rgb(13,16,40)",
                  color: "white",
                  border: "none",
                  fontSize: "17px",
                  padding: "0px 25%",
                  height: "40px",
                }}
                onSubmit={handleSubmit}
                onClick={collectdata}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      ) : (
        <div style={{ margin: "25%", marginTop: "10%" }}>
          {displayPaypal()}
          {/* <button type="button" onClick={displayRazorpay()}>RAZORPAY</button>  */}
        </div>
      )}
    </Box>
  );
};

export default SpeakersForm;
