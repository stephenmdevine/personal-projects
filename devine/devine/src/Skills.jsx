// Skills.js

import React from 'react';
import SkillBar from './SkillBar';
import './styles.css'

const Skills = () => {
  // Sample data, replace with your actual skills and proficiency levels
  const skillsData = [
    { skill: 'JavaScript', proficiency: 90, animated: true },
    { skill: 'React', proficiency: 85, animated: false },
    { skill: 'Node.js', proficiency: 25, animated: false },
    // TODO: Add more skills 
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skill-bars">
        {skillsData.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
