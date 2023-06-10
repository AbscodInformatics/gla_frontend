import React from "react";
import { Link } from "react-router-dom";
import "isomorphic-fetch";
import OtherFooter from "../Common/OtherFooter";
import axios from "axios";
// import { Box } from "@material-ui/core";

class Contact extends React.Component {
  state = {
    submitting: false,
    submitted: false,
    buttonState: "",
    formFields: {
      name: "",
      email: "",
      phone: "",
      text: "",
    },
    formErrors: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state.formFields;
    // fetch("http://3.145.60.120:5500/contact", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    if (
      this.state.formFields.name !== "" &&
      this.state.formFields.email !== "" &&
      this.state.formFields.phone !== ""
    ) {
      let info = axios({
        url: "https://gla-backend-new-dt4z.onrender.com/contact",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify(data),
      }).then((res) => {
        info = res.json();
        if (res.status === 200) {
          this.setState({ submitted: true });
        }
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = "";
        formFields.email = "";
        formFields.phone = "";
        formFields.text = "";
        this.setState({ formFields });
      });
      this.setState({
        formFields: {
          name: "",
          email: "",
          phone: "",
          text: "",
        },
      });
    } else {
      alert("Please fill the fields with asterick");
    }
  };

  nameChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.name = e.target.value;
    this.setState({ formFields });
  };

  emailChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.email = e.target.value;
    this.setState({ formFields });
  };

  phoneChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.phone = e.target.value;
    this.setState({ formFields });
  };

  textChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.text = e.target.value;
    this.setState({ formFields });
  };

  onHideSuccess = () => {
    this.setState({ submitted: false });
  };

  successMessage = () => {
    if (this.state.submitted) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          style={{ marginTop: "14px" }}
        >
          <strong>Thank you!</strong> Your message is send to the owner.
          <button type="button" className="close" onClick={this.onHideSuccess}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="page-title-area contact-banner"
          style={{ height: "350px", opacity: 0.8 }}
        >
          <div className="container">
            <h1>Contact Us</h1>
            <span>Send me your Message</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <section className="contact-area ptb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 " style={{ padding: 0 }}>
                <div
                  className="contact-box "
                  style={{
                    display: "flex",
                    padding: "10px 5px 5px 10px",
                    gap: "3%",
                  }}
                >
                  <div style={{ marginLeft: "3%" }}>
                    <img src="images/contactPhone.png" alt="" />
                  </div>

                  <div
                    className="content"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h4 style={{ marginBottom: 0 }}>Phone</h4>
                    <p style={{ marginTop: "5px" }}>+1 716 941 7798</p>
                    <p>+91 97114 25481</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 " style={{ padding: 0 }}>
                <div
                  className="contact-box h-24"
                  style={{
                    display: "flex",
                    padding: "10px 5px 5px 10px",
                    gap: "3%",
                  }}
                >
                  <div style={{ marginLeft: "3%" }}>
                    <img src="images/contactEmail.png" alt="" />
                  </div>

                  <div
                    className="content"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h4 style={{ marginBottom: 0 }}>E-mail</h4>
                    <p style={{ fontSize: "13px" }}>
                      {" "}
                      events@globallegalassociation.org
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 " style={{ padding: 0 }}>
                <div
                  className="contact-box h-24"
                  style={{
                    display: "flex",
                    padding: "10px 5px 5px 10px",
                    gap: "3%",
                  }}
                >
                  <div style={{ marginLeft: "3%" }}>
                    <img src="images/contactAddress.png" alt="" />
                  </div>

                  <div
                    className="content"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h4 style={{ marginBottom: 0 }}>Address</h4>
                    <p style={{ fontSize: "13px" }}>
                      {" "}
                      Suite-427,425 Broadhollow Road, Melville | NY-11747
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row h-100 align-items-center contact-form">
              <div className="col-lg-4 col-md-12">
                <div className="leave-your-message">
                  <h3>Leave Your Message</h3>
                  <p>
                    If you have any questions about the services we provide
                    simply use the form below. We try and respond to all queries
                    and comments within 24 hours.
                  </p>

                  <div className="stay-connected">
                    <h3>Stay Connected</h3>
                    <ul>
                      <li>
                        <Link
                          to="#"
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/in/global-legal-association-68a89b249",
                              "_blank"
                            )
                          }
                          style={{ display: "flex", gap: "5px" }}
                        >
                          {/* <i className="icofont-facebook"></i> */}
                          <img
                            src="images/contactLinkedin.jpg"
                            style={{ height: "25px", width: "25px" }}
                            alt=""
                          />
                          <span
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {" "}
                            <p> Linkedin </p>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                <form onSubmit={this.onSubmit} id="contactForm">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Name*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Please enter your name"
                          id="name"
                          data-error="Please enter your name"
                          value={this.state.formFields.name}
                          onChange={this.nameChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Please enter your e-mail"
                          name="email"
                          id="email"
                          data-error="Please enter your email"
                          value={this.state.formFields.email}
                          onChange={this.emailChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="number">Phone Number*</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Please enter your phone number"
                          name="number"
                          id="number"
                          data-error="Please enter your number"
                          value={this.state.formFields.phone}
                          onChange={this.phoneChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Please enter your message here"
                          id="message"
                          cols="30"
                          rows="4"
                          data-error="Write your message"
                          value={this.state.formFields.text}
                          onChange={this.textChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden">
                        {this.successMessage()}
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <OtherFooter />
      </React.Fragment>
    );
  }
}

export default Contact;
