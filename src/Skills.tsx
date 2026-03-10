import React from 'react';

const stack = [
  {
    category: 'Frontend',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'Zustand',
      'React Hook Form',
      'React Query',
      'Jotai',
      'Tailwind CSS',
      'Sass',
      'Ant Design',
      'Material UI',
      'shadcn',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    skills: ['Git'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="skills-label">* MY STACK</p>
        <div className="skills-rows">
          {stack.map((group) => (
            <div key={group.category} className="skills-row">
              <h3 className="skills-category">{group.category}</h3>
              <div className="skills-items">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-icon-placeholder" />
                    <span className="skill-name">{skill}</span>
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

export default Skills;
