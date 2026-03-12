const projects = [
  {
    id: 1,
    title: 'Tier List Maker',
    description: 'A drag-and-drop tier list maker. Create tier lists for anything.',
    tags: ['React', 'TypeScript', 'DnD'],
    image: `${import.meta.env.BASE_URL}assets/tier-list.png`,
    link: 'https://ishankgupta95.github.io/tier_list/',
  },
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Selected Work</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2.5rem'
        }}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
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
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>{project.description}</p>
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
              </div>
            </a>
          ))}
        </div>
        <p style={{ marginTop: '2.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>
          More interesting projects solving real problems — coming soon.
        </p>
      </div>
    </section>
  );
}
