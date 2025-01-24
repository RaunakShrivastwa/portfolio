import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="card service-card container py-1 px-3 bg-transparent h-100 border-0 custome_radius">
    <div className="card-body box_shadow px-3 mb-2 custome_radius text-center">
      <div className="icon-wrapper mb-3">
        <Icon size={40} />
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);
export default ServiceCard;
