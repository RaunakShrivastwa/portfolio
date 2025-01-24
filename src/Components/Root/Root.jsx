import React from "react";
import "./Root.scss";
import HomeService from "../Home/Home_Service/HomeService";
import WhyUs from "../Home/WhyUs/WhyUs";
import Home from "../Home/FirstLook/Home";
import About from "../Home/About/About";
import Roadmap from "../Home/Roadmap/Roadmap";
import OurArea from "../Home/OurArea/OurArea";
import Blog from "../Blog/Blog";
import Contact from "../Home/Contact/Contact";
import SignIn from "../../authComponent/SignIn/SignIn";
import Footer from "../../commonComponents/Footer/Footer";
import Services from "../Services/Services";
import Testonomial from "../Home/Testonomial/Testonomial";
import Modal from "../../ReactTable/TableModal/Modal";
import { useSelector } from "react-redux";

function Root({ theme }) {
  const {serverStatus} = useSelector(
    (state) => state.server
  );
  return (
    <div
      className={`vw-100 home_wrapper vh-100 bg-primary overflow-y-auto ${theme}`}
    >
      <div className="social_connect">
        <div className="social_connect_item">
          <img className="social" src="./social.png" alt="" />
          <img className="social" src="./telegram.png" alt="" />
        </div>
        <div className="social_connect_item"></div>
        <div className="social_connect_item"></div>
      </div>
      <Home />
      <WhyUs />
      <HomeService />
      <About />
      <Roadmap />
      <OurArea />
      {serverStatus !== "failed" && <Testonomial />}
      <Blog />
      <Contact />
      <Footer />
      {<Modal />}
    </div>
  );
}

export default Root;
