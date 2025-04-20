import React, { useState, useEffect, useRef } from 'react';
import { Code, FileJson, Server, Database, Globe, Cpu, GitPullRequest, PenTool, Flame, Cloud } from 'lucide-react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const [flippedCards, setFlippedCards] = useState([]);

  const skills = [
    {
      id: 1,
      name: 'React',
      icon: <Code size={40} color="#61DAFB" />,
      description: 'Expert in building modern, responsive UIs with React and its ecosystem.'
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: <FileJson size={40} color="#F7DF1E" />,
      description: 'Proficient in ES6+ features, async programming and functional concepts.'
    },
    {
      id: 3,
      name: 'Node.js',
      icon: <Server size={40} color="#339933" />,
      description: 'Experience building robust server-side applications and RESTful APIs.'
    },
    {
      id: 4,
      name: 'MongoDB',
      icon: <Database size={40} color="#47A248" />,
      description: 'Skilled in designing and implementing NoSQL database solutions.'
    },
    {
      id: 5,
      name: 'HTML/CSS',
      icon: <Globe size={40} color="#E34F26" />,
      description: 'Strong foundation in semantic HTML and advanced CSS techniques.'
    },
    {
      id: 6,
      name: 'TypeScript',
      icon: <Cpu size={40} color="#3178C6" />,
      description: 'Using TypeScript to build scalable and maintainable applications.'
    },
    {
      id: 7,
      name: 'Git/GitHub',
      icon: <GitPullRequest size={40} color="#F05032" />,
      description: 'Version control expert with experience in collaborative development.'
    },
    {
      id: 8,
      name: 'UI/UX Design',
      icon: <PenTool size={40} color="#FF7262" />,
      description: 'Creating user-friendly interfaces with strong focus on user experience.'
    },
    {
      id: 9,
      name: 'Firebase',
      icon: <Flame size={40} color="#FFA611" />,
      description: 'Experience with Firebase Authentication, Realtime Database, and Cloud Functions.'
    },
    {
      id: 10,
      name: 'Supabase',
      icon: <Cloud size={40} color="#3ECF8E" />,
      description: 'Proficient in building applications with Supabase Authentication and Database.'
    }
  ];

  const toggleCard = (id) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section className="about section" id="about">
      <div className="about-bg-image"></div>
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        <div ref={aboutRef} className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p className="text-lg mb-6">
                I'm a passionate Full Stack Developer with expertise in building modern, responsive web applications.
                With a strong foundation in both front-end and back-end technologies, I create elegant solutions that solve real-world problems.
              </p>
              <p className="text-lg mb-6">
                My goal is to deliver high-quality, maintainable code that provides an exceptional user experience.
                I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p>
              <p className="text-lg">
                When I'm not coding, I enjoy hiking, reading tech blogs, and contributing to open source projects.
              </p>
            </div>
          </div>
          <div className="about-photo">
            <img 
              src="/lovable-uploads/1f5b361e-cc6b-4ea7-bc10-803a068cd6bd.png" 
              alt="Developer" 
              className="about-image"
            />
          </div>
        </div>
        
        <div className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div 
                key={skill.id} 
                className={`skill-card ${flippedCards.includes(skill.id) ? 'flipped' : ''}`}
                onClick={() => toggleCard(skill.id)}
              >
                <div className="skill-front">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-level">Click to see more</p>
                </div>
                <div className="skill-back">
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
