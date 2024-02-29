import React, { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaGithub, FaRegEnvelope } from "react-icons/fa6";

import "./Navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [extra, setExtra] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const changeMenu = () => {
    setMenu((current) => !current);
    setExtra((current) => !current);
  };

  const closeMenu = () => {
    setMenu(false);
    setExtra(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(menu);
  }, [menu]);

  return (
    <>
      <nav className={scrollPosition > 20 ? "sticky" : ""}>
        <div className="max-width">
          <div className="container">
            <div className="logo">
              <a href="/">
                Matin <span>Imam</span>
              </a>
            </div>
            <ul className={`menu ${menu ? "show" : ""}`}>
              <li>
                <a href="#home" className="menu-btn" onClick={closeMenu}>
                  .Home()
                </a>
              </li>
              <li>
                <a href="#about" className="menu-btn" onClick={closeMenu}>
                  .About()
                </a>
              </li>
              <li>
                <a href="#projects" className="menu-btn" onClick={closeMenu}>
                  .Projects()
                </a>
              </li>
              <li>
                <a href="#contact" className="menu-btn" onClick={closeMenu}>
                  .Contact()
                </a>
              </li>
            </ul>
            <div className={`extra-btn ${extra ? "show" : ""}`}>
              <a
                href="https://github.com/matin676"
                className="contact-btn"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <FaGithub className="icon" /> <span>Github</span>
              </a>
              <a
                href="mailto:matinimam77@gmail.com"
                className="mail-btn"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <FaRegEnvelope />
              </a>
            </div>
          </div>
          <div className="menubar-btn" onClick={changeMenu}>
            <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
    </>
  );
}
