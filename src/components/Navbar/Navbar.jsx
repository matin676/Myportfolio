import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active Link Logic
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveHash("#" + id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container nav-container">
          <a href="#" className="logo">
            Matin<span className="dot">.</span>
          </a>

          {/* Desktop Menu */}
          <ul className="desktop-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={activeHash === link.href ? "active" : ""}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="https://drive.google.com/file/d/1vvDt0T0yVSQe5xlvxROaAh3vNohur8Rk/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-btn">
              Resume
            </a>
            <a href="https://github.com/matin676" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub />
            </a>
            <div className="mobile-toggle">
              <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="https://drive.google.com/file/d/1vvDt0T0yVSQe5xlvxROaAh3vNohur8Rk/view?usp=sharing"
                target="_blank"
                className="mobile-link resume-mobile-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Resume
              </motion.a>
              <div className="mobile-socials">
                <a href="https://github.com/matin676" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/matin-imam/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
