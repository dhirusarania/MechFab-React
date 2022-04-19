import React, { useRef, useState, useEffect } from "react";
import { TweenLite } from "gsap";

const Carousel = props => {
  // refs
  const carouselRef = useRef();
  const slidesRefs = [];

  let gotoPrevSlide, gotoNextSlide;

  useEffect(() => {
    const slider = carouselRef.current;
    const currentSlidesRefs = slidesRefs.map(ref => {
      return ref.current;
    });
    const slidesNum = currentSlidesRefs.length;
    let prevSlideID = null;
    let currentSlideID = 0;
    let isAnimating = false;
    let isAutoPlay = false;
    let first = true;

    const gotoSlide = (slideID, _time, _direction) => {
      if (!isAnimating) {
        isAnimating = true;
        prevSlideID = currentSlideID;
        currentSlideID = slideID;
        const prevSlide = currentSlidesRefs[prevSlideID];
        const currentSlide = currentSlidesRefs[currentSlideID];
        var time = 1;
        if (_time !== null) {
          time = _time;
        }
        var direction = "next";
        if (_direction != null) {
          direction = _direction;
        }
        if (direction == "next") {
          TweenLite.to(prevSlide, first ? time : time + 1, {
            css: { left: "-100%", zIndex: "-1" }
          });
          TweenLite.fromTo(
            currentSlide,
            time,
            {
              css: {
                left: "100%",
                zIndex: "10"
              }
            },
            {
              left: "0"
            }
          );
        } else {
          TweenLite.to(prevSlide, time, {
            left: "100%"
          });
          TweenLite.fromTo(
            currentSlide,
            time,
            {
              left: "-100%"
            },
            {
              left: "0"
            }
          );
        }
        TweenLite.delayedCall(props.delay, function() {
          isAnimating = false;
        });
        if (props.effect) first = false;
      }
    };

    const stopAutoPlay = () => {
      isAutoPlay = false;
      TweenLite.killDelayedCallsTo(play);
    };

    gotoPrevSlide = () => {
      var slideToGo = currentSlideID - 1;
      if (slideToGo <= -1) {
        slideToGo = slidesNum - 1;
      }
      stopAutoPlay();
      gotoSlide(slideToGo, props.duration, "prev");
    };

    const startAutoPlay = immediate => {
      if (immediate != null) {
        immediate = false;
      }

      if (immediate) {
        gotoNextSlide();
      }
      TweenLite.delayedCall(props.delay, play);
    };

    gotoNextSlide = () => {
      var slideToGo = currentSlideID + 1;
      if (slideToGo >= slidesNum) {
        slideToGo = 0;
      }
      stopAutoPlay();
      gotoSlide(slideToGo, props.duration, "next");
    };

    const play = () => {
      gotoNextSlide();
      TweenLite.delayedCall(props.delay, play);
    };

    const init = () => {
      TweenLite.set(currentSlidesRefs, {
        left: "-100%"
      });
      // $navPrev.on("click", gotoPrevSlide);
      // $navNext.on("click", gotoNextSlide);
      // $startAutoplay.on("click", startAutoPlay);
      // $stopAutoplay.on("click", stopAutoPlay);
      gotoSlide(0, 0);
    };
    init();
    startAutoPlay();
  });

  const slides = props.children.map((component, i) => {
    const slideRef = useRef();
    slidesRefs.push(slideRef);
    return (
      <div className="slider-item w-100 h-100" ref={slideRef} key={i}>
        {component}
      </div>
    );
  });

  return (
    <div style={{ width: props.width, height: props.height }}>
      <div className="carousel">
        <div className="slider-holder w-100 h-100">
          <div ref={carouselRef} className="slider d-flex h-100 w-100">
            {slides}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
