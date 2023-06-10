import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
// import logo from '.././assets/images/gla_logo.png';
import SponsorsForm from "../Common/SponsorsForm";
import SpeakersForm from "../Common/SpeakersForm";
import RequestToSpeak from "../Common/RequestToSpeak";
import AwardForm from "../Common/AwardForm";
import PreloaderPayment from "../Shared/PreloaderPayment";
import Award from "../Awards/Index";

class Navigation extends React.Component {
  state = {
    collapsed: true,
    isOpen: false,
    open: false,
    openSponsor: false,
    openSpeak: false,
    openPrice: false,
    openAward: false,
    isSubmit: false,
    loading: false,
  };

  // updateSponsorData = () => {
  //   this.setState({ openSponsor: !this.state.openSponsor });
  // };

  // updateSpeakData = () => {
  //   this.setState({ openSpeak: !this.state.openSpeak });
  // };
  // updatePriceData = () => {
  //   this.setState({ openPrice: !this.state.openPrice });
  // };
  updateAward = () => {
    this.setState({ openAward: !this.state.openAward });
    // this.state.award = !this.state.award;
    // this.setState({ openSponsor: !this.state.openSponsor });
  };
  updateLoading = () => {
    this.state.loading
      ? this.setState({ loading: false })
      : this.setState({ loading: true });
    console.log(this.state.loading);
    console.log("update loading");
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
        window.history.pushState("", document.title, window.location.pathname);
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  componentDidUpdate(nextProps) {
    if (this.props.match.path !== nextProps.match.path) {
      // this.onRouteChanged();
    }
  }

  onRouteChanged = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return this.state.loading ? (
      <PreloaderPayment />
    ) : (
      <header id="header" className="header-area">
        <div id="navbar" className="elkevent-nav">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div
                style={{
                  height: "1%",
                  width: "7%",
                  borderRadius: "30px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  marginRight: "10%",
                }}
              >
                <Link to="/">
                  <img
                    src="images/gla_original.png"
                    alt="logo"
                    style={{ height: "80%", width: "100%" }}
                  />{" "}
                </Link>{" "}
              </div>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={classOne}
                id="navbarSupportedContent"
                style={{ marginLeft: "10px" }}
              >
                <ul className="navbar-nav" style={{ gap: "2%", width: "100%" }}>
                  <li className="nav-item">
                    <Link
                      exact="true"
                      to="/"
                      onClick={this.toggleOpen}
                      className="nav-link"
                    >
                      Home
                    </Link>

                    <ul className={menuClass}>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          exact
                          to="/about-us"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "black" }}>
                        <Link
                          to="/policies"
                          className="nav-link"
                          onClick={this.toggleOpen}
                        >
                          Policies
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/events-amsterdam-legal"
                      className="nav-link"
                      onClick={this.toggleOpen}
                    >
                      Upcoming Events
                    </Link>
                    <ul className={menuClass}>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          exact
                          to="/events-amsterdam-legal"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          1. &nbsp; GLA Litigation Amsterdam
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          exact
                          to="/events-amsterdam-ip"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          2. &nbsp; GLA IP Amsterdam
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          to="/events-dubai-legal"
                          // to="/past-events"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          3. &nbsp; GLA Litigation Dubai
                        </NavLink>
                      </li>

                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          to="/events-dubai-ip"
                          // to="/past-events"

                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          4. &nbsp; GLA IP Dubai
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/agenda-amsterdam-legal"
                      className="nav-link"
                      onClick={this.toggleOpen}
                    >
                      Agenda
                    </Link>
                    <ul className={menuClass}>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          exact
                          to="/agenda-amsterdam-legal"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          1. &nbsp; GLA Litigation Amsterdam
                        </NavLink>
                      </li>

                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          to="/agenda-amsterdam-ip"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                          style={{ color: "blcak" }}
                        >
                          {" "}
                          2. &nbsp;GLA IP Amsterdam
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          to="/agenda-dubai-legal"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          {" "}
                          3. &nbsp;GLA Litigation Dubai
                        </NavLink>
                      </li>

                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          to="/agenda-dubai-ip"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          {" "}
                          4. &nbsp;GLA IP Dubai
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/speakers-amsterdam-legal"
                      className="nav-link"
                      onClick={this.toggleOpen}
                    >
                      Speakers
                    </Link>
                    <ul className={menuClass}>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          exact
                          to="/speakers-amsterdam-legal"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          1. &nbsp; GLA Litigation Amsterdam
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          exact
                          to="/speakers-amsterdam-ip"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          2. &nbsp; GLA IP Amsterdam
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          to="/speakers-dubai-legal"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          3. &nbsp; GLA Litigation Dubai
                        </NavLink>
                      </li>

                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          to="/speakers-dubai-ip"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          4. &nbsp; GLA IP Dubai
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/past-events"
                      className="nav-link"
                      onClick={this.toggleOpen}
                    >
                      Past Events
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/pricing-legal-ams"
                      className="nav-link"
                      onClick={this.toggleOpen}
                    >
                      Registration
                    </Link>
                    {/* {this.state.openSponsor && < SponsorsForm formName="Want to become a sponsor" updateData={this.updateSponsorData} />} */}
                    {this.state.openSpeak && (
                      <RequestToSpeak
                        formName="Want to become a speaker ?"
                        updateData={this.updateSpeakData}
                        Type="speaker"
                      />
                    )}
                    {this.state.award && (
                      <RequestToSpeak
                        formName="Want to become a Member ?"
                        updateData={this.updateAward}
                        Type="Member"
                      />
                    )}
                    {/* {this.state.openPrice && <SpeakersForm formName="Fill the Details Below" updateData={this.updatePriceData} />} */}

