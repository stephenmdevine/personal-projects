// WorkExperienceEntry.jsx

import React, { useState } from 'react';

const WorkExperienceEntry = ({ jobTitle, company, duration, responsibilities }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="work-experience-entry">
      <div className="work-experience-header" onClick={() => setShowDetails(!showDetails)}>
        <h3>{jobTitle}</h3>
        <p>{company}</p>
        <p>{duration}</p>
      </div>

      {showDetails && (
        <div className="work-experience-details">
          <p>{responsibilities}</p>
          {/* Add more details or achievements as needed */}
        </div>
      )}
    </div>
  );
};

export default WorkExperienceEntry;
