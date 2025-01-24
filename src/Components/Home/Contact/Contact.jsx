import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [error, setError] = useState(false);
  return (
    <div className="contact_container container">
      <div className="left p-5 custome_radius box_shadow">
        <h2 className="mb-5 text-center">Talk to Consultant</h2>
        <form>
          {/* for user name */}
          <div class="mb-3 form-control1">
            <input
              type="text"
              class="form-control custome_radius"
              placeholder="Full Name"
              id="fullNAme"
              aria-describedby="emailHelp"
            />
          </div>

          {/* email and phone */}
          <div class="mb-2 d_field d-flex gap-2">
            <div className="form-control1 mb-2 custome_radius">
              <input
                type="email"
                className="w-100 form-control"
                placeholder="Email"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-control1 mb-1 custome_radius d-flex justify-content-center">
              <div class="input-group mb-3 h-100">
                <select class="input-group-text" id="basic-addon1">
                  <option value="+91">+91</option>
                  <option value="+91">+91</option>
                  <option value="+91">+91</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Phone"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>

          {/* for the country */}
          <div class="mb-2 d_field d-flex gap-2 w-100">
            <div className="form-control1 mb-2">
              <select
                name=""
                id=""
                className="form-control shadow-none custome_radius border-0"
              >
                <option value="Choose Services">Choose Services</option>
                <option value="Web Development">Web Development</option>
                <option value="APIs Services">APIs Services</option>
                <option value="Digital Marketing Services">
                  Digital Marketing Services
                </option>
                <option value="Logo Design">Logo Design</option>
                <option value="Database Design">Database Design</option>
                <option value="Oher">Oher</option>
              </select>
            </div>

            <div className="form-control1 mb-2">
              <select
                name=""
                id=""
                className="form-control shadow-none custome_radius border-0"
              >
                <option value="Choose Country">Choose Country</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="U.K">U.K</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <textarea
              id="textarea"
              className="form-control custome_radius shadow-none"
              rows="4"
              cols="50"
              re
              placeholder="Type something..."
            />
          </div>
          <button type="submit" class="custome_radius submit w-auto px-4 btn">
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
