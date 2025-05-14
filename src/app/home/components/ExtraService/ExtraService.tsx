import React from "react";
import { extraServices } from "@/data/extraServicesData";
import { Icon } from "@iconify/react";

const ExtraService: React.FC = () => {
  return (
    <div className="extra-service">
      <div className="container">
        <div className="headline">
          <div className="title">Extra Services</div>
          <div className="description">
            Enhance your journey with our additional services, tailored to your
            travel needs.
          </div>
        </div>
        <div className="content">
          {extraServices.map((service) => (
            <div key={service.id} className="extra-service-card">
              <div
                className="extra-service-header"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              >
                <div className="extra-service-icon">
                  <Icon
                    icon={service.icon}
                    className="extra-service-icon-content"
                  />
                </div>
                <h3>{service.title}</h3>
              </div>
              <div className="extra-service-details">
                <p>{service.description}</p>
                <a href={service.link} className="details-button">
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraService;
