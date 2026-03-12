import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container animate-fade-in">
        <div className="hero-text">
          <div className="hero-title-container">
            <h1 className="hero-title">SOFTWARE</h1>
            <h1 className="hero-title hero-title-gradient">ENGINEER</h1>
          </div>
          <p className="hero-description">
            Hi! I'm Ishank. A Software Engineer with 7+ years of experience in building high-performance, scalable, and responsive web solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="mailto:ishank1995@gmail.com" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-container">
          {/* Make sure to place your image at `public/assets/profile-picture.png` */}
          <img src={`${import.meta.env.BASE_URL}assets/profile-picture.jpg`} alt="Ishank Gupta" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;