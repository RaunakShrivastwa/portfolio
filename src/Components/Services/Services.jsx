import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Code, Database, Film, Server, Sliders, Globe } from "lucide-react";
import "./Services.scss";
import Banner from "../../commonComponents/Banner/Banner";
import WhyChhoseUs from "../About/WhyChhoseUs";
import Footer from "../../commonComponents/Footer/Footer";
import { service as services } from "../../staticJson/static";

const Services = () => {
  

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
    <div className="our-services vh-100 overflow-y-auto">
      {/* Main Banner */}

      <Banner
        image={"/serv.jpg"}
        title={"Welcome to Let's Work"}
        lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
      />

      {/* Main Content */}
      <Container>
        {/* Description */}
        <Row className="mt-5">
          <Col>
            <h2>What We Offer</h2>
            <p>
              At Lets Work, we provide a comprehensive range of freelancing
              services to help businesses and individuals bring their ideas to
              life. Our team of skilled professionals specializes in various
              technologies and services, ensuring that your projects are
              executed with precision and creativity.
            </p>
          </Col>
        </Row>

        {/* Services */}
        <Row className="mb-5 bg-transparent">
          {services.map((service, index) => (
            <Col
              key={index}
              md={6}
              lg={4}
              className="mb-4 p-3 w-100 gap-2 custome_radius service_stack d-flex"
            >
              <Card className="shadow-sm w-100 border-0">
                <Card.Img
                  variant="top"
                  height={"400px"}
                  src={service.image}
                  alt={service.title}
                />
              </Card>

              <Card
                className="w-100 bg-transparent box_shadow border-0"
                style={{ borderRadius: "0px !important" }}
              >
                <Card.Header className={`service_head text-white`}>
                  <div className="d-flex align-items-center">
                    {service.icon}
                    <h3 className="ms-2 mb-0 h5">{service.title}</h3>
                  </div>
                </Card.Header>
                <Card.Body className="card_body overflow-y-auto">
                  <Card.Text style={{textAlign:'justify'}} id="card_text">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Technologies */}
        <Row className="mb-5">
          <Col>
            <h3>Technologies We Use</h3>
            <div className="d-flex flex-wrap">
              {technologies.map((tech, index) => (
                <span key={index} className="badge bg-secondary me-2 mb-2 p-2">
                  {tech}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row>
          <Col>
            <h3>Why Choose Us?</h3>
            <WhyChhoseUs />
          </Col>
        </Row>

        {/* Articles */}
        <Row className="mt-5">
          <Col>
            <h3>Latest Articles</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  The Future of JavaScript: Trends to Watch in 2024
                </a>
              </li>
              <li>
                <a href="#">
                  Building Scalable Applications with Spring Boot and React
                </a>
              </li>
              <li>
                <a href="#">
                  Best Practices for API Integration in Modern Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  Choosing the Right Database for Your Project: SQL vs NoSQL
                </a>
              </li>
              <li>
                <a href="#">
                  Video Editing Tips to Enhance Your Marketing Content
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
