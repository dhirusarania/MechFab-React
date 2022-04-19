import { useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import {
  nextCarouselItem,
  previousCarouselItem,
  stopNextAnimation,
  stopPreviousAnimation,
  resetNextItem,
  toggleModel,
  resetPreviousItem
} from "../src/store/actions";
import Model from "../src/components/Model";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
// import img1 from "../static/bg-1.jpg";
const img1 = "";

const home = props => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-155864968-1");

    $("#open-model").click(() => {
      $(".homepage__model").addClass("homepage__model--active");
    });

    $(".homepage__model-close").click(() => {
      $(".homepage__model").removeClass("homepage__model--active");
    });

    $(".owl-carousel").owlCarousel({
      nav: false,
      loop: true,
      autoWidth: true,
      autoplay: true,
      autoplayTimeout: 2500
    });

    var el = document.createElement("script");
    el.type = "application/ld+json";

    el.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "MechFab",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Industrial Area, Bamunimaidan, -",
        addressLocality: "Guwahati",
        addressRegion: "ASSAM",
        postalCode: "781021"
      },
      image: "http://mechfab.org/static/logo.png",
      email: " info@mechfab.org",
      telePhone: "+919706099975",
      url: "http://mechfab.org/",
      paymentAccepted: ["cash", "check", "credit card"],
      openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "09:00",
          closes: "18:00"
        }
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.161299",
        longitude: "91.773828"
      },
      priceRange: "$"
    });

    document.querySelector("body").appendChild(el);
  }, []);

  const testimonialsContent = [
    {
      content:
        "I am extremely satisfied with the work MECHFAB has delivered. It's one of the best construction companies in India. They have an energetic and professional team who took care of every detail and made sure our requirements were met on time.",
      user: "Rakesh Agarwal",
      img: img1
    },
    {
      content:
        "Mechfab has been immensely helpful in working out a custom strategy for the construction of our PEB Building. Great innovation and the products were uncompromised in quality. Happy with the extraordinary service which was beyond expectations. I wish them many more years of success and progress.",
      user: "Vishal Paul",
      img: img1
    }
  ];

  const Button = props => {
    return (
      <button className="d-block mx-auto homepage__btn bg-dark text-light">
        <Link href={`/${props.path}`}>
          <a>Read More</a>
        </Link>
      </button>
    );
  };

  const CoreValue = props => {
    return (
      <div className="homepage__core-value d-flex justify-content-center align-items-center">
        <div className="homepage__core-value-img-container mr-4 center">
          <img src="/static/f7a2ac40-9c2c-4efa-a87b-b65aa140e2ca.svg" />
        </div>
        <div className="homepage__core-value-container">
          <h5 className="homepage__core-value-heading mb-3">{props.heading}</h5>
          <p className="homepage__core-value-content">{props.content}</p>
        </div>
      </div>
    );
  };

  const Testimonial = props => {
    return (
      <div className="homepage__testimonials d-flex">
        <div className="homepage__testimonials-img-container mr-4">
          <div className="homepage__testimonials-img"></div>
        </div>
        <div className="homepage__testimonials-content">
          <p className="clamp3">{props.content}</p>
          <span>- {props.user}</span>
        </div>
      </div>
    );
  };

  const testimonials = items => {
    return items.map((item, i) => {
      return <Testimonial key={i} content={item.content} user={item.user} />;
    });
  };

  const ProjectCard = props => {
    return (
      <div className="homepage__project-card">
        <img src={props.img} className="card-img center-img" />
        <h3 className="card__projects__heading">Project Name: {props.name}</h3>
        <h3 className="card__projects__heading">Address: {props.address}</h3>
      </div>
    );
  };

  const allProjectCards = props.projects.map((project, i) => {
    return (
      <ProjectCard
        name={project.header}
        address={project.info}
        img={project.img}
        key={i}
      />
    );
  });

  return (
    <div className="homepage">
      <Head>
        <title>
          Steel Building Manufacturers in India | Pre Engineered building
          manufacturers
        </title>
        <meta
          name="description"
          content="Mechfab manufactures World class Steel Structure Buildings, steel buildings in India, Steel Frame Homes, Pre Engineered building manufacturers in India. Call +919706099975 for Pre Engineered buildings and steel building prices."
        />
        <meta
          name="keywords"
          content="Pre Engineered  buildings India, Pre Engineered  building manufacturers, PEB manufacturers, PEB companies in India, PEB structure manufacturer, PEB companies, Pre Engineered  buildings manufacturers in India, steel structures in India, top PEB companies in India, steel buildings in India, list of PEB companies in India, steel frame house cost in India, best PEB company in India, pre engineering building company, Steel Structure, Pre-Engineered Building, Tubular Structure, Steel Bridge, Pressed Steel Water Tank, MS Staging, OIL Storage Tank, Tower, Chimney, Shuttering Plates, Scaffolding, Tubular Pole, Sluice Gate, Agricultural Implements, Steel Door, Steel Windows, Trailer, Bunk House, Fencing material, Industrial Floor Gratings, Foot Bridge, Highway Guards"
        />
        <link rel="canonical" href="http://www.mechfab.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mech_fab" />
        <meta
          name="twitter:title"
          content="Steel Building Manufacturers & Pre Engineered building manufacturers"
        />
        <meta
          name="twitter:description"
          content="Mechfab manufactures World-class Steel Structure Buildings, Steel buildings in India, Steel Frame Homes, Pre Engineered building manufacturers in India. Call +919706099975 for Pre Engineered buildings"
        />
        <meta
          name="twitter:image"
          content="http://mechfab.org/static/logo.png"
        />
        <meta
          property="og:title"
          content="Steel Building Manufacturers in India | Pre Engineered building manufacturers"
        />
        <meta property="og:site_name" content="MechFab" />
        <meta property="og:url" content="http://mechfab.org" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:image"
          content="http://mechfab.org/static/logo.png"
        />
        <meta
          name="google-site-verification"
          content="gLdyKluB9YpIL0XEnbQpZv9TWu3SCrz6G_2G2dJ96DQ"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-155864968-1"
        ></script>
      </Head>
      <Header />
      <Model active={props.modelVisible} close={props.toggleModel} />
      <div className="homepage__container">
        <div className="row">
          <div className="homepage__about p-5 pl-0 col">
            <h2 className="homepage__headings">About Us</h2>
            <span
              style={{ width: "15rem" }}
              className="homepage__divider bg-dark d-block mb-5"
            ></span>
            <p className="">
              Founded on 28th of June 1996 under the directorship of Mr.
              Bhanwarlal Agarwal, MECHFAB is one of the renowned PEB
              manufacturers in India. It has been manufacturing and supplying
              the best steel fabricating works. MECHFAB offers custom and unique
              designs, which are modern, solid, productive and aesthetically
              appealing.
            </p>
            <p className="">
              MECHFAB’s creative methodology, commitment, and quality are what
              makes them the customer’s first priority. With highly committed
              and creative individuals in the group, the structures are
              actualized in Pre-Engineered Buildings and other steel fabrication
              work.
            </p>
            <button className="homepage__btn bg-dark text-light mt-4">
              <Link href="/about-us">
                <a>Read More</a>
              </Link>
            </button>
          </div>
          <div className="homepage__projects d-md-block d-none p-5 pl-0 col-8">
            <h2 className="homepage__headings">Current Projects</h2>
            <span
              style={{ width: "15rem" }}
              className="homepage__divider bg-dark d-block mb-5"
            ></span>
            <div className="owl-carousel owl-theme">{allProjectCards}</div>
          </div>
        </div>
        <div className="homepage__quote">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>GET A QUOTE</h3>
                <p className="m-0">
                  What does inovation mean to you? Click here to see what it
                  means to us
                </p>
              </div>
              <div className="col text-center">
                <button
                  id="open-model"
                  className="homepage__btn bg-dark text-light mt-4"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <h2 className="homepage__headings">Testimonials</h2>
            <span
              style={{ width: "15rem" }}
              className="homepage__divider bg-dark d-block mb-5"
            ></span>
            {testimonials(testimonialsContent)}
          </div>
          <div className="col">
            <h2 className="homepage__headings">Our Clients</h2>
            <span
              style={{ width: "15rem" }}
              className="homepage__divider bg-dark d-block mb-5"
            ></span>
            <div className="d-flex">
              <div className="homepage__clients-img center">
                <img
                  className="center-img w-100"
                  src="/static/f22c7d1c-9182-43d9-bfaf-9bd7cd17ea84.png"
                />
              </div>
              <div className="homepage__clients-img center">
                <img
                  className="center-img w-100"
                  src="/static/a6a04acf-9cf9-4565-8b65-2eb2a3dfcf92.png"
                />
              </div>
              <div className="homepage__clients-img center">
                <img
                  className="center-img w-100"
                  src="/static/9ddd72f6-8739-4ccf-8fbf-87ba161d492f.png"
                />
              </div>
            </div>
            <div className="d-flex mt-5">
              <div className="homepage__clients-img center">
                <img
                  className="center-img w-100"
                  src="/static/dd32f821-1f2e-43b9-b609-87ebdd80c6ad.png"
                />
              </div>
              <div className="homepage__clients-img center">
                <img
                  className="center-img w-100"
                  src="/static/37095891-1f6c-4994-a5ff-56dbc8ae0602.png"
                />
              </div>
              <div className="homepage__clients-img center">
                <img
                  className="center-img w-100"
                  src="/static/a1c31349-9f2a-4a93-9bec-1af961cc4c7d.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="homepage__headings">our core value system</h2>
          <span
            style={{ width: "15rem" }}
            className="homepage__divider bg-dark d-block mb-5"
          ></span>
          <div className="container">
            <div className="row mb-5">
              <div className="col">
                <CoreValue
                  content="MECHFAB employees word is their bond. They do what they say, and live up to the highest standards of fairness and ethical behavior."
                  heading="INTEGRITY"
                />
              </div>
              <div className="col">
                <CoreValue
                  content="MECHFAB aspires to be the most respected builder, renowned for: EXCELLENCE, LEADERSHIP, UNSURPASSED VALUE."
                  heading="VISION"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <CoreValue
                  content="MECHFAB employees love what they do, taking the lead, and leading by example."
                  heading="STAFF"
                />
              </div>
              <div className="col">
                <CoreValue
                  content="MECHFAB will not compromise the health and safety of its people."
                  heading="SAFETY"
                />
              </div>
            </div>
            <Button path="our-core-value-system" />
          </div>
        </div>
      </div>
      <div className="homepage__app-download">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-sm d-flex justify-content-center">
              <h2 className="d-inline-block mb-sm-0 mb-4 homepage__app-download-heading">
                DOWNLOAD OUR APP
              </h2>
            </div>
            <div className="col-sm d-flex justify-content-center">
              <a
                target="_blank"
                className="d-flex align-items-center"
                href="https://play.google.com/store/apps/details?id=com.tm.mechfabclient"
              >
                <img
                  className="homepage__app-download-img mr-4"
                  src="/static/76ee8547-5d37-4e7c-9728-76a9ed000007.svg"
                />
              </a>
              <img
                style={{ height: "10rem" }}
                className="homepage__app-download-img mr-4"
                src="/static/frame.png"
              />
              {/* <img
                className="homepage__app-download-img"
                src="/static/18b10d92-90b2-44e6-971a-854dcfc20aaa.svg"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

home.getInitialProps = async () => {
  const res = await fetch("http://13.232.172.236/api/home");
  const data = await res.json();

  const projects = [];
  for (let i = 0; i < data.body.workdone.length; i++) {
    if (data.body.workdone[i].info) {
      const main = { ...data.body.workdone[i] };
      main.img = "http://13.232.172.236/api/" + data.body.workdone[i].img;
      projects.push(main);
    }
  }

  return { projects };
};

const mapStateToProps = state => ({
  projectCards: state.projectCards
    ? state.projectCards
    : { activeItem: 0, next: false, previous: false },
  header: state.header ? state.header : { activeItem: 0, animated: false },
  modelActive: state.modelVisible
});

const mapDispatchToProps = dispatch => ({
  toggleModel: () => dispatch(toggleModel),
  nextCarouselItem: itemName => dispatch(nextCarouselItem(itemName)),
  previousCarouselItem: (itemName, length) =>
    dispatch(previousCarouselItem(itemName, length)),
  stopNextAnimation: itemName => dispatch(stopNextAnimation(itemName)),
  stopPreviousAnimation: itemName => dispatch(stopPreviousAnimation(itemName)),
  resetNextItem: (itemName, index) => dispatch(resetNextItem(itemName, index)),
  resetPreviousItem: (itemName, index) =>
    dispatch(resetPreviousItem(itemName, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(home);
