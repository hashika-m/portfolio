import { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const ROLES = ['Full Stack Developer', 'MERN Stack Engineer', 'Problem Solver'];

const Hero = () => {
  const roleRef = useRef(null);

  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false;

    const type = () => {
      const current = ROLES[roleIdx];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      setTimeout(type, deleting ? 60 : 100);
    };

    const t = setTimeout(type, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1"></div>
      <div className="hero__blob hero__blob--2"></div>
      <div className="hero__blob hero__blob--3"></div>

      {/* Grid overlay */}
      <div className="hero__grid"></div>

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Available for opportunities
        </div>

        {/* Heading */}
        <h1 className="hero__heading">
          Hi, I'm <span className="highlight">Hashika</span>
        </h1>

        {/* Typewriter */}
        <p className="hero__role">
          <span ref={roleRef}></span>
          <span className="hero__cursor">|</span>
        </p>

        {/* Sub */}
        <p className="hero__sub">
          Building scalable and modern web applications
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <a href="#projects" className="btn btn--primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">6+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-num">15+</span>
            <span className="hero__stat-label">Technologies</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-num">MERN</span>
            <span className="hero__stat-label">Stack</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;