import React from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      backgroundColor: 'var(--nav-bg)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '5rem' 
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.025em' }}>
          ishank<span style={{ color: 'var(--primary-color)' }}>.dev</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="#projects" style={{ fontWeight: 500, color: 'var(--text-secondary)', padding: '0.5rem' }}>Work</a>
          <a href="#experience" style={{ fontWeight: 500, color: 'var(--text-secondary)', padding: '0.5rem' }}>Experience</a>
          <a href="mailto:ishank1995@gmail.com" style={{ fontWeight: 500, color: 'var(--text-secondary)', padding: '0.5rem' }}>Contact</a>

          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.1rem',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'transform 0.2s ease'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;