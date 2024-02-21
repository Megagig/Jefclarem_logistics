import React from 'react';
import { Blog, Feature, Footer, Header, About, Services } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
//rafce
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Services />
      <Feature />
      <About />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
