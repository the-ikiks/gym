import React from "react";
import "./index.css";

function Intro({ image, title, description }) {
  return (
    <div className="intro">
      <img src={image} alt="Intro" />

      <div className="intro-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Intro;
