import React, { useState } from 'react';
import { FiMail, FiMapPin, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        e.target.reset();
      }, 5000);
    }, 1500);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-text">
              I am currently open to new opportunities and collaborations. Whether you have a question 
              or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <a href="mailto:afroosshahanat@gmail.com" className="contact-item glass-card">
                <FiMail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <span>afroosshahanat@gmail.com</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/AfroosShahana" target="_blank" rel="noopener noreferrer" className="contact-item glass-card">
                <FiLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <span>linkedin.com/in/AfroosShahana</span>
                </div>
              </a>
              
              <div className="contact-item glass-card">
                <FiMapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <span>Malappuram, Kerala, India - 679326</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container glass-card">
            {isSubmitted ? (
              <div className="success-message">
                <FiCheckCircle size={50} color="var(--accent-color)" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                </div>
                
                <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <FiSend /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