                    <ul className={menuClass}>
                      <li className="nav-item" style={{ color: "black" }}>
                        <NavLink
                          exact
                          to="/pricing-legal-ams"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                        >
                          1. &nbsp; GLA Litigation Conference Amsterdam
                        </NavLink>
                      </li>

                      <li className="nav-item" style={{ color: "blcak" }}>
                        <NavLink
                          to="/pricing-ip-ams"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                          style={{ color: "blcak" }}
                        >
                          2. &nbsp;GLA IP Conference Amsterdam
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "blcak" }}>
                        <NavLink
                          to="/pricing-legal-dubai"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                          style={{ color: "blcak" }}
                        >
                          3. &nbsp;GLA Litigation Conference Dubai
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ color: "blcak" }}>
                        <NavLink
                          to="/pricing-ip-dubai"
                          className="nav-link"
                          onClick={this.toggleNavbar}
                          style={{ color: "blcak" }}
                        >
                          4. &nbsp;GLA IP Conference Dubai
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li
                    className="nav-item"
                    onClick={() =>
                      this.setState({
                        openAward: this.state.openAward ? false : true,
                      })
                    }
                  >
                    {this.state.openAward && (
                      <AwardForm
                        updateData={this.updateAward}
                        amount="399"
                        currency="USD"
                        isSubmit={this.state.isSubmit}
                        setLoading={this.updateLoading}
                        // setIsSubmit={this.setState({ isSubmit: true })}
                      />
                    )}
                    <Link to="#" className="nav-link">
                      Awards
                    </Link>
                  </li> */}
                  {/* <li
                    className="nav-item"
                    
                    onClick={() =>
                      this.setState({ openAward: !this.state.openAward })
                    }
                  >
                    {this.state.openAward && (
                      <AwardForm
                        updateData={this.updateAward}
                        amount="399"
                        currency="USD"
                        isSubmit={this.state.isSubmit}
                        setLoading={this.updateLoading}
                      />
                    )}
                    <NavLink
                      to="/"
                      className="nav-link"
                      // onClick={this.toggleOpen}
                      style={{ margin: 0 }}
                    >
                      AWARDS
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      to="/Awards"
                      className="nav-link"
                      onClick={this.toggleOpen}
                      style={{ margin: 0 }}
                    >
                      Awards
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      onClick={this.toggleOpen}
                      style={{ margin: 0 }}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Navigation);
