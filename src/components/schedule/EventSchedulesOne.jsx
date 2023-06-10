import React from "react";
import { Link } from "react-router-dom";
import ControlledAccordions from "../schedule/ScheduleNew";

class EventSchedulesOne extends React.Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };
  render() {
    return (
      <section className="schedule-area bg-image ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab">
                <ul className="tabs active">
                  <li
                    onClick={(e) => this.openTabSection(e, "tab1")}
                    className="current"
                  >
                    <Link to="#">
                      {/* First Day */}6 February  2023
                      <span>First Day </span>
                    </Link>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, "tab2")}>
                    <Link to="#">
                      {/* Second Day */}7 February  2023
                      <span>Second Day</span>
                    </Link>
                  </li>

                 
                </ul>

                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    <ul className="accordion">
                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          

                          <div className="schedule-info">
                            <h3>
                              Session 1 : Metaverse and IP, NFTs, Crypto and the
                              Blockchain technology and its relation with IP
                            </h3>

                            
                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                         
                          <div className="schedule-info">
                            <h3>
                              Session 2 : International IP Litigation
                              Strategies: Best Practice, Challenges & Solutions
                            </h3>

                           
                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          

                          <div className="schedule-info">
                            <h3>
                              Session 3 : IP Enforcement and IP Infringement or
                              IP Transaction & Monetization
                            </h3>

                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                         

                          <div className="schedule-info">
                            <h3>
                              Session 4 : Enforcement Issues that arise in
                              Commercial Litigation and Arbitration
                            </h3>

                           
                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                        

                          <div className="schedule-info">
                            <h3>
                              Session 5 : Alternate Dispute resolution options-
                              What else can we do?
                            </h3>

                           
                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div id="tab2" className="tabs_item">
                    <ul className="accordion">
                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                         

                          <div className="schedule-info">
                            <h3>
                              Session 6 : Corporate- In or Out? Issues related
                              to outsourcing Legal services
                            </h3>

                          
                          </div>
                        </Link>
                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                           

                          <div className="schedule-info">
                            <h3>
                              Session 7 :  Litigation Finance on the Rise: Demystifying Trends, Opportunities, and Best Practices.
                            </h3>

                            
                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          
                          <div className="schedule-info">
                            <h3>
                              Session 8 : Successful Arbitration Policies & Strategies Pertaining Shareholders Disputes.
                            </h3>

                           
                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          

                          <div className="schedule-info">
                            <h3>
                              Session 9 : Compliance & Risk in the digital Age:
                              Cyber security, Privacy & data protection
                            </h3>

                           
                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          

                          <div className="schedule-info">
                            <h3>
                              Session 10 : The link between Contracts and
                              Litigation
                            </h3>

                          </div>
                        </Link>

                        <div className="accordion-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and
                            scrambled it to make Link type specimen book.
                          </p>

                          <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-7">
                              <div className="location">
                                <b>Location:</b> Hall 1, Building C , King
                                Street , <span>USA</span>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-5 text-right">
                              <Link to="#" className="btn btn-primary">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="btn-box">
               
                <Link to="/contact" className="btn btn-secondary">
                  Connect with us  
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shape1">
          <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
        </div>
        <div className="shape2 rotateme">
          <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
        </div>
        <div className="shape3 rotateme">
          <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
        </div>
        <div className="shape4">
          <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
        </div>
        <ControlledAccordions/>
      </section>
    );
  }
}

export default EventSchedulesOne;
