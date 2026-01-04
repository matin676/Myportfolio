import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "MusicPlayer",
    tech: ["MERN", "Firebase", "Tailwind"],
    img: "musicplayer",
    github: "music-app",
    demo: "#"
  },
  {
    id: 2,
    title: "Hangman Game",
    tech: ["React", "CSS", "GeminiAI"],
    img: "hangman",
    github: "Hangman-Game",
    demo: "#"
  },
  {
    id: 3,
    title: "Employee System",
    tech: ["PHP", "MySQL", "JS"],
    img: "employee",
    github: "Employee_managment_system",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Latest Works</h2>
        </motion.div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div
              className="project-card glass-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-img-wrapper">
                <img 
                  src={`/images/${project.img}.webp`} 
                  alt={project.title} 
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={`https://github.com/matin676/${project.github}`} target="_blank" rel="noreferrer" title="View Code">
                      <FaGithub />
                    </a>
                    {/* Add demo link if available */}
                    {/* <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo">
                      <FaArrowUpRightFromSquare />
                    </a> */}
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-more">
          <a
            href="https://github.com/matin676?tab=repositories"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
