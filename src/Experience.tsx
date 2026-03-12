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

export const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="experience-heading">Experience</h2>
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-row">
              <div className="experience-company">
                <h3 className="experience-company-name">{exp.company}</h3>
                <p className="experience-duration">{exp.duration}</p>
              </div>
              <div className="experience-roles">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className={roleIndex === exp.roles.length - 1 ? '' : 'experience-role'}>
                    <h4 className="experience-role-title">{role.title}</h4>
                    <p className="experience-role-date">{role.date}</p>
                    {role.skills.length > 0 && (
                      <div className="experience-skills">
                        {role.skills.map(skill => (
                          <span key={skill} className="experience-skill">{skill}</span>
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
}
