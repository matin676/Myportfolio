import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiPhp,
  DiMysql,
  DiGit,
  DiBootstrap,
  DiNpm,
} from "react-icons/di";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <AnimatedOnScroll animationIn="slideInLeft" animationInDuration={600}>
        <div className="left-about">
          <p className="expertise">My TechStack</p>
          <div className="container">
            <div className="skill-container">
              <DiHtml5
                className="icon"
                style={{ color: "#FF4000" }}
                title="HTML5"
              />
            </div>
            <div className="skill-container">
              <DiCss3
                className="icon"
                style={{ color: "#0282C9" }}
                title="CSS3"
              />
            </div>
            <div className="skill-container">
              <DiJavascript
                className="icon"
                style={{ color: "#E1BD00" }}
                title="JavaScript"
              />
            </div>
            <div className="skill-container">
              <DiReact
                className="icon"
                style={{ color: "#93F8FF" }}
                title="ReactJS"
              />
            </div>
            <div className="skill-container">
              <DiNodejsSmall
                className="icon"
                style={{ color: "#22A567" }}
                title="NodeJs"
              />
            </div>
            <div className="skill-container">
              <img
                src="/images/Express.webp"
                alt="express"
                className="icon"
                title="Express"
              />
            </div>
            <div className="skill-container">
              <img
                src="/images/mongodb.webp"
                alt="mongodb"
                className="icon"
                title="MongoDB"
              />
            </div>
            <div className="skill-container">
              <DiPhp
                className="icon"
                style={{ color: "#8F78A4" }}
                title="PHP"
              />
            </div>
            <div className="skill-container">
              <DiMysql
                className="icon"
                style={{ color: "#007A6B" }}
                title="MYSQL"
              />
            </div>
            <div className="skill-container">
              <DiGit
                className="icon"
                style={{ color: "#F4511E" }}
                title="GIT"
              />
            </div>
            <div className="skill-container">
              <img
                src="/images/figma.webp"
                alt="figma"
                className="icon"
                title="Figma"
              />
            </div>
            <div className="skill-container">
              <img
                src="/images/Tailwindcss.webp"
                alt="tailwind"
                className="icon"
                title="Tailwind"
              />
            </div>
            <div className="skill-container">
              <DiBootstrap
                className="icon"
                style={{ color: "#8947CB" }}
                title="Bootstrap"
              />
            </div>
            <div className="skill-container">
              <img
                src="/images/firebase.webp"
                alt="firebase"
                className="icon"
                title="Firebase"
              />
            </div>
            <div className="skill-container">
              <DiNpm
                className="icon"
                style={{ color: "#DD3434" }}
                title="NPM"
              />
            </div>
            <div className="skill-container">
              <img
                src="/images/python.webp"
                alt="python"
                className="icon"
                title="Python"
              />
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="slideInRight" animationInDuration={600}>
        <div className="right-about">
          <p className="introduce">Introduce</p>
          <p className="heading">
            Hello! I'm Matin <br />
            Imam
          </p>
          <p className="about-para">
            🚀 Hey there, digital trailblazer! 👋 I'm a full-stack sorcerer
            weaving code into captivating digital realms. Think of me as a web
            virtuoso, merging creativity and tech to sculpt experiences that
            defy the ordinary.
          </p>
          <br />
          <p className="about-para">
            💻 Fluent in the languages of the future—HTML5, CSS3, and
            JavaScript—I sculpt sleek interfaces that dance with user delight.
            My backstage mastery involves Node.js and PHP, where I architect the
            unseen, making the impossible, possible.
          </p>
        </div>
      </AnimatedOnScroll>
    </section>
  );
}
