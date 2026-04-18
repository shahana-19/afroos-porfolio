import React from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.9)), url(${heroBg})` }}>
      <div className="container hero-container animate-fade-in">
        <h2 className="hero-subtitle">Hi, I'm</h2>
        <h1 className="hero-title">Afroos Shahana</h1>
        <h3 className="hero-role">
          <span className="typing-text">Python Developer</span>
        </h3>
        
        <p className="hero-description">
          Highly enthusiastic about the IT field and passionate about building a career in software development. 
          Ready to take on new challenges and build efficient and scalable applications.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View My Work <FiArrowRight />
          </a>
          <a href="#contact" className="btn-secondary">
            Hire Me <FiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
