// SkillBar.js

import React from 'react';

const SkillBar = ({ skill, proficiency, animated }) => {
  const skillBarClass = animated ? 'animated-skills' : '';

  return (
    <div className={`skill-bar ${skillBarClass}`}>
      <div className="skill-name">{skill}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${proficiency}%`, '--progress-width': `${proficiency}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
