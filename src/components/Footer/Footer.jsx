
import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Mohammad Areeb Ansari</h3>
            <p>Full Stack Developer</p>
          </div>
          
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-bottom">
            <p>
              Made with <Heart size={16} className="heart-icon" /> by Mohammad Areeb Ansari
            </p>
            <p>&copy; {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
