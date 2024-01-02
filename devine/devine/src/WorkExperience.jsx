// WorkExperience.js

import React from 'react';
import WorkExperienceEntry from './WorkExperienceEntry';

const WorkExperience = () => {
    // TODO: Add job history
    // Sample data, replace with your actual work experiences
    const workExperiences = [
        {
            jobTitle: 'Manager',
            company: 'ABC Corp',
            duration: 'Jan 2019 - Present',
            responsibilities: 'Managed a team of 10, implemented process improvements, resolved customer issues.',
        },
        // Add more work experience entries
    ];

    return (
        <div className="work-experience-section">
            <h2>Work Experience</h2>
            <div className="work-experience-list">
                {workExperiences.map((experience, index) => (
                    <WorkExperienceEntry key={index} {...experience} />
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
