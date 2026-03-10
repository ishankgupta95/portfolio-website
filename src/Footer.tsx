import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', marginTop: 'auto', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://github.com/ishankgupta95" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>GitHub</a>
          <a href="https://x.com/ishank1510" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>X</a>
          <a href="https://www.linkedin.com/in/ishankg/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>LinkedIn</a>
          <a href="mailto:ishank1995@gmail.com" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Email</a>
          <a href="#" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Resume</a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Ishank. Built with React & Modern CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;