import React from "react";
import "../styles.css";

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Software Dependency Auditor</h3>
          <p>The Software Dependency Auditor is a tool designed to analyze project dependencies in Python and detect potential issues. 
            It identifies outdated, insecure, or incompatible packages, ensuring software security and compliance.
             It provides update suggestions, license checks, and supports multiple projects. 
             Built using FastAPI, it offers a streamlined, efficient, and user-friendly experience.</p>
          <a href="https://github.com/kimshalu/Python_Dependency_Auditor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Breast Cancer Detection</h3>
          <p>This Breast Cancer Detection system uses machine learning algorithms to classify tumors as benign or malignant based on diagnostic data.
             It applies feature extraction and classification techniques, ensuring high accuracy in early cancer detection. 
             The project is implemented in Python, utilizing Scikit-learn for model training and evaluation. Its goal is to assist in early diagnosis and better treatment planning.</p>
          <a href="https://github.com/kimshalu/Breast_Cancer_Detection" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;