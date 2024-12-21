import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Calculadora de redes',
      description: 'A responsive weather app built with React and OpenWeather API.',
      image: '/src/assets/redes.jpeg',
      link: 'https://github.com/yourusername/weather-app',
    },
    {
      id: 2,
      title: 'Sistema de tickets',
      description: 'My personal portfolio website showcasing my projects and skills.',
      image: '/src/assets/lia.jpeg',
      link: 'https://yourportfolio.com',
    },
    {
      id: 3,
      title: 'Tienda online',
      description: 'A fully functional e-commerce website using Node.js and MongoDB.',
      image: '/src/assets/tienda.webp',
      link: 'https://github.com/yourusername/ecommerce-store',
    },
  ];

  return (
    <section id="projects-section" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
