import React from "react";
import Card from "../../components/Card/Card";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projectLeft">
        <p className="heading">Latest Works</p>
        <AnimatedOnScroll animationIn="pulse" animationInDuration={600}>
          <Card
            imgName="musicplayer"
            projectName="MusicPlayer"
            technologies="React | CSS"
            linkName="music-player"
            className="card"
          />
        </AnimatedOnScroll>
        <a
          href="https://github.com/matin676?tab=repositories"
          className="chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          ALL PROJECTS
        </a>
      </div>
      <div className="projectRight">
        <div className="card1">
          <AnimatedOnScroll animationIn="pulse" animationInDuration={600}>
            <Card
              imgName="hangman"
              projectName="Hangman Game"
              technologies="React | CSS | NodeJs | ExpressJs"
              linkName="Hangman-Game"
            />
          </AnimatedOnScroll>
        </div>
        <div className="card2">
          <AnimatedOnScroll animationIn="pulse" animationInDuration={600}>
            <Card
              imgName="employee"
              projectName="Employee Manage Sys"
              technologies="Html | CSS | Js | Php | MySQL"
              linkName="Employee_managment_system"
            />
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
