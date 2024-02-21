import React from 'react';
import './services.css';
import { Feature } from '../../components';

const Services = () => {
  return (
    <div className="jefclarem__services section__margin" id="service_path">
      <div className="jefclarem__services-feature">
        <Feature />
      </div>
      <div className="jefclarem__services-heading">
        <h1 className="gradient__text">
          Innovative Supply Chain Solutions Provider
        </h1>
        <p>Explore Our Services</p>
      </div>
      <div className="jefclarem__services-container"></div>
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
};

export default Services;
