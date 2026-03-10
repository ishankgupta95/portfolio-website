import React from 'react';

const experiences = [
  {
    company: 'Just Appraised',
    duration: '4 yrs 7 mos',
    location: 'United States · Remote',
    roles: [
      {
        title: 'Software Engineer',
        date: 'Mar 2025 - Present · 1 yr 1 mo',
        skills: ['Front-End Development', 'Engineering', 'React.js', 'TypeScript', 'JavaScript', 'Zustand', 'React Query'],
      },
      {
        title: 'Software Developer',
        date: 'Jun 2024 - Mar 2025 · 10 mos',
        skills: [],
      },
      {
        title: 'Technical Team Lead',
        date: 'Jan 2023 - Jun 2024 · 1 yr 6 mos',
        skills: [],
      },
      {
        title: 'Technical Configuration Specialist',
        date: 'Sep 2021 - Mar 2023 · 1 yr 7 mos',
        skills: ['JavaScript', 'Python'],
      },
    ],
  },
  {
    company: 'Taboola',
    duration: '2 yrs 6 mos',
    location: 'India',
    roles: [
      {
        title: 'Implementation Specialist',
        date: 'Apr 2019 - Sep 2021 · 2 yrs 6 mos',
        skills: ['Responsive Web Design', 'React.js'],
      },
    ],
  },
  {
    company: 'GeekAssured',
    duration: '9 mos',
    location: 'Gurugram, Haryana, India',
    roles: [
      {
        title: 'Front end developer',
        date: 'Aug 2018 - Apr 2019 · 9 mos',
        skills: ['Responsive Web Design', 'React Native', 'React.js', 'PSD to WordPress'],
      },
    ],
  },
  {
    company: 'Stormfront Consulting',
    duration: '1 yr 1 mo',
    location: 'Greater Delhi Area',
    roles: [
      {
        title: 'Software Engineer',
        date: 'Jun 2017 - Jun 2018 · 1 yr 1 mo',
        skills: ['Responsive Web Design', 'React Native', 'Front-End Development', 'Engineering', 'Android', 'Android Studio', 'React.js', 'Python'],
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Experience</h2>
        <div style={{ position: 'relative' }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ flexShrink: 0, width: '150px', textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{exp.company}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.duration}</p>
              </div>
              <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '2rem', flexGrow: 1 }}>
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} style={{ marginBottom: roleIndex === exp.roles.length - 1 ? 0 : '2rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>{role.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{role.date}</p>
                    {role.skills.length > 0 && (
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {role.skills.map(skill => (
                          <span key={skill} style={{
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.85rem',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(125, 125, 125, 0.1)',
                            color: 'var(--text-color)',
                            fontWeight: 500
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;