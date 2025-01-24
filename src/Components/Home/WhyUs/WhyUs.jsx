import React from 'react';
import './WhyUs.scss';
import { aboutMe } from '../../../staticJson/static';

function WhyUs() {
    return (
      <div className="mb-4 why_us_container container">
        <div className="right_text">
          <h1 className="f40">
            {aboutMe?.heading} <br />
           {aboutMe?.title}
          </h1>
          <p className="f18">
           {aboutMe?.summary}
          </p>
        </div>

        <div className="left_card">
          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Completed-Project.png"
              alt=""
            />
            <h2>20+</h2>
            <span>Completed Projects</span>
          </div>
          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Countries-Served.png"
              alt=""
            />
            <h2>3+</h2>
            <span>Country Served</span>
          </div>

          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Hours-of-Coding.png"
              alt=""
            />
            <h2>100000+</h2>
            <span>hour of coding</span>
          </div>

          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Hours-of-Coding.png"
              alt=""
            />
            <h2>2+</h2>
            <span>Years of Business</span>
          </div>
        </div>
      </div>
    );
}

export default WhyUs