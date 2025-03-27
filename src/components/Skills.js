import React from "react";
import "../styles.css";

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="technical">
          <h3>Technical Skills</h3>
          <ul>
            <li>Frontend Development (React, HTML, CSS, JavaScript)</li>
            <li>Backend (FastAPI, Node.js)</li>
            <li>Python & Machine Learning</li>
            <li>Data Structures and Algorithm</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="non-technical">
          <h3>Non-Technical Skills</h3>
          <ul>
            <li>Problem-Solving</li>
            <li>Project Management</li>
            <li>Communication & Teamwork</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;