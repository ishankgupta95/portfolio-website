import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';
import './index.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check system preference on mount
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    
    // Set initial theme based on system
    setTheme(mediaQuery.matches ? 'dark' : 'light');
    
    // Listen for system changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;