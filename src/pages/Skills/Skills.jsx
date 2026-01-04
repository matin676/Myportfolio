import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring", "Angular", "ReactJs", "NodeJs", "Express"],
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "AWS"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "REST APIs", "Agile", "Postman"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <span className="subtitle">Technologies I Work With</span>
        </motion.div>

        <div className="skills-container">
          {skillsData.map((category, index) => (
            <motion.div
              className="skill-category-group"
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="tags-container">
                {category.items.map((item, i) => (
                  <motion.span
                    className="skill-pill"
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
