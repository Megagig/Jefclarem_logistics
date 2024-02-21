import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './about.css';

const About = () => {
  return (
    <div className="jefclarem__about section__padding" id="about">
      <div className="jefclarem__about-image">
        <img src={possibilityImage} alt="About" />
      </div>
      <div className="jefclarem__about-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default About;
