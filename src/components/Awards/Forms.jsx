import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
const currencies = [
  {
    value: "GLA Europe -2023",
    label: "GLA Europe -2023",
  },
  {
    value: "GLA Dubai -2024",
    label: "GLA Dubai -2024",
  },
];

const currencies1 = [
  {
    value: "Awards in Europe",
    label: "Awards in Europe",
    subCategories: [
      "Diversity & Inclusion: Outstanding Firm in Europe",
      "Europe-wide Firm of the Year with international presence",
      "Pro Bono: Outstanding Firm in Europe",
      "Best Advisory Firm of the Year in Europe",
      "Boutique Law Firm of the Year in Europe",
      "Netherland Firm of the Year in Europe",
      "Best Legal Place to work of the Year in Europe",
      "International Law Firm of the Year in Europe",
    ],
  },
  {
    value: "Law Firm Awards",
    label: "Law Firm Awards",
    subCategories: [
      "The ADR Law Firm of the Year",
      "The Banking and Financial Services Law Firm of the Year",
      "Emerging Law Firm of the Year",
      "The Environment Law Firm of the Year",
      "Litigation Law Firm of the Year",
      "Mergers and Acquisition Law Firm of the Year",
      "Real Estate Law Firm of the Year",
      "Restructuring and Insolvency Law Firm of the Year",
      "Start-up and Investment Law Firm of the Year",
      "Technology, Media, and Telecommunications Law Firm of the Year",
    ],
  },
  {
    value: "In-House & Individual Awards",
    label: "In-House & Individual Awards",
    subCategories: [
      // Add sub categories for this award category
      " Legal Department Of the Year -Large Team",
      "Legal Department Of the Year -Small Team",
      "General Counsel of the Year -Large Team",
      "General Counsel of the Year -Small Team",
      "Rising Star Award",
      "Best Use of Technology by an In-House Team",
      "Diversity Initiative of the Year",
      "Counsel of the Year – Independent Practice (above 50)",
      "Managing Partner of the Year",
      "Woman Lawyer of the Year",
      "Pro-bono Lawyer of the Year",
      "Most Innovative Lawyer of the Year",
      "Employment Law Award",
      "Intellectual Property Award",
    ],
  },
  {
    value: "Legal Startups and Service Providers Awards",
    label: "Legal Startups and Service Providers Awards",
    subCategories: [
      // Add sub categories for this award category
      " Legal-Tech Startup of the Year",
      "Best Legal Entrepreneur of the Year",
      "Best Service Provider to the Legal Sector of the Year",
      "Policy Think-tank of the Year",
    ],
  },
  {
    value: "Intellectual Property (IP) Awards",
    label: "Intellectual Property (IP) Awards",
    subCategories: [
      // Add sub categories for this award category
      " Trademark Law Firm of the Year",
      "Patent Law Firm of the Year",
      "Patent Attorney of the Year",
      "Best Firm in Patent Prosecution & Litigation",
      "Trademark Attorney of the Year",
      "Women in IP",
    ],
  },
];

