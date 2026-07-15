import React from "react";
import { ReactComponent as NeonIcon } from "../../Assets/TechIcons/Neon.svg";
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiPytest,
  SiJest,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaBrain, FaRobot } from "react-icons/fa";
import { TbSql, TbNetwork, TbTestPipe } from "react-icons/tb";
import {
  AiOutlineApi,
  AiOutlineDeploymentUnit,
  AiOutlineLayout,
  AiOutlineDesktop,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { BsShieldLock, BsCpu } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiTestTube } from "react-icons/bi";

const FigmaMulticolorIcon = (props) => (
  <svg viewBox="0 0 38 57" width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19 28.5A9.5 9.5 0 1 1 19 9.5a9.5 9.5 0 0 1 0 19z" fill="#FF7262" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#F24E1E" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    <path d="M19 19v19a9.5 9.5 0 1 0 9.5-9.5H19z" fill="#1ABCFE" />
  </svg>
);

const skillCategories = [
  {
    title: (
      <>
        Programming <strong className="purple">Languages</strong>
      </>
    ),
    skills: [
      { name: "Python", icon: <SiPython aria-hidden="true" />, color: "#3776AB" },
      { name: "Java", icon: <FaJava aria-hidden="true" />, color: "#ED8B00" },
      { name: "C++", icon: <SiCplusplus aria-hidden="true" />, color: "#007ACD" },
      { name: "C", icon: <SiC aria-hidden="true" />, color: "#A8B9CC" },
      { name: "JavaScript", icon: <SiJavascript aria-hidden="true" />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript aria-hidden="true" />, color: "#3178C6" },
      { name: "SQL", icon: <TbSql aria-hidden="true" />, color: "#33A6B8" },
    ],
  },
  {
    title: (
      <>
        Full-Stack <strong className="purple">Development</strong>
      </>
    ),
    skills: [
      { name: "React.js", icon: <SiReact aria-hidden="true" />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs aria-hidden="true" />, color: "#FFFFFF" },
      { name: "HTML5", icon: <SiHtml5 aria-hidden="true" />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 aria-hidden="true" />, color: "#1572B6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" />, color: "#06B6D4" },
      { name: "Bootstrap", icon: <SiBootstrap aria-hidden="true" />, color: "#7952B3" },
      { name: "Node.js", icon: <SiNodedotjs aria-hidden="true" />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress aria-hidden="true" />, color: "#E0E0E0" },
      { name: "FastAPI", icon: <SiFastapi aria-hidden="true" />, color: "#009688" },
      { name: "REST APIs", icon: <AiOutlineApi aria-hidden="true" />, color: "#00B4D8" },
      { name: "JWT Authentication", icon: <BsShieldLock aria-hidden="true" />, color: "#D63AFF" },
    ],
  },
  {
    title: (
      <>
        Databases & <strong className="purple">Backend Services</strong>
      </>
    ),
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql aria-hidden="true" />, color: "#4169E1" },
      { name: "MySQL", icon: <SiMysql aria-hidden="true" />, color: "#4479A1" },
      { name: "Supabase", icon: <SiSupabase aria-hidden="true" />, color: "#3ECF8E" },
      { name: "Neon", icon: <NeonIcon style={{ width: "1.35rem", height: "1.35rem" }} aria-hidden="true" />, color: "#00E599" },
    ],
  },
  {
    title: (
      <>
        AI/ML <strong className="purple">Application Development</strong>
      </>
    ),
    skills: [
      { name: "Machine Learning", icon: <FaBrain aria-hidden="true" />, color: "#00A8FF" },
      { name: "Deep Learning", icon: <TbNetwork aria-hidden="true" />, color: "#8A2BE2" },
      { name: "NLP", icon: <GiArtificialIntelligence aria-hidden="true" />, color: "#00B4DB" },
      { name: "LLMs", icon: <BsCpu aria-hidden="true" />, color: "#A855F7" },
      { name: "Agentic AI", icon: <FaRobot aria-hidden="true" />, color: "#D946EF" },
      { name: "RAG", icon: <TbSql aria-hidden="true" />, color: "#06B6D4" },
      { name: "Hugging Face", icon: <AiOutlineDeploymentUnit aria-hidden="true" />, color: "#FFD21E" },
      { name: "PyTorch", icon: <SiPytorch aria-hidden="true" />, color: "#EE4C2C" },
      { name: "scikit-learn", icon: <SiScikitlearn aria-hidden="true" />, color: "#F7931E" },
      { name: "OpenCV", icon: <SiOpencv aria-hidden="true" />, color: "#6E4DFF" },
      { name: "MediaPipe", icon: <TbNetwork aria-hidden="true" />, color: "#0097A7" },
      { name: "Pandas", icon: <SiPandas aria-hidden="true" />, color: "#8A5CF5" },
      { name: "NumPy", icon: <SiNumpy aria-hidden="true" />, color: "#4DABCF" },
    ],
  },
  {
    title: (
      <>
        UI/UX & <strong className="purple">QA</strong>
      </>
    ),
    skills: [
      { name: "Figma", icon: <FigmaMulticolorIcon aria-hidden="true" />, color: "#F24E1E" },
      { name: "Wireframing", icon: <AiOutlineLayout aria-hidden="true" />, color: "#00BCD4" },
      { name: "Prototyping", icon: <AiOutlineDeploymentUnit aria-hidden="true" />, color: "#A855F7" },
      { name: "Responsive Design", icon: <AiOutlineDesktop aria-hidden="true" />, color: "#2196F3" },
      { name: "Postman", icon: <SiPostman aria-hidden="true" />, color: "#FF6C37" },
      { name: "API Testing", icon: <AiOutlineApi aria-hidden="true" />, color: "#FF9800" },
      { name: "Unit Testing", icon: <BiTestTube aria-hidden="true" />, color: "#4CAF50" },
      { name: "Integration Testing", icon: <TbTestPipe aria-hidden="true" />, color: "#009688" },
      { name: "Pytest", icon: <SiPytest aria-hidden="true" />, color: "#0A9EDC" },
      { name: "Jest", icon: <SiJest aria-hidden="true" />, color: "#E03C4A" },
      { name: "Manual Testing", icon: <AiOutlineCheckCircle aria-hidden="true" />, color: "#4CAF50" },
    ],
  },
  {
    title: (
      <>
        DevOps & <strong className="purple">Cloud</strong>
      </>
    ),
    skills: [
      { name: "Git", icon: <SiGit aria-hidden="true" />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub aria-hidden="true" />, color: "#FFFFFF" },
      { name: "Docker", icon: <SiDocker aria-hidden="true" />, color: "#2496ED" },
      { name: "AWS", icon: <SiAmazonaws aria-hidden="true" />, color: "#FF9900" },
      { name: "Vercel", icon: <SiVercel aria-hidden="true" />, color: "#FFFFFF" },
    ],
  },
];

function Techstack() {
  return (
    <div className="skills-category-section">
      {skillCategories.map((category, idx) => (
        <div key={idx} className="skill-category-block">
          <h2 className="skill-category-heading">{category.title}</h2>
          <div className="skills-category-row">
            {category.skills.map((skill, skillIdx) => (
              <div
                key={skillIdx}
                className="tech-icons skill-pill"
                style={{ "--tech-color": skill.color }}
              >
                <span className="skill-pill-icon">{skill.icon}</span>
                <span className="skill-pill-text">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
