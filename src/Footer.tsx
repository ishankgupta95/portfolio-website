const links = [
  { label: 'GitHub', href: 'https://github.com/ishankgupta95', external: true },
  { label: 'X', href: 'https://x.com/ishank1510', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishankg/', external: true },
  { label: 'Email', href: 'mailto:ishank1995@gmail.com', external: false },
  { label: 'Resume', href: 'https://rxresu.me/ishank1995/ishank-gupta', external: true },
];

export const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', marginTop: 'auto', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{ color: 'var(--text-secondary)', fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Ishank. Built with React & Modern CSS.
        </p>
      </div>
    </footer>
  );
}
