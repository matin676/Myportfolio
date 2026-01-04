import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import "./Experience.css";

const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Software Developer",
    company: "Tata Consultancy Services (TCS)",
    date: "Jan 2025 - Present",
    desc: "Developed and maintained RESTful APIs using Java, Spring Boot. Implemented Angular UI components and optimized PostgreSQL database performance."
  },
  {
    id: 2,
    type: "education",
    title: "B.E. in Computer Science & Engineering",
    company: "Gujarat Tech University",
    date: "June 2024",
    desc: "CGPA: 8.10 / 10.0. Studied Data Structures, OS, OOP, and more."
  },
  {
    id: 3,
    type: "work",
    title: "Cloud Jam Facilitator",
    company: "Google Developer Student Club",
    date: "2023 - 2024",
    desc: "Guided cloud enthusiasts in completing labs and gaining hands-on experience in cloud technologies."
  },
  {
    id: 4,
    type: "work",
    title: "Design Team Lead",
    company: "Google Developer Student Club",
    date: "2022 - 2023",
    desc: "Managed a design team and executed over 80+ designs including posters, logos, and videos."
  }
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div 
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-content glass-card">
                <div className="timeline-icon">
                  {item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
