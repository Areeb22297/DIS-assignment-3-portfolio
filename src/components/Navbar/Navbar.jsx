import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutDashboard, User, Briefcase, Star, Send } from 'lucide-react';
import './Navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Check if hash link is active
  const isActive = hash => {
    if (location.pathname === '/') {
      return location.hash === hash;
    }
    return false;
  };
  return <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">My Portfolio</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className={`nav-link ${isActive('#home') ? 'active' : ''}`} onClick={closeMenu}>
              <LayoutDashboard size={18} className="nav-icon" />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className={`nav-link ${isActive('#about') ? 'active' : ''}`} onClick={closeMenu}>
              <User size={18} className="nav-icon" />
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-link ${isActive('#projects') ? 'active' : ''}`} onClick={closeMenu}>
              <Briefcase size={18} className="nav-icon" />
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className={`nav-link ${isActive('#testimonials') ? 'active' : ''}`} onClick={closeMenu}>
              <Star size={18} className="nav-icon" />
              <span>Testimonials</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link ${isActive('#contact') ? 'active' : ''}`} onClick={closeMenu}>
              <Send size={18} className="nav-icon" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>;
};
export default Navbar;