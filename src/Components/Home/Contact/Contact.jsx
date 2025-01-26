import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

function Contact() {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    projectDescription: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via Email.js
    emailjs
      .send(
        "service_jbf2uzm", // Replace with your Email.js service ID
        "template_9kz9cfy", // Replace with your Email.js template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          country: formData.country,
          projectDescription: formData.projectDescription,
        },
        "TDcAKqK6acpC-edRR" // Replace with your Email.js public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            service: "",
            country: "",
            projectDescription: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact_container container" id="contact">
      <div className="left p-5 custome_radius box_shadow">
        <h2 className="mb-5 text-center">Talk to Consultant</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3 form-control1">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control custome_radius"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email and Phone */}
          <div className="mb-2 d_field d-flex gap-2">
            <div className="form-control1 mb-2 custome_radius">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-100 form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-control1 mb-1 custome_radius d-flex justify-content-center">
              <div className="input-group mb-3 h-100">
                <select className="input-group-text" id="basic-addon1">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
          </div>

          {/* Service and Country */}
          <div className="mb-2 d_field d-flex gap-2 w-100">
            <div className="form-control1 mb-2">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-control shadow-none custome_radius border-0"
                required
              >
                <option value="">Choose Services</option>
                <option value="Web Development">Web Development</option>
                <option value="APIs Services">APIs Services</option>
                <option value="Digital Marketing Services">
                  Digital Marketing Services
                </option>
                <option value="Logo Design">Logo Design</option>
                <option value="Database Design">Database Design</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-control1 mb-2">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control shadow-none custome_radius border-0"
                required
              >
                <option value="">Choose Country</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="U.K">U.K</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-3">
            <textarea
              id="textarea"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="form-control custome_radius shadow-none"
              rows="4"
              placeholder="Type something..."
              required
            />
          </div>
          <button
            type="submit"
            className="custome_radius submit w-auto px-4 btn"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="right">
        <img
          src="https://nextbigtechnology.com/wp-content/uploads/2023/03/Group-124.png.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contact;
