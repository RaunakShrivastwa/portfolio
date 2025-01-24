import React from "react";
import "./About.scss";
const Banner = () => (
  <div className="banner text-white py-5 h-50 position-relative d-flex justify-content-center align-items-center">
    {/* <div className="container"> */}
    <img
      className="position-absolute"
      src="https://wallpapercave.com/wp/wp2471711.jpg"
      alt=""
    />
    <div className="position-absolute">
      <h1 className="display-4 fw-bold"></h1>
      <p className="lead">
        Empowering Your Digital Journey with Cutting-Edge Solutions
      </p>
    </div>
  </div>
);

export default Banner;
