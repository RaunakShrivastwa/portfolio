import React from "react";
import { Container } from "react-bootstrap";
import "./ProjectDemo.scss";
import Banner from "../../commonComponents/Banner/Banner";
import { demo } from "../../staticJson/static";
import Footer from "../../commonComponents/Footer/Footer";

import { Eye } from "react-feather";

const ProjectDemo = () => {
  return (
    <div className="our-project-services vh-100 overflow-y-auto">
      {/* Main Banner */}

      <Banner
        image={"/serv.jpg"}
        title={"Projects  Demo"}
        lead={
          "Explore interactive project demos showcasing dynamic web application"
        }
      />

      {/* Main Content */}
      <Container>
        <h1 className="text-center m-3">project Demo</h1>
        <div className="project_container mb-5">
          {demo.map((data) => (
            <div className="items custome_radius box_shadow m-1">
              <div className="project">
                <video className="w-100 h-100" controls autoPlay src={data.url} alt="" />
                
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

export default ProjectDemo;
