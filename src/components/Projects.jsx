import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Food Delivery Backend (In Progress)',
      category: 'Backend Development',
      description: 'A robust server-side architecture for a restaurant food delivery application, focusing on scalable api data management.',
      tags: ['Python', 'Backend', 'API Development', 'Database'],
      github: 'https://github.com/shahana-19/food_delivery_backend'
    },
    {
      title: 'Smart Gardening & Plant Disease Detection',
      category: 'IoT & Machine Learning',
      description: 'Plant irrigation with the help of IoT Technology (LoRaWAN) and Disease Detection using the Weka Machine Learning tool.',
      tags: ['Internet of Things', 'LoRaWAN', 'Weka', 'Machine Learning'],
    },
    {
      title: 'Indoor Navigation System for Visually Impaired',
      category: 'Hardware & Software Integration',
      description: 'An indoor navigation system specifically designed to assist visually impaired individuals using LiFi technology for precise indoor positioning.',
      tags: ['LiFi Technology', 'Python', 'Hardware', 'Navigation'],
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              {(project.github || project.link) && (
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Github link">
                      <FiGithub /> Github
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link primary" aria-label="External link">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
