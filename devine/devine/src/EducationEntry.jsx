// EducationEntry.js

import React, { useState } from 'react';

const EducationEntry = ({ degree, institution, field, duration, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="education-entry">
      <div className="education-header" onClick={() => setShowDetails(!showDetails)}>
        <h3>{degree}</h3>
        <p>{institution}</p>
        <p>{duration}</p>
      </div>

      {showDetails && (
        <div className="education-details">
          <p>{field}</p>
          <p>{details}</p>
          {/* Add more details or achievements as needed */}
        </div>
      )}
    </div>
  );
};

export default EducationEntry;
