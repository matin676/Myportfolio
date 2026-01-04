import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="container home-container">
        
        {/* Left Content */}
        <div className="home-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-badge">Available for Work</span>
            <h1 className="hero-title">
              Building Digital <br />
              <span className="text-gradient">Experiences</span>
            </h1>
            <p className="hero-desc">
              I am a Full Stack Developer who enjoys turning complex problems into simple, beautiful and intuitive designs.
            </p>
            
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">
                View My Work <FaArrowRight />
              </a>
              <a href="https://drive.google.com/file/d/1vvDt0T0yVSQe5xlvxROaAh3vNohur8Rk/view?usp=sharing" target="_blank" className="btn-outline">
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Abstract Visual or Image */}
        <motion.div 
          className="home-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="visual-circle"></div>
          <img
            src="/images/homeimage.webp" 
            alt="Matin Imam"
            className="hero-img" 
          />
        </motion.div>
      </div>
    </section>
  );
}
