
import React from 'react';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';

const Portfolio = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Portfolio;
