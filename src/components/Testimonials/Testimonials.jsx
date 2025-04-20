
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const slideInterval = useRef(null);
  const testimonialsRef = useRef(null);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Emily Johnson',
      role: 'Product Manager at TechCorp',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: "John created an exceptional web application for our company. His attention to detail and problem-solving skills made the development process smooth and effective. I highly recommend him for any web development project."
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO at StartUp Inc.',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      text: "Working with John was a pleasure. He consistently delivered high-quality code on time and was responsive to feedback. His expertise in React and Node.js was evident in the elegant solutions he provided."
    },
    {
      id: 3,
      name: 'Sarah Martinez',
      role: 'Frontend Developer at WebAgency',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: "John is an amazing teammate and developer. His code is clean, well-documented, and follows best practices. He's always willing to help others and brings positive energy to the team."
    },
  ];

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
  };

  useEffect(() => {
    if (autoplay) {
      startSlideTimer();
    } else if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [autoplay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            setAutoplay(true);
          } else {
            setAutoplay(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    if (autoplay) {
      startSlideTimer();
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
    if (autoplay) {
      startSlideTimer();
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    if (autoplay) {
      startSlideTimer();
    }
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <div 
          ref={testimonialsRef} 
          className="testimonials-slider"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-arrow prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="slider-arrow next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
          
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`} 
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
