import React, { useState } from "react";
import {
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  GitHub,
  Linkedin,
  Twitter,
} from "react-feather";
import ContactWrapper from "./ContactWrapper";
import Footer from "../../commonComponents/Footer/Footer";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    projectName: "",
    projectDescription: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const teamMembers = [
    {
      name: "Shubham Shrivastwa",
      role: "Fullstack Developer",
      experience: "2+ years",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Abhijeet Kumar",
      role: "Frontend Developer",
      experience: "2+ years",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Akash Kumar",
      role: "UI Designer",
      experience: "2+ years",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <div className="contact-page overflow-y-auto vh-100">
      {/* Contact Form */}
      <ContactWrapper />

      {/* Team Members */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {member.role}
                  </h6>
                  <p className="card-text">Experience: {member.experience}</p>
                  <div className="d-flex justify-content-around">
                    <a href={member.github} className="card-link">
                      <GitHub size={20} />
                    </a>
                    <a href={member.linkedin} className="card-link">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.twitter} className="card-link">
                      <Twitter size={20} />
                    </a>
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
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Welcome to Let's Work</h2>
              <p className="lead">
                We're excited to collaborate with you on your next big project.
                Let's create something amazing together!
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/api/placeholder/600/400"
                alt="Welcome"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
