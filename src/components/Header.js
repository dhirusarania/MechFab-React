import React from "react";
import { connect } from "react-redux";
import {
  nextCarouselItem,
  previousCarouselItem,
  stopNextAnimation,
  stopPreviousAnimation,
  resetNextItem,
  resetPreviousItem
} from "../store/actions";
import CarouselComponent from "../components/carousel/Carousel";
import CarouselBackgrounds from "../components/carousel/carouselBackgrounds";
import img1 from "../../static/header/1.jpg";
import img2 from "../../static/header/2.jpg";
import img3 from "../../static/header/3.jpg";
import img4 from "../../static/header/4.jpg";
import img5 from "../../static/header/5.jpg";
import img6 from "../../static/header/6.jpg";
import img7 from "../../static/header/7.jpg";
import img8 from "../../static/header/8.jpg";

const Header = props => {
  const carouselBackgroundImages1 = [img1, img2, img3, img7, img5, img6, img4, img8];
  const carouselBackgroundImages2 = [img6, img5, img2, img8, img4, img3, img7, img1];
  const carouselBackgroundImages3 = [img8, img1, img4, img3, img7, img6, img5, img2];
  const carouselBackgrounds = images => {
    return images.map((img, i) => {
      return <CarouselBackgrounds key={i} img={img} />;
    });
  };
  const carouselBackgrounds1 = carouselBackgrounds(carouselBackgroundImages1);
  const carouselBackgrounds2 = carouselBackgrounds(carouselBackgroundImages2);
  const carouselBackgrounds3 = carouselBackgrounds(carouselBackgroundImages3);

  const previousSlide = (length, itemName) => {
    if (!props[itemName].previous) {
      if (props[itemName].activeItem === 0) {
        props.resetPreviousItem(itemName, length);
      } else {
        props.previousCarouselItem(itemName, length);
      }
      setTimeout(() => {
        props.stopPreviousAnimation(itemName);
      }, 3000);
    }
  };

  // setTimeout(() => {
  //   nextSlide(carouselBackgrounds1.length - 1, "header");
  // }, 4000);

  const nextSlide = (length, itemName) => {
    if (!props[itemName].next) {
      if (props[itemName].activeItem === length) {
        props.resetNextItem(itemName, 0);
      } else {
        props.nextCarouselItem(itemName);
      }
      setTimeout(() => {
        props.stopNextAnimation(itemName);
      }, 3000);
    }
  };

  return (
    <div className="homepage__header">
      <div className="w-100 h-100 position-absolute">
        <CarouselComponent
          effect
          duration={1.5}
          delay={5}
          width="100%"
          height="100%"
        >
          {carouselBackgrounds1}
        </CarouselComponent>
      </div>
      <div className="homepage__header-overlay--light position-absolute" />
      <div className="homepage__header-content h-100 w-100 position-absolute row m-0">
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            color: "#4b575c"
          }}
          className="position-relative p-0 col h-100 w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="homepage__heading text-center">
            <img
              className="mb-5 homepage__header-logo"
              src="/static/logo.png"
            />
            <span className="d-block homepage__heading--main">
              we are more than builders
            </span>
            <span className="d-block homepage__heading--sub">
              we are construction partners
            </span>
          </h1>
          <span style={{ width: "6rem" }} className="homepage__divider"></span>
          <div className="homepage__contact d-flex flex-column justify-content-center align-items-center">
            <span>info@mechfab.org</span>
            <span className="homepage__divider"></span>
            <span>+91-97060-99974, +91-97060-99975</span>
            <span>0361-2465511</span>
          </div>
          <div className="homepage__address d-flex justify-content-around align-items-center">
            <h3 className="d-inline-block">Industrial Area, Bamunimaidan</h3>
            <h3 className="d-inline-block">Guwahati-781021</h3>
          </div>
        </div>
        <div className="col d-none d-lg-block p-0">
          <div className="homepage__content">
            <div className="homepage__project-info w-100 p-3 center">
              <CarouselComponent
                effect
                duration={1.5}
                delay={5}
                width="100%"
                height="100%"
              >
                {carouselBackgrounds3}
              </CarouselComponent>
              {/* <span className="homepage__project mb-4 d-block text-light">
                project:
              </span>
              <h3 className="homepage__project-name">
                sluice gate (irrigation dept.)
              </h3>
              <span
                style={{ width: "7rem" }}
                className="homepage__divider bg-light d-block"
              ></span>
              <span className="d-block">CLIENT:</span>
              <span className="d-block">IRRIGATION DEPARTMENT</span>
              <span className="d-block mt-4">CATEGORY:</span>
              <span className="d-block mb-4">SLUICE GATE</span>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                quis, accusamus nostrum alias! Placeat accusantium ad laudantium
                ipsa reiciendis officiis doloribus magnam laborum, beatae,
                recusandae, odit perferendis consectetur minus neque.
              </p>
              <div></div> */}
            </div>
          </div>
          <div className="homepage__carousel p-4">
            <CarouselComponent
              effect
              duration={1.5}
              delay={5}
              width="100%"
              height="100%"
            >
              {carouselBackgrounds2}
            </CarouselComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  projectCards: state.projectCards
    ? state.projectCards
    : { activeItem: 0, next: false, previous: false },
  header: state.header ? state.header : { activeItem: 0, animated: false }
});

const mapDispatchToProps = dispatch => ({
  nextCarouselItem: itemName => dispatch(nextCarouselItem(itemName)),
  previousCarouselItem: (itemName, length) =>
    dispatch(previousCarouselItem(itemName, length)),
  stopNextAnimation: itemName => dispatch(stopNextAnimation(itemName)),
  stopPreviousAnimation: itemName => dispatch(stopPreviousAnimation(itemName)),
  resetNextItem: (itemName, index) => dispatch(resetNextItem(itemName, index)),
  resetPreviousItem: (itemName, index) =>
    dispatch(resetPreviousItem(itemName, index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
