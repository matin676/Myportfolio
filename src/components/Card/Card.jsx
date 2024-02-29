import React from "react";
import { FaGithub } from "react-icons/fa6";

import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`/images/${props.imgName}.webp`}
        alt="project cover"
        className="card__img"
      />
      <span className="card__footer">
        <span>{props.projectName}</span>
        <span className="tag-cloud">{props.technologies}</span>
      </span>
      <a
        href={`https://github.com/matin676/${props.linkName}`}
        target="_blank"
        rel="noreferrer"
      >
        <span className="card__action">
          <FaGithub className="icon" />
        </span>
      </a>
    </div>
  );
}
