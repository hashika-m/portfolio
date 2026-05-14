import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__brand-dot"></span>
          HASHIKA
        </div>

        {/* Center text */}
        <p className="footer__copy">
          © {year} Hashika · Full Stack Developer
        </p>

        {/* Back to top */}
        <button
          className="footer__top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
          Back to top
        </button>

      </div>

      {/* Top separator line */}
      <div className="footer__line"></div>
    </footer>
  );
};

export default Footer;