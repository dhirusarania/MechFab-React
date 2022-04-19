import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../src/components/headers/About";
import Footer from "../src/components/Footer";

export default props => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-155864968-1");
  });

  return (
    <div className="page">
      <Head>
        <title>
          Pre Engineered Buildings in India | Steel Building Manufacturer
        </title>
        <meta
          name="description"
          content="Pre Engineered Buildings India, Pre Engineered building Manufacturers, PEB  manufacturers, PEB  companies in India, PEB  structure manufacturer, Pre Engineered   buildings manufacturers in India, Steel structures in India, top PEB  companies in India"
        />
        <meta
          name="keywords"
          content="Pre Engineered  buildings India, Pre Engineered  building manufacturers, PEB manufacturers, PEB companies in India, PEB structure manufacturer, PEB companies, Pre Engineered  buildings manufacturers in India, steel structures in India, top PEB companies in India, steel buildings in India, list of PEB companies in India, steel frame house cost in India, best PEB company in India, pre engineering building company, Steel Structure, Pre-Engineered Building, Tubular Structure, Steel Bridge, Pressed Steel Water Tank, MS Staging, OIL Storage Tank, Tower, Chimney, Shuttering Plates, Scaffolding, Tubular Pole, Sluice Gate, Agricultural Implements, Steel Door, Steel Windows, Trailer, Bunk House, Fencing material, Industrial Floor Gratings, Foot Bridge, Highway Guards"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-155864968-1"
        ></script>
      </Head>
      <Header heading="VALUED CUSTOMERS" />
      <div style={{ marginTop: "20rem" }} className="container mb-5">
        <h2 className="page__heading">VALUED CUSTOMERS</h2>
        <div className="page__line" />
        <ul className="page__list">
          <li>
            Border Road Organization (Project Udayak, Project Pushpak, Project
            Chetak, and Project Arunank)
          </li>
          <li>CPWD</li>
          <li>PWD (Assam)</li>
          <li>PWD (Nagaland)</li>
          <li>PWD (Mizoram)</li>
          <li>PHE</li>
          <li>N.F Railway</li>
          <li>BRPL</li>
          <li>NBCC Ltd</li>
          <li>Oil India Ltd.</li>
          <li>Brahmaputra Board</li>
          <li>Airport Authority of India</li>
          <li>Assam Rifles</li>
          <li>Power & Electricity department (Aizawl)</li>
          <li>Engineers Regiment</li>
          <li>Indian Oil Corporation Ltd.</li>
          <li>Irrigation Department and Water Resource Department</li>
          <li>M/s Emami Ltd.</li>
          <li>M/s Patel KNR(JV)</li>
          <li>M/s Buildrite Construction</li>
          <li>M/s CG Foods Ltd.</li>
          <li>M/s BCP Ltd.</li>
          <li>Amalgamated Plantations Pvt.Ltd</li>
          <li>And Private Organizations etc.</li>
        </ul>
        <div className="page__line" />
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <div className="page__customers">
              <img
                className=""
                src="/static/f22c7d1c-9182-43d9-bfaf-9bd7cd17ea84.png"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="page__customers">
              <img
                className=""
                src="/static/a6a04acf-9cf9-4565-8b65-2eb2a3dfcf92.png"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="page__customers">
              <img
                className=""
                src="/static/9ddd72f6-8739-4ccf-8fbf-87ba161d492f.png"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="page__customers">
              <img
                className=""
                src="/static/dd32f821-1f2e-43b9-b609-87ebdd80c6ad.png"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="page__customers">
              <img
                className=""
                src="/static/37095891-1f6c-4994-a5ff-56dbc8ae0602.png"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="page__customers">
              <img
                className=""
                src="/static/a1c31349-9f2a-4a93-9bec-1af961cc4c7d.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
