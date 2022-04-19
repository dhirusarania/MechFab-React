import React from "react";

export default props => {
  return (
    <div
      style={{
        backgroundImage: "url(/static/DSC_8260.jpg)"
      }}
      className="headers"
    >
      <div className="headers__overlay" />
      <div className="headers__about d-flex justify-content-center align-items-center">
        <h1 className="headers__heading">{props.heading}</h1>
      </div>
      <div className="headers__box" />
      <div className="headers__line--main" />
      <div className="headers__line--sub" />
      <div className="headers__line headers__line--1" />
      <div className="headers__line headers__line--2" />
      <div className="headers__line headers__line--3" />
      <div className="headers__line headers__line--4" />
    </div>
  );
};
