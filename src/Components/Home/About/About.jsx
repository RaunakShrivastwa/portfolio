import React from 'react';
import './About.scss';
import { about } from '../../../staticJson/static';

function About() {
    return (
      <div className="about_container mb-5 align-items-center">
        <div className="about_img rounded-circle h-100">
          <img className="w-100" src="./img.jpg" alt="" />
        </div>
        <div className="about_text">
          <p className="about_btn f30">About</p>
          <p className="f20">
            <h4 className="fw-bold">
              <u>{about?.title}</u>
            </h4>
            {about?.summary}
          </p>
          <button className="get_in_touch_btn btn">Get In Touch</button>
        </div>
      </div>
    );
}

export default About