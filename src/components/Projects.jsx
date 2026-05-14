import '../styles/Projects.css';
import socialApp from '../assets/img5.png';
import movieApp from '../assets/img3.png';
import shoppingApp from '../assets/img4.png';
import invoiceApp from '../assets/img2.png'

const PROJECTS = [
  {
    id: 1,
    title: 'Social Media App',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind CSS'],
    desc: 'A full-stack social media application built using the MERN stack, featuring secure user authentication, dynamic news feed, and real-time interactions. Users can create and manage posts, engage through comments, likes, and manage profiles.',
    category: 'Full Stack',
    // icon: '💬',
    // image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    image:socialApp,
    // github: 'https://github.com/hashika-m',
    // github:'https://github.com/hashika-m',
    live: 'https://cerulean-tulumba-a25f72.netlify.app',
  },
  {
    id: 2,
    title: 'Movie Rating App',
    tech: ['React', 'React Hooks', 'React Router', 'CSS', 'OMDb API'],
    desc: 'Developed an API-driven dynamic movie web app with movie cards, search filters, and detailed pages including a 5-star rating system using React Hooks.',
    category: 'Frontend',
    // icon: '🎬',
    // image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
    image:movieApp,
    github: 'https://github.com/hashika-m/movie-rating-app',
    live: 'https://elegant-kashata-465691.netlify.app/',
  },
  {
    id: 3,
    title: 'Shopping Cart',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    desc: 'Developed a shopping cart application using React with component-based architecture, enabling product display, item selection, and dynamic UI updates.',
    category: 'Frontend',
    // icon: '🛒',
    // image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    image:shoppingApp,
    github: 'https://github.com/hashika-m/Shopping-cart-2.0',
    live: 'https://teal-crumble-a61b23.netlify.app/',
  },
  {
    id: 4,
    title: 'Income-Expense Tracker',
    tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    desc: 'Built a dynamic expense tracker with add/delete features and automatic balance calculations using Local Storage for persistent data.',
    category: 'Vanilla JS',
    // icon: '💰',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    github: 'https://github.com/hashika-m/Income-Expense-Tracker',
    live: 'https://sensational-melba-9a25cd.netlify.app/',
  },
  {
    id: 5,
    title: 'Recipe App — Backend',
    tech: ['Node.js', 'Express', 'MongoDB', 'Postman'],
    desc: 'Implemented CRUD operations and backend logic to manage recipe data, making it ready for frontend integration.',
    category: 'Backend',
    // icon: '🍳',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80',
    github: 'https://github.com/hashika-m/node-recipe_app',
    live: null,
  },
  {
    id: 6,
    title: 'Invoice Generator',
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    desc: 'Designed a responsive travel landing page using Tailwind CSS, focusing on clean UI, layout performance, and responsiveness across devices.',
    category: 'Frontend',
    // icon: '✈️',
    // image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
    image:invoiceApp,
    github: 'https://github.com/hashika-m/invoice-generator',
    live: 'https://polite-lollipop-7af1f5.netlify.app/',
  },
  //   {
  //   id: 6,
  //   title: 'GoTravel',
  //   tech: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  //   desc: 'Designed a responsive travel landing page using Tailwind CSS, focusing on clean UI, layout performance, and responsiveness across devices.',
  //   category: 'Frontend',
  //   // icon: '✈️',
  //   image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
  //   github: 'https://github.com/hashika-m',
  //   live: null,
  // },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35
      0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4
      9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">

      {/* Header */}
      <div className="projects__header reveal">
        <span className="section-label">What I've Built</span>
        <h2 className="section-title">My <span>Projects</span></h2>
      </div>

      {/* Grid — all projects, no filter */}
      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="project-card reveal"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            {/* ── Top meta (always visible) ── */}
            <div className="project-card__meta">
              <div className="project-card__top-row">
                <span className="project-card__icon">{project.icon}</span>
                <span className="project-card__category">{project.category}</span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>

              <div className="project-card__tech">
                {project.tech.map(t => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </div>

            {/* ── Image + hover overlay ── */}
            <div className="project-card__img-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="project-card__img"
                loading="lazy"
              />

              <div className="project-card__overlay">
                <p className="project-card__overlay-desc">{project.desc}</p>

                <div className="project-card__actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="pca-btn pca-btn--github"
                      title="View source on GitHub"
                    >
                      <GitHubIcon />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="pca-btn pca-btn--live"
                      title="Open live demo"
                    >
                      <LiveIcon />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Projects;