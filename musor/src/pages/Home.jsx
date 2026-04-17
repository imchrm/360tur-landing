import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowWeWork from '../components/HowWeWork';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import AboutCards from '../components/AboutCards';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HowWeWork />
      <About />
      <Testimonials />
      <AboutCards />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
