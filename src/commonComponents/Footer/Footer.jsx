import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Code,
  Server,
  Database,
  Globe,
} from "react-feather";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 bg-danger footer_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0 fade-in">
            <h5 className="mb-3 border-bottom pb-2">About Us</h5>
            <img
              src="https://cdn-icons-png.flaticon.com/256/4825/4825112.png"
              alt="Company Logo"
              width={"30px"}
              className="mb-3 logo-pulse"
            />
            <p>
              We are a team of passionate developers specializing in creating
              cutting-edge websites and robust API services. Our mission is to
              empower businesses with innovative digital solutions.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 slide-up">
            <h5 className="mb-3 border-bottom pb-2">Quick Links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="#" className="text-light">
                  <Globe size={16} /> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <Code size={16} /> Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <Server size={16} /> Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <Database size={16} /> API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <Mail size={16} /> Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 slide-up">
            <h5 className="mb-3 border-bottom pb-2">Our Services</h5>
            <ul className="list-unstyled services-list">
              <li>
                <Code size={16} /> Web Development
              </li>
              <li>
                <Server size={16} /> API Integration
              </li>
              <li>
                <Database size={16} /> Database Design
              </li>
              <li>
                <Globe size={16} /> SEO Optimization
              </li>
            </ul>
          </div>
          <div className="col-lg-3 slide-up">
            <h5 className="mb-3 border-bottom pb-2">Contact Us</h5>
            <ul className="list-unstyled  services-list contact-info">
              <li>
                <MapPin size={16} /> 123 Web Dev Street, Techville, IN 12345
              </li>
              <li>
                <Phone size={16} /> (123) 456-7890
              </li>
              <li>
                <Mail size={16} /> info@yourcompany.com
              </li>
              <li>
                <Clock size={16} /> Mon-Fri: 9AM-6PM
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start fade-in">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end fade-in">
            <a href="#" className="text-light me-3 social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-light me-3 social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-light me-3 social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-light social-icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