const Forms = () => {
  const [formData, setFormData] = useState({
    Nomination: "",
    Category: "",
    FirstName: "",
    LastName: "",
    Address: "",
    City: "",
    JobTitle: "",
    Phone: "",
    StreetAddress: "",
    codeZip: "",
    email: "",
    Organization: "",
    SubCategory: "",
  });

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (
      formData.FirstName !== "" &&
      formData.email !== "" &&
      formData.Phone !== "" &&
      formData.Organization !== ""
    ) {
      Swal.fire({
        title: "Submitted Form",
        text: "Thank you for submitting the Award Form. We will review and get back to you in 24 hours",
        icon: "success",
        cancelButtonColor: "#d33",
      })
          const data = { ...formData };

          axios
            .post("https://gla-backend-new-dt4z.onrender.com/awardForm", data)
            .then((response) => {
              console.log(response.data);
              Swal.fire({
                title: "Success",
                text: "Form submitted successfully!",
                icon: "success",
              });
              setFormData({
                Nomination: "",
                Category: "",
                FirstName: "",
                LastName: "",
                Address: "",
                City: "",
                JobTitle: "",
                Phone: "",
                StreetAddress: "",
                codeZip: "",
                email: "",
                Organization: "",
                SubCategory: "",
              });
            })
            .catch((error) => {
              console.error(error);
              Swal.fire({
                title: "Error",
                text: "An error occurred while submitting the form.",
                icon: "error",
              });
            });
      
    } else {
      Swal.fire({
        title: "Error",
        text: "Please Fill mandatory fields.",
        icon: "error",
      });
    }
  };
  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      Category: e.target.value,
      SubCategory: "",
    });
  };

  const subCategories =
    currencies1.find((category) => category.value === formData.Category)
      ?.subCategories || [];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // Optional, adjust based on your layout requirements
    >
      {/* Place the component you want to center here */}

      <div className="col-lg-8 col-md-12">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1c90c7",
            color: "white",
          }}
        >
          Award Form
        </h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="Event-For-Award-Nomination">
                  Choose Your Event For Award Nomination
                </label>
                <TextField
                  id="Event-For-Award-Nomination"
                  select
                  name="Nomination"
                  value={formData.Nomination}
                  onChange={handleForm}
                  className="col-lg-12 col-md-6"
                  label="Choose Your Event For Award Nomination"
                  // helperText="Choose Your Award Category (1st Preference)*"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="Category">
                  Choose Your Award Category (1st Preference)
                </label>
                <TextField
                  id="Category"
                  select
                  name="Category"
                  value={formData.Category}
                  onChange={handleCategoryChange}
                  className="col-lg-12 col-md-6"
                  label="Choose Your Award Category (1st Preference)"
                >
                  {currencies1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="Event-For-Award-sub">
                  Choose Your Award Sub Category
                </label>
                <TextField
                  id="Event-For-Award-sub"
                  select
                  name="SubCategory"
                  value={formData.SubCategory}
                  onChange={handleForm}
                  className="col-lg-12 col-md-6"
                  label=" Choose Your Award Sub Category"
                >
                  {subCategories.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="name1"> First Name*</label>
                <TextField
                  id="name1"
                  label="First Name"
                  value={formData.FirstName}
                  onChange={handleForm}
                  name="FirstName"
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="name2">Last Name</label>
                <TextField
                  id="name2"
                  label="Last Name"
                  value={formData.LastName}
                  onChange={handleForm}
                  name="LastName"
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="JobTitle">Job Title</label>
                <TextField
                  id="JobTitle"
                  label="Job Title"
                  value={formData.JobTitle}
                  onChange={handleForm}
                  name="JobTitle"
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="Organization">Organization*</label>
                <TextField
                  id="Organization"
                  label="Organization"
                  value={formData.Organization}
                  onChange={handleForm}
                  name="Organization"
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <TextField
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleForm}
                  label="Email"
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <TextField
                  id="Address"
                  name="Address"
                  label="Address"
                  value={formData.Address}
                  onChange={handleForm}
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="Phone">Phone*</label>
                <TextField
                  id="Phone"
                  label="Phone"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleForm}
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="StreetAddress">Street Address</label>
                <TextField
                  id="StreetAddress"
                  label="Street Address"
                  name="StreetAddress"
                  value={formData.StreetAddress}
                  onChange={handleForm}
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="City">City</label>
                <TextField
                  id="City"
                  label="City"
                  value={formData.City}
                  onChange={handleForm}
                  name="City"
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label htmlFor="codeZip">ZIP / Postal Code</label>
                <TextField
                  id="codeZip"
                  label="ZIP / Postal Code"
                  name="codeZip"
                  value={formData.codeZip}
                  onChange={handleForm}
                  variant="outlined"
                  className="col-lg-12 col-md-6"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <button type="submit" className="btn btn-primary">
                Register For Free
              </button>
              <div id="msgSubmit" className="h3 text-center hidden">
                {/* {this.successMessage()} */}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Forms;
