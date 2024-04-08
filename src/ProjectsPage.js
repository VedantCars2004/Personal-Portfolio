import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('QuickProjects.JSON')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="projects-container">
      <div className="back-link">
        <Link to="/">Back to Profile</Link>
      </div>
      <div className="intro-box">
        <h2>Quick Projects</h2>
      </div>
      <div className="project-boxes">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
