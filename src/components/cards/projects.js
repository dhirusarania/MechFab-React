import React, { useEffect } from "react";

const card = props => {
  useEffect(() => {
    console.log(props.img);
  });

  return (
    <div className="card__projects">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${props.img})`
        }}
        className="card__projects__img"
      ></div>
      <h3 className="card__projects__heading">{props.heading}</h3>
      <p className="lead mt-2 card__projects__paragraph">{props.content}</p>
      <button className="homepage__btn bg-dark text-light mt-4">
        Read More
      </button>
    </div>
  );
};

export default card;
