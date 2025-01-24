import React, { useState } from "react";
import { Send, Shield, Award, Instagram, Linkedin, Facebook, Twitter,Mail } from "react-feather";
import "./ContactWrapper.scss"; // Assuming the extracted CSS is in 'YourStyles.css'
import Footer from "../../commonComponents/Footer/Footer";

const ContactWrapper = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    projectType: "Web Development",
    projectDescription: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sso = [
    { profile: <Instagram />, url: "https://www.instagram.com/ks_shubham31/", class:'insta' },
    { profile: <Linkedin />, url: "#" ,class:'linkedIn'},
    { profile: <Facebook />, url: "#" , class:'fb' },
    { profile: <Twitter />, url: "#" , class:'twitter'},
    { profile: <Mail />,  url: "#"  , class:'mail'},
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="c_form p-5 mt-5">
      <div className=" mt-3 p-4  rounded  contact-form-container">
        <div className="box_shadow contact1 text-contact custome_radius p-5">
          <h1 className="text-white">Let's Discuss Your Next Project</h1>
          <p className="text-white mb-3">
            You have the Idea & We have the tools.
          </p>

          <div className="d-flex justify-content-between mb-5">
            <div className="text-center text-white">
              <div className="bg-danger rounded-circle">
                <span className="h5 m-0">1</span>
              </div>
              <h5>First Contact</h5>
            </div>
            <div className="text-center text-white">
              <div className="bg-danger rounded-circle">
                <span className="h5 m-0">2</span>
              </div>
              <h5>Requirement Analysis</h5>
            </div>
            <div className="text-center text-white">
              <div className="bg-danger rounded-circle">
                <span className="h5 m-0">3</span>
              </div>
              <h5>Create a proposal</h5>
            </div>
          </div>

          <div className="d-flex justify-content-start mb-4">
            <button className="btn btn-light me-2 d-flex align-items-center">
              <img
                src="/api/placeholder/20/20"
                alt="WhatsApp"
                className="me-2"
              />{" "}
              Whatsapp
            </button>
            <button className="btn btn-primary d-flex align-items-center">
              <img
                src="/api/placeholder/20/20"
                alt="Telegram"
                className="me-2"
              />{" "}
              Telegram
            </button>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card bg-dark text-white">
                <div className="card-body text-center">
                  <Award size={30} className="mb-3" />
                  <h6>Outsourcing Leadership</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-dark text-white">
                <div className="card-body text-center">
                  <Shield size={30} className="mb-3" />
                  <h6>IPR and NDA Protections</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-dark text-white">
                <div className="card-body text-center">
                  <Award size={30} className="mb-3" />
                  <h6>Certified Developers</h6>
                </div>
              </div>
            </div>

            <div className="mt-4 text-light">
              <h5 className="mb-3">Follow Us On Our Social Networks Accounts.</h5>

              <div className="d-flex justify-content-around">
                {sso.map((social, index) => (
                  <a key={index} href="#" className="me-2">
                    <span className={`${social?.class}`}>{social?.profile}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 contact1 form-contact custome_radius box_shadow  text-light">
          <h2 className="mb-4 text-center">Get a Free Quote!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
              >
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
              </select>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Project Description"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-danger d-flex align-items-center"
            >
              SUBMIT <Send size={20} className="ms-2" />
            </button>
          </form>
        </div>
      </div>
    </div>                                          
  );
};

export default ContactWrapper;
