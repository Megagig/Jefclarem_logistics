import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="jefclarem__header section__padding" id="home">
      <div className="jefclarem__header-content">
        <h1 className="gradient__text">Jefclarem Integrated Logistics</h1>
        <p>
          Getting your freight from point A to B just got easier. We are experts
          in freight brokerage services. Our Reno Freight Logistics Company and
          dedicated trucking fleet provide expert support in logistics and
          transportation management, so you can have your shipments delivered
          faster and at a lower cost. We are a 3PL company that provides a 24/7
          shipment locator and clean, courteous, professional drivers whose
          number one focus is on customer service. When you’re looking for the
          best logistics and trucking companies in Reno/Sparks, NV Full Tilt has
          the team, services, and expertise you need for all your logistics
          needs.
        </p>

        <div className="jefclarem__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="jefclarem__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="jefclarem__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
