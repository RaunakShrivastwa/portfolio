import React from "react";
import "./About.scss";
import Banner from "../../commonComponents/Banner/Banner";
import ServiceCard from "./ServiceCard";
import TeamMember from "./TeamMember";
import Footer from "../../commonComponents/Footer/Footer";
import WhyChhoseUs from "./WhyChhoseUs";
import { useSelector } from "react-redux";
import { services,teamMembers } from "../../staticJson/static";

const ScrollableSection = ({ title, items, renderItem }) => (
  <section className="mb-5">
    <h2 className="section-title text-center mb-4">{title}</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {items.map((item, index) => (
        <div key={index} className="col">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  </section>
);

const AboutUs = () => {


  const {serverStatus} = useSelector(
    (state) => state.server
  );

  return (
    <div className="about-us-page vh-100 overflow-y-auto mt-4">
      {serverStatus === "failed" ? (
        <Banner
          image={"/images/about.jpg"}
          title={"Discover Me, and My Services"}
          lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
        />
      ) : (
        <Banner
          image={"/images/about.jpg"}
          title={"About Let's Work"}
          lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
        />
      )}
      <div className=" py-5 p-3">
        <section className="about-section mb-5">
          <h2 className="section-title text-center mb-4">About My Works</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead text-center mb-4">
                As a client, you are at the center of everything I do. I
                understand that every project is unique, and I am dedicated to
                providing tailored solutions that meet your specific goals.
                Whether you need a professional website, API integration, or
                multimedia services like video and image editing
              </p>
              <div className="card border-0 bg-transparent mb-2">
                <div className="card-body why_card why_choose_lets_work">
                  <h3 className="h4 mb-3">Why Choose Me?</h3>
                  <WhyChhoseUs />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollableSection
          title="My Services"
          items={services}
          renderItem={(service, index) => (
            <ServiceCard key={index} {...service} />
          )}
        />

        <ScrollableSection
          title="Me & My Teams"
          items={teamMembers}
          renderItem={(member, index) => <TeamMember key={index} {...member} />}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
