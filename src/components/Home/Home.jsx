
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="home-background"></div>
      <div className="home-content">
        <div ref={textRef} className="home-text">
          <div className="stats-box">
            <h1>Hello, I'm <span className="highlight">Mohammad Areeb Ansari</span></h1>
            <h2>Full Stack Developer</h2>
            <p>
              I craft beautiful and functional websites and applications with a focus on user experience.
            </p>
            
            <div className="stats-row">
              <div className="stat-card pink-card">
                <div className="stat-header">
                  <h3>Projects Completed</h3>
                </div>
                <div className="stat-value">52.3K</div>
                <div className="stat-label">This Month</div>
              </div>
              
              <div className="stat-card purple-card">
                <div className="stat-header">
                  <h3>Happy Clients</h3>
                </div>
                <div className="stat-value">42.1K</div>
                <div className="stat-label">This Month</div>
              </div>
              
              <div className="stat-card blue-card">
                <div className="stat-header">
                  <h3>Code Lines</h3>
                </div>
                <div className="stat-value">510.1K</div>
                <div className="stat-label">This Month</div>
              </div>
            </div>
            
            <div className="home-cta">
              <Link to="#projects" className="primary-btn">
                View My Work
              </Link>
              <Link to="#contact" className="secondary-btn">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <p>Scroll Down</p>
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Home;
