import React from 'react';
import './services.css';
import { Feature } from '../../components';

const Services = () => {
  return (
    <div className="jefclarem__services section__margin" id="service_path">
      <div className="jefclarem__services-feature">
        <Feature
          title="OUR SERVICES"
          text="Our Services include but not limited to: Clearing and Forwarding, Dedicated transport, Warehousing, Inventory Management, Distribution, Cold Chain operations etc."
        />
      </div>
      <div className="jefclarem__services-heading">
        <h1 className="gradient__text">
          Innovative Supply Chain Solutions Provider
        </h1>
        <p>Explore Our Services</p>
      </div>
      <div className="jefclarem__services-container"></div>
      <Feature
        title="Clearing And Forwarding Services"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="Dedicated Transport"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Warehousing"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Inventory Management"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Distribution"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Cold Chain Operations"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Supply Chain Consultancy"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
  );
};

export default Services;
