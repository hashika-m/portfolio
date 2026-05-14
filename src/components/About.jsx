import profile from '../assets/profile.jpeg';
import '../styles/About.css';
import { FaPaperPlane } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Header */}
        <div className="about__header reveal">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        {/* Body */}
        <div className="about__body">
          {/* Photo side */}
          <div className="about__photo-wrap reveal reveal-left">
            <div className="about__photo-frame">
              <img src={profile} alt="Hashika" className="about__photo" />
              <div className="about__photo-glow"></div>
            </div>

            {/* Floating tag */}
            <div className="about__tag">
              <span className="about__tag-icon"><FaPaperPlane /></span>
              <span>Open to work</span>
            </div>
          </div>

          {/* Text side */}
          <div className="about__text reveal reveal-right">
            <p>
              I am a passionate Full Stack Developer with a strong academic background in Physics.
              I specialize in building responsive and scalable web applications using modern technologies
              like React, Node.js, and MongoDB.
            </p>
            <p>
              With hands-on experience in developing real-world projects such as e-commerce platforms,
              social media apps, and productivity tools, I enjoy solving problems and creating user-friendly
              digital solutions.
            </p>
            <p>
              I am continuously learning and improving my skills to build efficient, high-quality
              applications and contribute effectively to innovative teams.
            </p>

            {/* Quick facts */}
            <div className="about__facts">
              {[
                { label: 'Background',  value: 'Physics Graduate' },
                { label: 'Specialty',   value: 'MERN Stack' },
                { label: 'Focus',       value: 'Full Stack Dev' },
                { label: 'Location',    value: 'India' },
              ].map(({ label, value }) => (
                <div key={label} className="about__fact">
                  <span className="about__fact-label">{label}</span>
                  <span className="about__fact-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;