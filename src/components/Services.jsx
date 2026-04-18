import React from 'react';
import { FiCode, FiLayers, FiDatabase } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Backend Development',
      icon: <FiDatabase size={40} />,
      description: 'Building robust, scalable server-side logic and database architecture using Python and Django framework.',
    },
    {
      title: 'Frontend Web Development',
      icon: <FiLayers size={40} />,
      description: 'Creating responsive and interactive user interfaces with modern React, JavaScript, HTML & CSS.',
    },
    {
      title: 'API Design & Integration',
      icon: <FiCode size={40} />,
      description: 'Designing and implementing secure RESTful APIs to connect backend services with frontend applications.',
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
