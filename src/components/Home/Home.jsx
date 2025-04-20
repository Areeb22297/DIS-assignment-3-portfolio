import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import './Home.css';
import { useIsMobile } from '../../hooks/use-mobile';
const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="home" id="home">
      <div className="home-background">
        <ParticlesBackground />
      </div>
      
      <div className="custom-bg-overlay"></div>
      
      <div className="home-content">
        <div className="content-wrapper">
          <div ref={textRef} className="home-text">
            <div className="intro-text">
              <p className="welcome-text">HELLO THERE, WELCOME TO MY SITE</p>
              <h1>I'm <span className="highlight">Mohammad Areeb Ansari</span></h1>
              <h2>A Full Stack Developer</h2>
              <h2>& UI/UX Designer</h2>
              
              <div className="home-cta">
                <Link to="#projects" className="primary-btn">
                  <span>My Projects</span>
                </Link>
                <Link to="#contact" className="secondary-btn">
                  <span>CONTACT ME</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="home-image">
            <div className="image-container">
              <div className="model-placeholder">
                <p>3D Model Placeholder</p>
                <p className="small-text">You can edit this space later</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {!isMobile && <div className="scroll-indicator" onClick={scrollToNextSection}>
          <p>Scroll Down</p>
          <ArrowDown size={24} />
        </div>}
    </section>;
};
export default Home;