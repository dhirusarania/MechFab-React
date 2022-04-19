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
          {" "}
          Pre Engineered Buildings in India | Steel Building Manufacturer
        </title>
        <meta
          name="description"
          content="Pre Engineered buildings India, Pre Engineered building manufacturers, PEB manufacturers, PEB companies in India, PEB structure manufacturer, PEB companies, Pre Engineered buildings manufacturers in India"
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
      <Header heading="ABOUT US" />
      <div style={{ marginTop: "20rem" }} className="container mb-5">
        <h2 className="page__heading">ABOUT US</h2>
        <div className="page__line" />
        <p>
          Founded on 28th of June 1996 under the directorship of Mr. Bhanwarlal
          Agarwal, MECHFAB is one of the renowned PEB manufacturers in India. It
          has been manufacturing and supplying the best steel fabricating works.
          MECHFAB offers custom and unique designs, which are modern, solid,
          productive and aesthetically appealing. MECHFAB’s creative
          methodology, commitment, and quality are what makes them the
          customer’s first priority. With highly committed and creative
          individuals in the group, the Pre-Engineered Buildings and other steel
          fabrication works are maximized in performance and appearance. Time
          being the most significant factor in the construction industry,
          MECHFAB, has a record of putting up solutions that are time efficient,
          brisk, easy and compatible with their clients’ requirement. MECHFAB’s
          fabrication works are always the latest and reliable, the steels are
          manufactured from the best quality steel for construction in India
          after a stringent quality check. As the leading manufacturer and
          supplier of Steel for all kinds of steel fabrication works, MECHFAB
          has been providing their clients with a generous number of inventory
          requirements.
        </p>
        <div className="page__line" />
        <h3>OUR CORE VALUES</h3>
        <p>
          MECHFAB’s core values help in improving the interior culture, the
          relationship with its clients and enhance productivity. We admire
          innovation, dedication, honesty, quality which energizes a positive
          delivery of excellent service. We also ensure that our work
          complements our core values and are in compliance with the best steel
          companies in India.
        </p>
        <div className="page__line" />
        <h3>SAFETY</h3>
        <p>
          We prioritize safety because a workplace hazard-free environment is
          what we strive to give to our team.
        </p>
        <div className="page__line" />
        <h3>TEAM MANAGEMENT</h3>
        <p>
          Keeping pride in our team, we work together to foster a complementary
          strength to keep polishing our skills and boost productivity.
        </p>
        <div className="page__line" />
        <h3>ATTITUDE</h3>
        <p>
          We wear a positive attitude and accept challenges with a smile to
          bring up the best results.
        </p>
        <div className="page__line" />
        <h3>ECO FRIENDLY DESIGNS</h3>
        <p>
          Our Designs are always Environment-Friendly and designed to sustain in
          normal and extreme natural conditions which makes them the most
          durable amongst other steel structure buildings in India.
        </p>
        <div className="page__line" />
        <h3>INTEGRITY</h3>
        <p>
          We maintain open communication, practice work transparency and deliver
          highest standards of fairness and ethical behavior.{" "}
        </p>
        <div className="page__line" />
        <h3>THE MECHFAB FAMILY</h3>
        <p>
          The MECHFAB family comprises of dedicated, passionate, honest,
          creative and experienced members. They are the representatives as well
          as the mainstays of the organization's establishment. Each and every
          one from the team put their dedication in their areas of expertise
          which results in brilliant outcomes.
        </p>
      </div>
      <Footer />
    </div>
  );
};
