import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import useRazorpay from "react-razorpay";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const AwardForm = ({
  defaultPasses,
  updateData,
  formName,
  currency,
  amount,
  Type,
  checked,
  disabled,
  setPaid,
  setLoading,
  setIsSubmit,
  isSubmit,
}) => {
  // const [showPayment, setShowPayment] = useState(false);
  // const [file, setFile] = useState("");
  // const [referral, setReferral] = useState("");

  // const handleFile = (e) => {
  //   setFile(e.target.files[0]);
  // };
  // const handleReferral = (e) => {
  //   setReferral(e.target.files[0]);
  //   console.log(e.target.files[0]);
  // };

  // const type = Type;
  // let paymentRequestData = {};
  // let response = {};
  // const Razorpay = useRazorpay();
  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     document.body.appendChild(script);
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };

  // const displayRazorpay = async () => {
  //   // setLoading(true);
  //   setLoading();
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );
  //   if (!res) {
  //     alert("Rajor pay SDK failed to load ");
  //     return;
  //   }
  //   // https://gla-backend-new-dt4z.onrender.com/
  //   const data = await fetch(
  //     `https://gla-backend-new-dt4z.onrender.com/razorpay/${currency}/${amount}`,
  //     {
  //       method: "post",
  //     }
  //   ).then((t) => t.json());
  //   if (data && Object.keys(response).length === 0) {
  //     failedPayments();
  //   }
  //   paymentRequestData = data;

  //   const options = {
  //     key: "rzp_live_UeiEPxqvCQonX9",
  //     amount: data.amount.toString(),
  //     currency: data.currency,
  //     name: "Global legal association",
  //     description: " Transaction",
  //     timeout: "300",
  //     order_id: data.id,

  //     handler: (res) => {
  //       response = res;
  //       response.bill_id = res.razorpay_order_id;
  //       setPaid(true);
  //       setTimeout(() => {
  //         setPaid(false);
  //       }, 2100);
  //       postPayment();
  //     },
  //   };

  //   const rzpay = new Razorpay(options);
  //   // setLoading(false);
  //   setLoading();

  //   rzpay.open();
  // };

  // const displayPaypal = () => {
  //   return (
  //     <PayPalScriptProvider
  //       options={{
  //         "client-id":
  //           "AXl-aEPtisx3FRaeelqyIwygWwddtSXVpvMJlr5-6vYwS6vOZyhp_q-Pvk7mns9eGrUWrMnbOU--Xnpc",
  //       }}
  //     >
  //       <PayPalButtons
  //         createOrder={(data, actions) => {
  //           return actions.order.create({
  //             purchase_units: [
  //               {
  //                 amount: {
  //                   value: `${amount}`,
  //                   currency_code: `${currency}`,
  //                 },
  //               },
  //             ],
  //           });
  //         }}
  //         style={{
  //           layout: "horizontal",
  //           color: "blue",
  //           shape: "rect",
  //           label: "paypal",
  //         }}
  //         onApprove={(data, actions) => {
  //           response = data;
  //           postPayment();
  //           return actions.order.capture().then((details) => {
  //             const name = details.payer.name.given_name;
  //             alert(`Transaction completed by ${name}`);
  //           });
  //         }}
  //         onError={(err) => {
  //           alert(err);
  //         }}
  //       />
  //     </PayPalScriptProvider>
  //   );
  // };

  // const postPayment = () => {
  //   if (response !== {}) {
  //     let info = axios({
  //       url: "https://gla-backend-new-dt4z.onrender.com/razorpay",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       data: JSON.stringify({
  //         response,
  //         name,
  //         year,
  //         clientele,
  //         employeeCount,
  //         category,
  //         paymentRequestData,
  //         type: "awards",
  //       }),
  //     })
  //       .then((res) => {
  //         info = res.json();
  //       })
  //       .catch((err) => {});
  //   }
  // };

  // const failedPayments = () => {
  //   let info = axios({
  //     url: "https://gla-backend-new-dt4z.onrender.com/no-payments",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     data: JSON.stringify({
  //       name,
  //       year,
  //       clientele,
  //       employeeCount,
  //       category,
  //     }),
  //   })
  //     .then((res) => {
  //       info = res.json();
  //     })
  //     .catch((err) => {});
  // };

  const intialValue = {
    name: "",
    address: "",
    phone: "",
    businessDuration: "",
    employeeCount: "",
    category: "",
    presence: "",
  };
  let [formValues, setFormValues] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [captcha, setCaptcha] = useState(false);

  const {
    name,
    address,
    phone,
    businessDuration,
    employeeCount,
    presence,
    category,
  } = formValues;
  const collectdata = async () => {
    if (
      name !== "" &&
      address !== "" &&
      phone !== "" &&
      businessDuration !== "" &&
      employeeCount !== "" &&
      presence !== "" &&
      category !== "" &&
      // referral !== "" &&
      // file.size <= 25000000 &&
      // referral.size <= 25000000 &&
      captcha
    ) {
      const formData = new FormData();
      // formData.append("file", file);
      // formData.append("referral", referral);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("phone", phone);
      formData.append("businessDuration", businessDuration);
      formData.append("employeeCount", employeeCount);
      formData.append("category", category);
      formData.append("presence", presence);

      axios
        .post("https://gla-backend-new-dt4z.onrender.com/awards", formData, {
          headers: {
            "Content-Disposition": "attachment; filename=template.xlsx",
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
          responseType: "arraybuffer",
        })
        .then((res) => {
          console.log("success in API");
        })
        .catch((err) => {
          console.log(err, "error in API");
        });
      // setShowPayment(true);

      // if (formValues.payment === "Razorpay") {
      updateData();
      // }
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
    // setIsSubmit();
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("useEffect called ");
      updateData();
    }
  }, [formErrors, formValues, isSubmit, updateData]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.phone) {
      errors.phone = "Phone is required";
    }

    if (!values.businessDuration) {
      errors.businessDuration = "Business Duration is required";
    }
    if (!values.employeeCount) {
      errors.employeeCount = "Number of Employee is required";
    }
    if (!captcha) {
      errors.captcha = "Please fill the Captcha";
    }
    if (!values.presence) {
      errors.presence = "Please enter the area of  Presence";
    }
    if (!values.category) {
      errors.category = "Please select the category of  award";
    }

    // if (!referral) {
    //   errors.referral = "Referral is required";
    // }
    // if (referral.size > 25000000) {
    //   errors.referral = "file limit 25 MB";
    // }
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
        right: "5%",
        top: "4%",
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
            md: "5px",
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
            xs: "11px",
            sm: "14px",
            md: "18px",
            lg: "20px",
            xl: "25px",
          },
          padding: {
            xs: "30px",
            sm: "25px",
            md: "5px",
          },
          fontWeight: "bold",
        }}
        style={{ textAlign: "center" }}
      >
        Awards and Recognition
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
          padding: "5px 10px",
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
              marginBottom: "0px",
            }}
          >
            <label style={{ margin: 0 }} for="name">
              Name of the Firm
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              style={{ height: "10px", marginBottom: "5px" }}
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
              marginBottom: "0px",
            }}
          >
            <label style={{ marginBottom: "0px" }} for="address">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formValues.address}
              onChange={handleChange}
              style={{ height: "10px", marginBottom: "5px" }}
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
              fontSize: {
                xs: "10px",
                sm: "13px",
                md: "16px",
                lg: "18px",
                xl: "20px",
              },
              width: "40%",
              marginBottom: "0px",
            }}
          >
            <label
              style={{ marginBottom: "0px", whiteSpace: "nowrap" }}
              for="phone"
            >
              Phone number
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
              marginBottom: "0px",
            }}
          >
            <label style={{ marginBottom: "0px" }} for="businessDuration">
              Duration in Business ( in years)
            </label>
            <input
              type="number"
              className="form-control"
              id="businessDuration"
              name="businessDuration"
              onChange={handleChange}
              style={{ padding: "5px", height: "30px", marginBottom: "5px" }}
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
              {formErrors.businessDuration}
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
              marginBottom: "0px",
            }}
          >
            <label style={{ marginBottom: "0px" }} for="employeeCount">
              Number of employees
            </label>
            <input
              type="number"
              className="form-control"
              id="employeeCount"
              name="employeeCount"
              onChange={handleChange}
              // onChange={(e) => handleReferral(e)}
              style={{ padding: "5px", height: "30px", marginBottom: "5px" }}
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
              {formErrors.employeeCount}
            </Box>
          </Box>

          <Box
            className="form-group"
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
              fontSize: {
                xs: "10px",
                sm: "13px",
                md: "16px",
                lg: "18px",
                xl: "20px",
              },
              width: "40%",
              marginBottom: "0px",
            }}
          >
            <label
              style={{
                display: "flex",
                marginBottom: "0px",
              }}
              for="presence"
              className="mr-4"
            >
              Global Presence
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="No"
                value="No"
                name="presence"
                onChange={handleChange}
              />
              <label className="form-check-label" for="no">
                No
              </label>
            </div>
            <Box className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="Yes"
                value="Yes"
                name="presence"
                onChange={handleChange}
              />
              <label
                style={{ marginBottom: "0px" }}
                className="form-check-label"
                for="yes"
              >
                Yes
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
              {formErrors.presence}
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
              marginBottom: "0px",
            }}
          >
            <label
              style={{ marginBottom: "0px", whiteSpace: "nowrap" }}
              for="passes"
            >
              Award Categories
            </label>
            <select
              id="category"
              name="category"
              class="form-select"
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option selected>Open this select menu</option>
              <option value="Diversity & Inclusion: Outstanding Firm in Europe">
                Diversity & Inclusion: Outstanding Firm in Europe
              </option>
              <option value="Pro Bono: Outstanding Firm in Europe">
                Pro Bono: Outstanding Firm in Europe
              </option>
              <option value="Boutique Law Firm of the Year in Europe">
                Boutique Law Firm of the Year in Europe
              </option>
              <option value="Best Legal Place to work of the Year in Europe">
                {" "}
                Best Legal Place to work of the Year in Europe
              </option>
              <option value="International Law Firm of the Year in Europe">
                {" "}
                International Law Firm of the Year in Europe
              </option>
              <option value="Netherland Firm of the Year in Europe">
                {" "}
                Netherland Firm of the Year in Europe
              </option>
              <option value="Best Advisory Firm of the Year in Europe">
                {" "}
                Best Advisory Firm of the Year in Europe
              </option>
              <option value="Europe-wide Firm of the Year with international presence">
                Europe-wide Firm of the Year with international presence
              </option>
            </select>
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
              {formErrors.category}
            </Box>
          </Box>

          <Box
            style={{
              width: "40%",
              transform: "scale(0.6)",
              transformOrigin: "0 0",
              marginTop: "1.5%",
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
                  lg: "16px",
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
              width: "70%",
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
                padding: "0px 17%",
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

export default AwardForm;

// isSubmit?updateData:null
