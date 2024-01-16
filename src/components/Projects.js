import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/project.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="projects-content">
      <h2>Projects</h2>
      <div className="disclaimer">
        <p>
          Disclaimer: The projects listed below are for demonstration purposes only. They are not real
          projects but are fetched from a public API to showcase API integration for the exam.
        </p>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;