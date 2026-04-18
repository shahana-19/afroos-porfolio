import React from 'react';
import { FiBookOpen, FiMapPin, FiBriefcase } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <h3 className="about-greeting">Hello! I'm Afroos Shahana.</h3>
            <p>
              I am a graduate in Information Technology, currently working as a Development Trainee. 
              I am highly enthusiastic about the IT field and passionate about building a career in software development.
            </p>
            <p>
              I enjoy taking on new challenges and continuously expanding my skills, particularly in Python programming. 
              My goal is to grow as a proficient developer by contributing to real-world projects and staying updated with the latest technologies.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <FiMapPin className="detail-icon" />
                <div>
                  <h4>Location</h4>
                  <span>Malappuram, Kerala, India</span>
                </div>
              </div>
              <div className="detail-item">
                <FiBriefcase className="detail-icon" />
                <div>
                  <h4>Experience</h4>
                  <span>Development Trainee at Raihsoft Technologies</span>
                </div>
              </div>
              <div className="detail-item">
                <FiBookOpen className="detail-icon" />
                <div>
                  <h4>Education</h4>
                  <span>B.Tech in Information Technology</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
