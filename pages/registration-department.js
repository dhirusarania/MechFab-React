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
          Steel Doors and Steel Windows manufacturers in India | MechFab Steel
          Structures in India
        </title>
        <meta
          name="description"
          content="MechFab is a best Steel Doors and Steel manufacturers in India. Pre Engineered Building, Steel and Tubular Structure, Steel Bridge, Pressed Steel Water Tank"
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
      <Header heading="REGISTRATION DEPARTMENT" />
      <div style={{ marginTop: "20rem" }} className="container mb-5">
        <h2 className="page__heading">REGISTRATION DEPARTMENT</h2>
        <div className="page__line" />
        <ul className="page__list">
          <li>
            Registered with DGBR Delhi having Index No. S 42 for PMT Bridges as
            a Class ‘S’ Contractor
          </li>
          <li>
            Registered with PWD Assam as a Class-1’A’ Contractor (Roads &
            Building)
          </li>
          <li>Registered with Chief Engineer CPWD</li>
          <li>Registered as SSI Unit under Director of Industries, Assam</li>
          <li>Registered with NSIC having unlimited monetary limited.</li>
          <li>Registered with NBCC LTD Group (I) Contractor</li>
          <li>Registered with 17 CROPS (I) Contractor.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
