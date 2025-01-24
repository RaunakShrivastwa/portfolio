import React from "react";
import "./Home.scss"
function Home() {
  return (
    <div className="main_section position-relative">
      
      <div className="wrapper">
        <div className="left">
          <p className="f26 slogn fw-medium">We build what you love</p>
          <p className="title h1">
            Best Web & Mobile App{" "}
            <span style={{ color: "var(--pink);" }}>Development</span> Company
          </p>
          <p className="f20 desc">
            High Quality Web & Mobile Application Design & Development Solution,
            that will help you to achieve new heights in your business.
          </p>
          <div className="btn_grp mt-5 mb-4">
            <button className="btn custome_radius">Talk To Cansult</button>
            <button className="btn custome_radius">Hire us</button>
          </div>
        </div>

        <div className="right mt-5">
          <img
            className="img-fluid items img1"
            src="./programming.png"
            alt=""
          />
          <img
            className="img-fluid items img1"
            src="./new-Mask-group-3.webp"
            alt=""
          />
          <img className="img-fluid items img2" src="./gardening.png" alt="" />
          <img className="img-fluid items img2" src="./www.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
