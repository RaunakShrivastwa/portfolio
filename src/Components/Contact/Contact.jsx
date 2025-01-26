import React, { useState } from "react";
import {
  Phone,
  Calendar
} from "react-feather";
import ContactWrapper from "./ContactWrapper";
import Footer from "../../commonComponents/Footer/Footer";
import { teamMembers } from "../../staticJson/static";
import './Contact.scss'

const Contact = () => {

  // const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   contactNumber: "",
  //   projectName: "",
  //   projectDescription: "",
  // });


  return (
    <div className="contact-page overflow-y-auto vh-100">
      {/* Contact Form */}
      <ContactWrapper />

      {/* Team Members */}
      <div className="container teams_container my-5">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card team_card box_shadow m-2">
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 f12 text-muted">
                    {member.role}
                  </h6>
                  <p className="card-text">Experience: {member.experience}</p>
                  <div className="d-flex justify-content-around">
                    {member.socialLinks.map((links) => (
                      <a
                        href={links.url}
                        className="card-link box_shadow p-2 rounded-circle m-2"
                      >
                        {/* <link.icon size={20} /> */}
                        {links.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Contact Options */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h3>Get in Touch</h3>
            <div className="d-flex justify-content-center my-4">
              <a
                href="tel:+1234567890"
                className="btn btn-outline-primary me-3"
              >
                <Phone size={20} className="me-2" />
                Call Us
              </a>
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success"
              >
                <Calendar size={20} className="me-2" />
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Design */}
      <div className="container-fluid welcome_container py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="">
              <h2>Hey, Welcome</h2>
              <p className="lead">
                I am excited to collaborate with you on your next big project.
                Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
