import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "./style.css";
import Swal from "sweetalert2";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import "./awardForm.css";

const HomeForm = ({ updateData, updateAward }) => {
  const history = useHistory();
  const intialValue = {
    name: "",
    email: "",
    phone: "",
    query:"",
  };
  const [formValues, setFormValues] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { name, email, phone, query } = formValues;

  const collectdata = async () => {
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      query!=="" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      let info = axios({
        url: "https://gla-backend-new-dt4z.onrender.com/leads",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Connection: "keep-alive",
        },
        data: JSON.stringify(formValues),
      })
        .then((res) => {
          info = res.json();
        })
        .catch((err) => {});
      handleSwal();
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
      errors.phone = "Phone number is required";
    }
     if (!values.query) {
       errors.query = "Query  is required";
     }

    return errors;
  };

  const handleSwal = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "submitted successfully",
    });
  };

  const handleAward = () => {
    // updateData();
    updateAward();
  };

  return (
    <div
      className="fade-in"
      style={{
        width: "100% ",

        height: "200vh",
        top: "-23%",
        zIndex: 13000,
        margin: "10% 0 0% 0",
        position: "fixed",
        borderRadius: "8px",
        boxShadow: "black 0px 3px 7px",
        backgroundColor: " rgba(222,223,220,.75)",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "50%",
            md: "50%",
            lg: "40%",
            xl: "30%",
          },
          position: "relative",
          // height: {
          //   xs: "30%",
          //   sm: "35%",
          //   md: "50%",
          //   // lg: "50%",
          //   // xl:"50%"
          // },
          right: {
            xs: "15%",
            md: "22%",
            lg: "23%",
          },
          top: "4%",
          zIndex: 130,
          margin: "10% 0 0% 0",
          position: "fixed",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "black 0px 3px 7px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            top: "0%",
            right: "-13%",
            padding: "4px 10px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/Awards")}
        >
          <Box
            className="award"
            sx={{
              fontSize: {
                xs: "10px",
                sm: "12px",
                md: "15px",
                lg: "22px",
                xl: "27px",
              },
            }}
          >
            Register For Award And Recognition
          </Box>
          <div>
            {" "}
            <AiOutlineArrowRight size={25} style={{ marginLeft: "20px" }} />
          </div>
        </div>
        <h1>
          <Box
            className="text-justify"
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "8px",
                sm: "12px",
                md: "14px",
                lg: "18px",
                xl: "20px",
              },
              padding: {
                xs: "30px",
                sm: "25px",
                md: "20px",
              },

              marginRight: "7%",
              fontWeight: "bold",
            }}
          >
            Global Legal Association - Legal Summit 2023
          </Box>
        </h1>

        <Box
          sx={{
            border: "1px solid #e6e6e6",
            position: "absolute",
            right: "3%",
            top: {
              xs: "14px",
              md: "40px",
              lg: "17%",
            },
            zIndex: 100,
            padding: "3px 7px",
            cursor: "pointer",
            backgroundColor: "black",
            flexWrap: "wrap",
          }}
          onClick={updateData}
        >
          <ImCross size={13} style={{ color: "white" }} />
        </Box>
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
                {" "}
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
              <label style={{ marginBottom: "0px" }} for="query">
                Query
              </label>
              <input
                type="text"
                className="form-control"
                id="query"
                name="query"
                value={formValues.query}
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
                {formErrors.query}
              </Box>
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
                style={{
                  whiteSpace: "nowrap",

                  backgroundColor: "rgb(13,16,40)",
                  color: "white",
                  border: "none",
                  fontSize: "17px",
                  padding: "0px 25%",
                  height: "40px",
                  width: "100%",
                  marginTop: "18px",
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
    </div>
  );
};

export default HomeForm;

// isSubmit?updateData:null
