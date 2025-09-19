import React, { useState } from 'react';
import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.png';
import project3 from '../assets/img/project-3.jpg';
import project4 from '../assets/img/project-4.png';
import project5 from '../assets/img/project-5.png';
import project6 from '../assets/img/project-6.png';
import project7 from '../assets/img/project-7.png';
import project8 from '../assets/img/project-8.jpg';
import project9 from '../assets/img/project-9.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSelectList, setShowSelectList] = useState(false);

  // Datos de los proyectos
  const projects = [
    {
      id: 1,
      image: project1,
      alt: "finance",
      title: "Finance",
      category: "web development",
      link: "#"
    },
    {
      id: 2,
      image: project2,
      alt: "orizon",
      title: "Orizon",
      category: "web development",
      link: "#"
    },
    {
      id: 3,
      image: project3,
      alt: "fundo",
      title: "Fundo",
      category: "web design",
      link: "#"
    },
    {
      id: 4,
      image: project4,
      alt: "brawlhalla",
      title: "Brawlhalla",
      category: "applications",
      link: "#"
    },
    {
      id: 5,
      image: project5,
      alt: "dsm.",
      title: "DSM.",
      category: "web design",
      link: "#"
    },
    {
      id: 6,
      image: project6,
      alt: "metaspark",
      title: "MetaSpark",
      category: "web design",
      link: "#"
    },
    {
      id: 7,
      image: project7,
      alt: "summary",
      title: "Summary",
      category: "web development",
      link: "#"
    },
    {
      id: 8,
      image: project8,
      alt: "task manager",
      title: "Task Manager",
      category: "applications",
      link: "#"
    },
    {
      id: 9,
      image: project9,
      alt: "arrival",
      title: "Arrival",
      category: "web development",
      link: "#"
    }
  ];

  // Categorías para los filtros
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web design', name: 'Web design' },
    { id: 'applications', name: 'Applications' },
    { id: 'web development', name: 'Web development' }
  ];

  // Filtrar proyectos según la categoría activa
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Manejar el cambio de filtro
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Alternar la visibilidad de la lista desplegable
  const toggleSelectList = () => {
    setShowSelectList(!showSelectList);
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filtros para desktop */}
        <ul className="filter-list">
          {categories.map(category => (
            <li key={category.id} className="filter-item">
              <button 
                className={activeFilter === category.id ? 'active' : ''} 
                onClick={() => handleFilterClick(category.id)}
                data-filter-btn
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Selector para móvil */}
        <div className="filter-select-box">
          <button className="filter-select" data-select onClick={toggleSelectList}>
            <div className="select-value" data-select-value>
              {categories.find(cat => cat.id === activeFilter)?.name || 'Select category'}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          {showSelectList && (
            <ul className="select-list">
              {categories.map(category => (
                <li key={category.id} className="select-item">
                  <button 
                    data-select-item 
                    onClick={() => {
                      handleFilterClick(category.id);
                      setShowSelectList(false);
                    }}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Lista de proyectos */}
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li 
              key={project.id} 
              className="project-item active" 
              data-filter-item 
              data-category={project.category}
            >
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;