import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiSass,
  SiAntdesign,
  SiMui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from 'react-icons/si';
import { TbBrandReactNative, TbAtom2 } from 'react-icons/tb';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const stack: { category: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
      { name: 'Zustand', icon: <TbAtom2 /> },
      { name: 'React Hook Form', icon: <TbBrandReactNative color="#EC5990" /> },
      { name: 'React Query', icon: <SiReactquery color="#FF4154" /> },
      { name: 'Jotai', icon: <SiReact color="#888" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'Sass', icon: <SiSass color="#CC6699" /> },
      { name: 'Ant Design', icon: <SiAntdesign color="#0170FE" /> },
      { name: 'Material UI', icon: <SiMui color="#007FFF" /> },
      { name: 'shadcn', icon: <SiShadcnui /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit color="#F05032" /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="experience-heading">My Stack</h2>
        <div className="skills-rows">
          {stack.map((group) => (
            <div key={group.category} className="skills-row">
              <h3 className="skills-category">{group.category}</h3>
              <div className="skills-items">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
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
