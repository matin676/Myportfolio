import React from "react";
import "./Preloader.css";

export default function Preloader() {
  return (
    <div className="preloader-container">
      <div className="spinner">
        <div className="spinner-core"></div>
        <div className="spinner-ring"></div>
      </div>
      <div className="loading-text">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    </div>
  );
}
