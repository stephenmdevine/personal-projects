// Education.js

import React from 'react';
import EducationEntry from './EducationEntry';

const Education = () => {
  // Sample data, replace with your actual education details
  const educationEntries = [
    {
      degree: "Bachelor of Science in Physics",
      institution: 'University of Missouri — St Louis',
      field: 'Astrophysics',
      duration: 'Sep 2018 - Dec 2020',
      details: 'Graduated Cum Laude',
    },
    // TODO: edit entries
    {
      degree: 'Full Stack Bootcamp',
      institution: 'LaunchCode',
      field: 'Web Development',
      duration: 'Ongoing',
      details: 'Learning various technologies including React, Node.js, etc.',
    },
    // Add more education entries
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationEntries.map((entry, index) => (
          <EducationEntry key={index} {...entry} />
        ))}
      </div>
    </div>
  );
};

export default Education;
