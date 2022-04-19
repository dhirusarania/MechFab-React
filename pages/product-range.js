import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../src/components/headers/About";
import Footer from "../src/components/Footer";

export default () => {
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
      <Header heading="PRODUCT RANGE" />
      <div style={{ marginTop: "20rem" }} className="container mb-5">
        <h2 className="page__heading">PRODUCT RANGE</h2>
        <div className="page__line" />
        <h3>Range of Quality Solutions:</h3>
        <ul className="page__list">
          <li>Steel Structure</li>
          <li>Pre-Engineered Building</li>
          <li>Tubular Structure</li>
          <li>Steel Bridge</li>
          <li>Pressed Steel Water Tank</li>
          <li>MS Staging</li>
          <li>OIL Storage Tank</li>
          <li>Tower</li>
          <li>Chimney</li>
          <li>Shuttering Plates </li>
          <li>Scaffolding</li>
          <li>Tubular Pole</li>
          <li>Sluice Gate</li>
          <li>Agricultural Implements</li>
          <li>Steel Door / Windows </li>
          <li>Trailer</li>
          <li>Bunk House</li>
          <li>Fencing material</li>
          <li>Industrial Floor Gratings</li>
          <li>Foot Bridge</li>
          <li>Highway Guards – Rails etc.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
