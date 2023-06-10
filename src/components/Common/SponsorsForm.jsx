import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import useRazorpay from "react-razorpay";

const SponsorsForm = ({ updateData, formName, currency, amount, Type }) => {
  const type = Type;
  let response = {};
  let paymentRequestData = {};
  const __DEV__ = document.domain === "localhost";
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
      description: "Test Transaction",
      order_id: data.id,
      handler: (res) => {
        response = res;
        postPayment();
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
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
          firstName,
          lastName,
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
        firstName,
        lastName,
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
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    passes: "",
    exhibition: "",
    sponsorAssets: "Workshop, Session Speaking, Moderator",
  };
  const [formValues, setFormValues] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  const {
    firstName,
    lastName,
    email,
    companyName,
    phone,
    passes,
    exhibition,
    sponsorAssets,
  } = formValues;

  const collectdata = async () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      companyName !== "" &&
      exhibition !== "" &&
      phone !== "" &&
      passes !== "" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      let info = axios({
        url: "https://gla-backend-0adz.onrender.com",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify({
          firstName,
          lastName,
          email,
          companyName,
          phone,
          passes,
          exhibition,
          sponsorAssets,
        }),
      })
        .then((res) => {
          info = res.json();
        })
        .catch((err) => {});

      setTimeout(displayRazorpay, 1000);
    }
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
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
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
    if (!values.passes) {
      errors.passes = "Passes is required";
    }
    if (!values.exhibition) {
      errors.exhibition = "Exhibition is required";
    }

    return errors;
  };
  const handleCaptcha = () => {
    setCaptcha(!captcha);
  };

  return (
    <Box
      style={{
        width: "90% ",
        height: "70%",
        // overflowY: "scroll",
        right: "5%",
        top: "7%",
        zIndex: 130,
        margin: "10% 0 0% 0",
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
            xs: "11px",
            sm: "14px",
            md: "18px",
            lg: "20px",
            xl: "25px",
          },
          padding: {
            xs: "30px",
            sm: "25px",
            md: "10px",
          },
          fontWeight: "bold",
        }}
        style={{ textAlign: "center" }}
      >
        Global Legal Association is the sister concern of Effectual Knowledge
      </Box>
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
      <form
        action=""
        style={{
          backgroundColor: "#fff",
          padding: "5px",
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
            }}
          >
            <label style={{ marginBottom: " 0px" }} for="firstName">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstName"
              style={{ height: "15px" }}
              value={formValues.firstName}
              onChange={handleChange}
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
              {formErrors.firstName}
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
            }}
          >
            <label style={{ marginBottom: " 0px" }} for="lastName">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              style={{ height: "10px" }}
              value={formValues.lastName}
              onChange={handleChange}
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
              {formErrors.lastName}
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
            <label style={{ marginBottom: " 0px" }} for="email">
              E-mail Address
            </label>
            <input
              type="text"
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
              style={{ marginBottom: " 0px", whiteSpace: "nowrap" }}
              for="companyName"
            >
              Company Name
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
            <label style={{ marginBottom: " 0px" }} for="phone">
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
              style={{ whiteSpace: "nowrap", marginBottom: " 0px" }}
              for="passes"
            >
              Number of passes
            </label>
            <input
              type="number"
              className="form-control"
              id="passes"
              min="0"
              max="3"
              name="passes"
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
              style={{ marginBottom: " 0px" }}
              for="exhibition"
              className="mr-4"
            >
              Exhibition space required
            </label>
            <Box className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="yes"
                value="yes"
                name="exhibition"
                onChange={handleChange}
              />
              <label className="form-check-label" for="yes">
                Yes
              </label>
            </Box>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="no"
                value="no"
                name="exhibition"
                onChange={handleChange}
              />
              <label className="form-check-label" for="no">
                No
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
              {formErrors.exhibition}
            </Box>
          </Box>

          <Box
            sx={{
              fontSize: {
                xs: "10px",
                sm: "15px",
                md: "19px",
                lg: "25px",
                xl: "30px",
              },
              width: "40%",
            }}
          >
            <Box
              sx={{
                fontSize: {
                  xs: "9px",
                  sm: "12px",
                  md: "15px",
                  lg: "17px",
                  xl: "17px",
                },
              }}
            >
              Sponsor Assets
              <Box
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "9px",
                    md: "11px",
                    lg: "13px",
                    xl: "15px",
                  },
                }}
              >
                <select
                  name="sponsorAssets"
                  value={formValues.sponsorAssets}
                  onChange={handleChange}
                  style={{
                    height: "35px",
                    width: "100%",
                    backgroundColor: "#EDEAE9 ",
                    marginTop: "10px",
                    borderRadius: "4px",
                    padding: "2px 5px",
                  }}
                >
                  <option value="Workshop, Session Speaking, Moderator">
                    Workshop, Session Speaking, Moderator
                  </option>
                  <option value="Exclusive Case Study Presentation in our Conference Magazine">
                    Exclusive Case Study Presentation in our Conference Magazine
                  </option>
                  <option value="Private Meetings (Private Breakfast, Lunch or Dinner Meetings)">
                    Private Meetings{" "}
                  </option>
                  <option value="Pre-arranged and scheduled 1:1 Meetings">
                    {" "}
                    Pre-arranged and scheduled 1:1 Meetings
                  </option>
                  <option value="Pre-Event Branding Opportunities">
                    {" "}
                    Pre-Event Branding Opportunities{" "}
                  </option>
                  <option value="Panel Discussion Speakership">
                    {" "}
                    Panel Discussion Speakership
                  </option>
                  <option value="Signage/Branding (i.e. Banner, Lanyard, Memento, Badge, Wi-Fi, Folder, Bag etc.)">
                    {" "}
                    Signage/Branding{" "}
                  </option>
                  <option value="Data Access">Data Access</option>
                  <option value="Special Event/Webinars (i.e. opening reception, exhibit hall reception, co-located sessions, etc.)">
                    {" "}
                    Special Event/Webinars{" "}
                  </option>
                </select>
              </Box>
            </Box>
          </Box>
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
          </Box>
          <Box
            style={{
              width: "40%",

              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              disabled={!captcha}
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
    </Box>
  );
};

export default SponsorsForm;
