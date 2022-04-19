import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../src/components/headers/About";
import Footer from "../src/components/Footer";

const Info = props => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-155864968-1");
  });

  return (
    <div className="row mb-5">
      <div className="col-md-1">
        <div className="page__core-values-ico-container d-flex justify-content-center align-items-center">
          <img
            className="page__core-values-ico"
            src="/static/f7a2ac40-9c2c-4efa-a87b-b65aa140e2ca.svg"
          />
        </div>
      </div>
      <div className="col p-0">
        <h3 className="page__core-values-heading">{props.heading}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className="page">
      <Head>
        <title>
          Steel Structure Manufacturer in Assam | PEB Manufacturers in Assam
        </title>
        <meta
          name="description"
          content="Steel Structure Manufacturer in Assam, PEB Manufacturers in Assam, steel frame house cost in Assam, Tubular Structure, Steel Bridge, PEB companies in India, Pre Engineered buildings in India"
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
      <Header heading="OUR CORE VALUE SYSTEM" />
      <div style={{ marginTop: "20rem" }} className="container mb-5">
        <h2 className="page__heading">OUR CORE VALUE SYSTEM</h2>
        <div className="page__line" />
        <div className="d-flex justify-content-center">
          <img
            className="page__core-values-img"
            src="/static/kisspng-value-brand-accountability-learning-by-doing-5ad8269fb05a27.8331920915241151037224.png"
          />
        </div>
        <div className="page__line" />
        <h3>Quality Assurance</h3>
        <p>
          In MECHFAB, we never compromise when it comes to quality assurance and
          safety. Construction requires a strong focus on operational
          discipline; technical expertise, commercial outcomes, and risk
          mitigation. And we have a track of excellence in ensuring that we
          deliver the best services to our clients. Our reputation for high
          quality products and our focus on end user satisfaction means we are
          regularly sought after by tenants for integrated works. The focus of
          our team lies on smart turnkey solutions, pioneering techniques and
          innovation. For us it’s never about just getting the job done, it’s
          always about getting the best job done safely
        </p>
        <div
          className="my-5"
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
        />
        <div className="container">
          <Info
            heading="INTEGRITY"
            p="MECHFAB employees word is their bond. They do what they say, and live
          up to the highest standards of fairness and ethical behavior."
          />
          <Info
            heading="STAFF"
            p="MECHFAB employees love what they do, taking the lead, and leading by example."
          />
          <Info
            heading="QUALITY"
            p="MECHFAB employees constantly seek new opportunities to learn, to improve, to teach, and to add value"
          />
          <Info
            heading="CONTINUOUS IMPROVEMENT"
            p="Every employee and business partner has something to contribute to MECHFAB's construction teams. This belief is the key to continuous Improvement."
          />
          <Info
            heading="VISION"
            p="MECHFAB aspires to be the most respected builder, renowned for: EXCELLENCE, LEADERSHIP, UNSURPASSED VALUE."
          />
          <Info
            heading="SAFETY"
            p="MECHFAB will not compromise the health and safety of its people."
          />
          <Info
            heading="INNOVATION"
            p="MECHFAB employees constantly seek new innovation to better, cost effective constructions and to add value."
          />
          <Info
            heading="OPERATIONAL EXCELLENCE"
            p="MECHFAB provides accurate and timely information required to support good decision-making and best in class operational excellence."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
