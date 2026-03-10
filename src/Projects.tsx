import React from 'react';

const projects = [
  { id: 1, title: 'E-Commerce Dashboard', description: 'A modern dashboard for managing products and orders.', tags: ['React', 'TypeScript', 'Tailwind'] },
  { id: 2, title: 'Task Management App', description: 'Collaborative tool for teams to track progress.', tags: ['Next.js', 'Prisma', 'PostgreSQL'] },
  { id: 3, title: 'AI Image Generator', description: 'Generate images from text prompts using AI.', tags: ['Python', 'OpenAI API', 'React'] },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Selected Work</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map((project) => (
            <div key={project.id} style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(125, 125, 125, 0.1)',
                    color: 'var(--text-color)',
                    fontWeight: 500
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;