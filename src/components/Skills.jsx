import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { name: 'Python', level: 90, category: 'Backend' },
    { name: 'Django', level: 85, category: 'Backend' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'REST API', level: 85, category: 'Architecture' },
    { name: 'JavaScript', level: 75, category: 'Frontend' },
    { name: 'React', level: 70, category: 'Frontend' },
    { name: 'HTML & CSS', level: 85, category: 'Frontend' },
    { name: 'Bootstrap', level: 80, category: 'Frontend' },
    { name: 'GitHub', level: 80, category: 'Version Control' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="skill-category">{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
