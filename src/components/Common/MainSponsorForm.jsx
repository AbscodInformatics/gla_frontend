import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import useRazorpay from "react-razorpay";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const MainSponsorForm = ({
  updateData,
  formName,
  currency,
  amount,
  Type,
  setPaidTrue,
  setPaidFalse,
  setLoadingTrue,
  setLoadingFalse,
  setIsSubmit,
  isSubmit,
  venue,
}) => {
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
    setLoadingTrue();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Rajor pay SDK failed to load ");
      return;
    }

    const data = await fetch(
      `https://gla-backend-new-dt4z.onrender.com/razorpay/${currency}/${amount} `,
      {
        method: "post",
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
      description: " Transaction",
      timeout: "300",
      order_id: data.id,
      handler: (res) => {
        response = res;
        response.bill_id = res.razorpay_order_id;
        console.log(response);
        setPaidTrue();
        setTimeout(() => {
          setPaidFalse();
        }, 2100);
        postPayment();
      },
    };

    const rzpay = new Razorpay(options);
    setLoadingFalse();
    rzpay.open();
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
            postPayment();
            return actions.order.capture().then((details) => {
              postPayment();
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name} via paypal`);
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
    address: "",
    payment: "",
    location: venue,
    type,
  };
  let [formValues, setFormValues] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  const { name, email, companyName, phone, payment } = formValues;

  const collectdata = async () => {
    if (
      name !== "" &&
      email !== "" &&
      companyName !== "" &&
      phone !== "" &&
      payment !== "" &&
      captcha &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formValues.type = Type;
      let info = axios({
        url: "https://gla-backend-new-dt4z.onrender.com/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify(formValues),
      })
        .then((res) => {
          info = res.json();
        })
        .catch((err) => {});

      setShowPayment(true);

      if (formValues.payment === "Razorpay") {
        setTimeout(displayRazorpay, 700);
      }
    } //   info =await info.json();
    // console.log(info, "info");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
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

    if (!captcha) {
      errors.captcha = "please fill the captcha";
    }
    if (!values.payment) {
      errors.payment = "Please enter the mode of payment";
    }

    return errors;
  };
  const handleCaptcha = () => {
    setCaptcha(!captcha);
  };

  return (
    <Box
      style={{
        height: "80%",
        right: "5%",
        top: "3%",
        zIndex: 1300000,
        width: "90% ",
        margin: "8% 0 0% 0",
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
            xs: "12px",
            sm: "14px",
            md: "17px",
            lg: "20x",
            xl: "22px",
          },
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        {formName}
      </Box>

      <div
        style={{
          border: "1px solid #e6e6e6",
          position: "absolute",
          right: "3%",
          top: "3%",
          zIndex: 100,
          padding: "10px 10px",
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
                  xs: "10px",
                  sm: "13px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                },
                width: "40%",
                marginBottom: "12px",
              }}
            >
              <label style={{ marginBottom: "0px" }} for="name">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formValues.name}
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
                {formErrors.name}
              </Box>
            </Box>

            <Box
              className="form-group"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "13px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
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
                  xs: "10px",
                  sm: "13px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
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
                  xs: "10px",
                  sm: "13px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
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
                  xs: "10px",
                  sm: "13px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
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
                }}
              >
                {formErrors.address}
              </Box>
            </Box>

            <Box
              className="form-group"
              sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: {
                  xs: "10px",
                  sm: "13px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
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
                Payment Mode{" "}
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
                </label>
              </div>
              <Box className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="Razorpay"
                  value="Razorpay"
                  name="payment"
                  onChange={handleChange}
                />
                <label
                  style={{ marginBottom: "0px" }}
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

            <Box
              style={{
                width: "40%",
                transform: "scale(0.5)",
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
                    lg: "18px",
                    xl: "20px",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                {formErrors.captcha}
              </Box>
            </Box>

            <Box
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-start",
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
                  padding: "0px 20%",
                  height: "40px",
                  // marginTop: "25px"
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

export default MainSponsorForm;
