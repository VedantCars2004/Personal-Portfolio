import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import projectsData from './projects.json';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = 'Vedant Gohel - Quick Projects';
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-container">
      <div className="back-link">
        <Link to="/">Back to Profile</Link>
      </div>
      <div className="intro-box">
        <h2>Quick Projects</h2>
        <p>Contact vedantuiuc@gmail.com for any repository links.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <br></br>
            {/* <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
              Repository Link
            </a> */}
          </div>
       
        ))}
        
      </div>
    </div>
  );
};

export default ProjectsPage;