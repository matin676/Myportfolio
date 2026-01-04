import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaRocket } from "react-icons/fa6";
import "./About.css";

const About = () => {
  const highlights = [
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      desc: "I don't just write code; I engineer solutions. From optimizing database queries to crafting intuitive UIs, I focus on efficiency and impact.",
    },
    {
      icon: <FaUsers />,
      title: "Team Leader",
      desc: "With experience leading design teams and facilitating cloud jams at GDSC, I thrive in collaborative environments and mentorship roles.",
    },
    {
      icon: <FaRocket />,
      title: "Innovator",
      desc: "Constantly exploring new tech stacks like Spring Boot and MERN to build scalable, enterprise-grade applications that stand the test of time.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper">
          {/* Left: Image / Visual */}
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="img-backdrop"></div>
            <img
              src="/images/mi_logo.png"
              alt="MI Logo"
              className="about-img"
            />
            <div className="floating-badge">
              <span>🚀</span>
              <div className="badge-text">
                <strong>Always</strong>
                <small>Learning</small>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="about-heading">
                Merging <span className="text-gradient">Logic</span> with{" "}
                <span className="text-gradient">Creativity</span>
              </h2>
              <p className="about-intro">
                As a <strong>Software Developer at TCS</strong> and a Computer
                Science graduate, I bridge the gap between complex backend
                systems and engaging frontend experiences. My journey isn't just
                about learning languages—it's about leveraging technology to
                solve real-world business challenges.
              </p>
            </motion.div>

            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <motion.div
                  className="highlight-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about-action"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#contact" className="btn btn-outline">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
