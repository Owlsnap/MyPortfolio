import React from "react";
import "./TechChips.css";

function TechChips() {
  return (
    <section className="technologies" id="technologies">
        <div className="tech-text">
        <h1>Technologies</h1>
        <span>
            My toolkit includes
        </span>
        </div>
        <div className="chips-container">
            <div className="tech-chip">React</div>
            <div className="tech-chip">JavaScript</div>
            <div className="tech-chip">HTML</div>
            <div className="tech-chip">CSS</div>
            <div className="tech-chip">Node.js</div>
            <div className="tech-chip">Express</div>
            <div className="tech-chip">MongoDB</div>
            <div className="tech-chip">Git</div>
            <div className="tech-chip">GitHub</div>
            <div className="tech-chip">Netlify</div>
            <div className="tech-chip">MUI</div>
        </div>
        <div className="tech-text-bottom">
        <span>
            Whether it's bringing a client's vision to life or
            brainstorming innovative solutions to problems, I'm always up for the
            challenge.
        </span>
        </div>
    </section>
  );
}

export default TechChips;
