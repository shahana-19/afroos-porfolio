import React from 'react';
import { 
  SiPython, 
  SiDjango, 
  SiMysql, 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiBootstrap, 
  SiGithub,
  SiPostman
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { name: 'Python', icon: <SiPython />, category: 'Backend' },
    { name: 'Django', icon: <SiDjango />, category: 'Backend' },
    { name: 'MySQL', icon: <SiMysql />, category: 'Database' },
    { name: 'REST API', icon: <SiPostman />, category: 'Architecture' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend' },
    { name: 'React', icon: <SiReact />, category: 'Frontend' },
    { name: 'HTML & CSS', icon: <SiHtml5 />, category: 'Frontend' },
    { name: 'Bootstrap', icon: <SiBootstrap />, category: 'Frontend' },
    { name: 'GitHub', icon: <SiGithub />, category: 'Version Control' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-category">{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
