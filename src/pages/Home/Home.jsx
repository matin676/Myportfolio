import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <AnimatedOnScroll animationIn="pulse" animationInDuration={600}>
        <div className="left-home">
          <span className="heading-box">Full-Stack Developer</span>
          <p className="headline">
            Talk is cheap. <br />
            Show me the code
          </p>
          <p className="para">
            I design and code beautifully simple things,
            <br />
            and I love what I do.
          </p>
          <a href="#contact" className="chat">
            LET'S CHAT!
          </a>
        </div>
      </AnimatedOnScroll>
      <div className="right-home">
        <div className="container">
          <img
            fetchpriority="high"
            src="/images/homeimage.webp"
            alt="hero img"
          />
        </div>
      </div>
    </section>
  );
}
