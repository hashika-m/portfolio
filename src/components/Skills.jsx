import '../styles/Skills.css';
import { useState } from 'react';
// import { FaHtml5 } from "react-icons/fa";
// import { IoLogoCss3 } from "react-icons/io";
// import { DiJavascript } from "react-icons/di";
// import { FaReact } from "react-icons/fa";
// import { TbBrandRedux } from "react-icons/tb";
// import { FaBootstrap } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { TbBrandMysql } from "react-icons/tb";
// import { SiPostman } from "react-icons/si";
// import { FaGitAlt } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
import {
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDatabase,
  // FaServer,
  // FaLayerGroup,
  FaPlug,
  // FaCode,
  FaFigma,
} from "react-icons/fa";

import {
  IoLogoCss3,
} from "react-icons/io";

import {
  DiJavascript,
} from "react-icons/di";

import {
  TbBrandRedux,
  TbBrandMysql,
} from "react-icons/tb";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiAxios,
  SiReactrouter,
  SiJsonwebtokens,
  SiNetlify,
  // SiVercel,
  SiRender,
  SiCanva,
} from "react-icons/si";

// import { MdDevices } from "react-icons/md";

import { VscVscode } from "react-icons/vsc";

const SKILLS = [
  // { name: 'HTML',       icon: <FaHtml5 />, category: 'Frontend' },
  // { name: 'CSS',        icon: <IoLogoCss3 />, category: 'Frontend' },
  // { name: 'JavaScript', icon: <DiJavascript />, category: 'Frontend' },
  // { name: 'React',      icon: <FaReact />, category: 'Frontend' },
  //  { name: 'Redux',      icon: <TbBrandRedux />, category: 'Frontend' },
  // { name: 'Bootstrap',  icon: <FaBootstrap />, category: 'Frontend' },
  //  { name: 'Tailwind Css',      icon: <SiTailwindcss />, category: 'Frontend' },
  //   // { name: 'React Bootstrap',      icon: '⚛️', category: 'Frontend' },
  // { name: 'Node.js',    icon: <FaNodeJs />, category: 'Backend' },
  // { name: 'Express',    icon: <SiExpress />, category: 'Backend' },
  // { name: 'MongoDB',    icon: <SiMongodb />, category: 'Backend' },
  // { name: 'MySQL',      icon: <TbBrandMysql />, category: 'Backend' },
  // { name: 'Postman',    icon: <SiPostman />, category: 'Tools' },
  // { name: 'Git',     icon: <FaGitAlt />, category: 'VCS' },
  //  { name: 'GitHub',      icon: <FaGithub />, category: 'VCS' },
 
  { name: 'HTML', icon: <FaHtml5 />, category: 'Frontend' },
  { name: 'CSS', icon: <IoLogoCss3 />, category: 'Frontend' },
  { name: 'JavaScript', icon: <DiJavascript />, category: 'Frontend' },
  { name: 'React', icon: <FaReact />, category: 'Frontend' },
  { name: 'Redux', icon: <TbBrandRedux />, category: 'Frontend' },
  { name: 'Bootstrap', icon: <FaBootstrap />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },
  { name: 'Axios', icon: <SiAxios />, category: 'Frontend' },
  { name: 'React Router', icon: <SiReactrouter />, category: 'Frontend' },
  // { name: 'Responsive Design', icon: <MdDevices />, category: 'Frontend' },
  // { name: 'DOM Manipulation', icon: <FaCode />, category: 'Frontend' },
  { name: 'REST API Integration', icon: <FaPlug />, category: 'Frontend' },

  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
  { name: 'JWT Authentication', icon: <SiJsonwebtokens />, category: 'Backend' },
  // { name: 'REST APIs', icon: <FaServer />, category: 'Backend' },
  // { name: 'CRUD Operations', icon: <FaDatabase />, category: 'Backend' },
  // { name: 'MVC Architecture', icon: <FaLayerGroup />, category: 'Backend' },

  { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
  { name: 'MySQL', icon: <TbBrandMysql />, category: 'Database' },
  { name: 'SQL', icon: <FaDatabase />, category: 'Database' },

  { name: 'Git', icon: <FaGitAlt />, category: 'VCS' },
  { name: 'GitHub', icon: <FaGithub />, category: 'VCS' },

  { name: 'Postman', icon: <SiPostman />, category: 'Tools' },
  { name: 'VS Code', icon: <VscVscode />, category: 'Tools' },

  { name: 'Netlify', icon: <SiNetlify />, category: 'Deployment' },
  // { name: 'Vercel', icon: <SiVercel />, category: 'Deployment' },
  { name: 'Render', icon: <SiRender />, category: 'Deployment' },

  { name: 'Figma', icon: <FaFigma />, category: 'Design' },
  { name: 'Canva', icon: <SiCanva />, category: 'Design' },

];

const FILTERS = ['All', 'Frontend', 'Backend','Database' ,'Tools','VCS','Deployment','Design'];

const Skills = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === active);

  return (
    <section id="skills" className="skills">
      <div className="container">

        {/* Header */}
        <div className="skills__header reveal">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">My <span>Skills</span></h2>
        </div>

        {/* Filter tabs — same pattern as Projects */}
        <div className="skills__filters reveal">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`skills__filter-btn ${active === f ? 'skills__filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
              <span className="skills__filter-count">
                {f === 'All'
                  ? SKILLS.length
                  : SKILLS.filter(s => s.category === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* key={active} remounts the grid on every tab change
            so the CSS @keyframe animation fires fresh each time */}
        <div className="skills__grid" key={active}>
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="skill-card__icon">{skill.icon}</div>
              <span className="skill-card__name">{skill.name}</span>
              <span className="skill-card__cat">{skill.category}</span>
              <div className="skill-card__glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

