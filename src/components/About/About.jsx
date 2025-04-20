import React, { useEffect, useRef } from 'react';
import './About.css';
const About = () => {
  const aboutSectionRef = useRef(null);
  const skillsRef = useRef(null);

  // Skills data
  const skills = [{
    name: 'JavaScript',
    level: 90
  }, {
    name: 'React',
    level: 85
  }, {
    name: 'Node.js',
    level: 80
  }, {
    name: 'CSS/SCSS',
    level: 85
  }, {
    name: 'HTML',
    level: 95
  }, {
    name: 'TypeScript',
    level: 75
  }];
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
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  return <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <div className="profile-image"></div>
            </div>
          </div>
          <div ref={aboutSectionRef} className="about-text">
            <h3>Who am I?</h3>
            <p>I'm a passionate Full Stack Developer with 1 year of experience building web applications. I specialize in JavaScript technologies across the whole stack (MERN). When I'm not coding, you can find me gaming, reading, or experimenting with new technologies.</p>
            <h3>My Journey</h3>
            <p>
              My path to development started when I was studying Computer Science at the University of Technology.
              Since then, I've worked with various startups and established companies to create
              beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="about-details">
              <div className="detail">
                <span className="detail-title">Name:</span>
                <span className="detail-value">Mohammad Areeb Ansari</span>
              </div>
              <div className="detail">
                <span className="detail-title">Email:</span>
                <span className="detail-value">my_email@gamil.com</span>
              </div>
              <div className="detail">
                <span className="detail-title">Location:</span>
                <span className="detail-value">Somewhere only I know</span>
              </div>
              <div className="detail">
                <span className="detail-title">Availability:</span>
                <span className="detail-value">Freelance/Student</span>
              </div>
            </div>
          </div>
        </div>
        <div ref={skillsRef} className="skills-section">
          <h3>My Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{
                width: `${skill.level}%`,
                animationDelay: `${index * 0.2}s`
              }}></div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;