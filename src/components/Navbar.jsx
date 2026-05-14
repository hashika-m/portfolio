import  { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      const current = sections.find(s => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Brand */}
        <a href="#home" className="navbar__brand" onClick={e => handleLinkClick(e, 'home')}>
          <span className="navbar__brand-dot"></span>
          HASHIKA
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`navbar__link ${active === link.toLowerCase() ? 'navbar__link--active' : ''}`}
                onClick={e => handleLinkClick(e, link.toLowerCase())}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="navbar__mobile-link"
            style={{ animationDelay: `${i * 0.06}s` }}
            onClick={e => handleLinkClick(e, link.toLowerCase())}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;