import React from 'react';
import './brand.css';
import { local, International, Worldwide, Fast, Packages } from './import';
const Brand = () => {
  return (
    <div className="jefclarem__brand section__padding">
      <div>
        <img src={local} />
      </div>
      <div>
        <img src={International} />
      </div>
      <div>
        <img src={Worldwide} />
      </div>
      <div>
        <img src={Fast} />
      </div>
      <div>
        <img src={Packages} />
      </div>
    </div>
  );
};

export default Brand;
