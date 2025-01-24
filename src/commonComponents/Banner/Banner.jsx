import React from "react";
import './Banner.scss'

function Banner({image,title,lead}) {
  return (
    <div className="banner text-white py-5 h-75 position-relative d-flex justify-content-center align-items-center">
      {/* <div className="container"> */}
      <img
        className="position-absolute"
        src={image}
        alt="Banner of lets Work"
      />
      <div className="position-absolute px-3">
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead">
          {lead}
        </p>
      </div>
    </div>
  );
}

export default Banner;
