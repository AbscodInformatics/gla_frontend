import React from "react";

const PlatinumSpon = ({ attending }) => {
  return (
    <div style={{ padding: "4% 0px" }}>
      <div className="container">
        <div className="section-title">
          <h2> Sponsors And Exhibitors</h2>
          <div className="bar"></div>
        </div>
      </div>
      <div class="dark:bg-white">
        <section class="py-14 px-6 lg:px-0 bg-gray-100 dark:bg-white">
          <div class="mx-auto container flex justify-start xl:items-start items-center flex-col">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10%",
                marginTop: "3%",
                width: "100%",
                padding: "10px",
                justifyContent: "center",
              }}
            >
              {attending.map((item, key) => {
                return (
                  <div
                    style={{
                      flexBasis: "15%",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      borderRadius: "20px",
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt="attendees"
                      style={{
                        borderRadius:
                          item.image.includes("attendees14.") ||
                          item.image.includes("attendees1.")
                            ? "0px"
                            : "20px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => window.open(item.link)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlatinumSpon;
