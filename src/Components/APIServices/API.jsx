import React from "react";
import { Container} from "react-bootstrap";
import "./API.scss";
import Banner from "../../commonComponents/Banner/Banner";
import {apiService} from '../../staticJson/static';
import Footer from "../../commonComponents/Footer/Footer";

import { Eye } from "react-feather";

const API = () => {
  const technologies = [
    "JavaScript",
    "React",
    "Spring Boot",
    "Node.js",
    "RESTful APIs",
    "SQL",
    "NoSQL",
    "Adobe Premiere Pro",
  ];

  return (
    <div className="our-api-services vh-100 overflow-y-auto">
      {/* Main Banner */}

      <Banner
        image={"/serv.jpg"}
        title={"Robust API Services for Seamless Integration"}
        lead={
          "Explore our powerful API services designed to enhance your applications with secure, fast, and reliable data access. Empower your business with seamless integration and unmatched performance."
        }
      />

      {/* Main Content */}
      <Container>
        <h1 className="text-center m-3">API Services</h1>
        <div className="api_container mb-5">
          {apiService.map((data) => (
            <div className="items custome_radius box_shadow m-1">
              <div className="api">
                <img className="w-100 h-100" src={data.image} alt="" />
                <a href={data.url}>
                  <Eye className="text-light" />
                </a>
              </div>
              <h3 className="tech_stack">{data.title}</h3>
              <div className="desc mb-4 px-3">{data.desc}</div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default API;
