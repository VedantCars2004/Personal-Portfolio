import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <div className="back-link">
        <Link to="/">Back to Profile</Link>
      </div>
      <div className="intro-box">
        <h2>Quick Projects</h2>
      </div>
      <div className="project-boxes">
        <div className="project-box">
          <h3>Project Title 1</h3>
          <br></br>
          <p>Project description goes here...</p>
          <br></br>
          <a href="https://github.com/your-username/project-repo-1" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="project-box">
          <h3>Project Title 2</h3>
          <br></br>
          <p>Project description goes here...</p>
          <br></br>
          <a href="https://github.com/your-username/project-repo-2" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        {/* Add more project boxes as needed */}
      </div>
    </div>
  );
};

export default ProjectsPage;