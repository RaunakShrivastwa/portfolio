import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./WorkView.scss";
import Banner from "../../../commonComponents/Banner/Banner";
import Footer from "../../../commonComponents/Footer/Footer";
import Project from "../ProjectCard/Project";

const WorkView = () => {

  return (
    <div className="work-view overflow-auto">
      <Banner
        image={"/P.jpg"}
        title={"Our Work For Clients"}
        lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
      />

      {/* Page Description */}
      <Container className="section mt-5">
        <h2>Welcome to My Project Showcase</h2>
        <p>
          Here you'll find a collection of my best work, demonstrating my skills
          in web development and project management. Each project represents a
          unique challenge that I've successfully overcome, delivering
          high-quality results.
        </p>
      </Container>

      {/* Project Management */}
      <Container className="section">
        <Row>
          <Col className="custome_radius" md={6}>
            <h2>Efficient Project Management</h2>
            <p>
              I pride myself on my ability to manage projects effectively and
              deliver results quickly. My approach combines agile methodologies
              with clear communication to ensure that every project is completed
              on time and to the highest standard.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            
          </Col>
        </Row>
      </Container>

      {/* Projects */}
      <Container className="section">
        <h2 className="m-0">Featured Projects</h2>
        <Row>
          <Project />
        </Row>
      </Container>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default WorkView;
