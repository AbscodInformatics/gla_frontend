import React from "react";

const Award = () => {
  return (
    <div className="mx-[5%] my-[5%]" style={{ margin: "5%", marginTop: "10%" }}>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "#d9d9d9",
          marginTop: "1.25rem",
          marginBottom: "1.25rem",
          borderRadius: "9999px",
          color: "#0d1028",
        }}
        className="text-4xl font-bold text-center py-4 bg-[#d9d9d9] my-5 rounded-full text-[#0d1028]"
      >
        {" "}
        Types Of Awards
      </div>
      <div
        className="grid grid-cols-2 gap-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "5px",
        }}
      >
        <div>
          <h1 className="">Awards in Europe</h1>
          <ul className="list-disc">
            <li className="text-lg  font-medium">
              Diversity & Inclusion: Outstanding Firm in Europe
            </li>
            <li className="text-lg  font-medium">
              Europe-wide Firm of the Year with international presence
            </li>
            <li className="text-lg  font-medium">
              Pro Bono: Outstanding Firm in Europe
            </li>

            <li className="text-lg  font-medium">
              Best Advisory Firm of the Year in Europe
            </li>
            <li className="text-lg  font-medium">
              Boutique Law Firm of the Year in Europe
            </li>
            <li className="text-lg  font-medium">
              Netherland Firm of the Year in Europe
            </li>
            <li className="text-lg  font-medium">
              Best Legal Place to work of the Year in Europe
            </li>
            <li className="text-lg  font-medium">
              International Law Firm of the Year in Europe
            </li>
          </ul>
        </div>
        <div>
          <h1 className="">Law Firm Awards</h1>
          <ul className="list-disc">
            <li className="text-lg  font-medium">
              The ADR Law Firm of the Year{" "}
            </li>
            <li className="text-lg  font-medium">
              The Banking and Financial Services Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              Emerging Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              The Environment Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              {" "}
              Litigation Law Firm of the Year
            </li>

            <li className="text-lg  font-medium">
              Mergers and Acquisition Law Firm of the Year
            </li>

            <li className="text-lg  font-medium">
              Real Estate Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              Restructuring and Insolvency Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              Start-up and Investment Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              Technology, Media, and Telecommunications Law Firm of the Year
            </li>
          </ul>
        </div>
        <div>
          <h1 className="">In-House & Individual Awards</h1>
          <ul className="list-disc">
            <li className="text-lg  font-medium">
              Legal Department Of the Year -Large Team
            </li>
            <li className="text-lg  font-medium">
              Legal Department Of the Year -Small Team
            </li>
            <li className="text-lg  font-medium">
              General Counsel of the Year -Large Team
            </li>
            <li className="text-lg  font-medium">
              General Counsel of the Year -Small Team
            </li>
            <li className="text-lg  font-medium">Rising Star Award</li>
            <li className="text-lg  font-medium">
              Best Use of Technology by an In-House Team
            </li>
            <li className="text-lg  font-medium">
              {" "}
              Diversity Initiative of the Year
            </li>
            <li className="text-lg  font-medium">
              Counsel of the Year – Independent Practice (above 50)
            </li>
            <li className="text-lg  font-medium">
              Managing Partner of the Year
            </li>
            <li className="text-lg  font-medium">Woman Lawyer of the Year</li>
            <li className="text-lg  font-medium">
              Pro-bono Lawyer of the Year
            </li>
            <li className="text-lg  font-medium">
              Most Innovative Lawyer of the Year
            </li>
            <li className="text-lg  font-medium">Employment Law Award</li>
            <li className="text-lg  font-medium">
              Intellectual Property Award
            </li>
          </ul>
        </div>
        <div>
          <h1 className="">Legal Startups and Service Providers Awards</h1>
          <ul className="list-disc">
            <li className="text-lg  font-medium">
              Legal-Tech Startup of the Year
            </li>
            <li className="text-lg  font-medium">
              Best Legal Entrepreneur of the Year
            </li>
            <li className="text-lg  font-medium">
              Best Service Provider to the Legal Sector of the Year
            </li>
            <li className="text-lg  font-medium">
              Policy Think-tank of the Year
            </li>
          </ul>
        </div>
        <div>
          <h1 className="">Intellectual Property (IP) Awards</h1>
          <ul className="list-disc">
            <li className="text-lg  font-medium">
              Trademark Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              Patent Law Firm of the Year
            </li>
            <li className="text-lg  font-medium">
              Patent Attorney of the Year
            </li>

            <li className="text-lg  font-medium">
              Best Firm in Patent Prosecution & Litigation
            </li>
            <li className="text-lg  font-medium">
              Trademark Attorney of the Year
            </li>
            <li className="text-lg  font-medium">Women in IP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Award;
