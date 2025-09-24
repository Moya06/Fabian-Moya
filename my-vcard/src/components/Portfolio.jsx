import React from 'react';
import project1 from '../assets/img/project-1.png';
import project2 from '../assets/img/project-2.png';
// import project3 from '../assets/img/project-3.';
// import project4 from '../assets/img/project-4.';
// ... (los demás imports que no uses puedes borrarlos)

const Portfolio = () => {
  // Datos de los proyectos
  const projects = [
    {
      id: 1,
      image: project1,
      alt: "finance",
      title: "Canton-WebSite",
      category: "web development",
      link: "https://github.com/Moya06/Website-canton"
    },
    {
      id: 2,
      image: project2,
      alt: "orizon",
      title: "MemeIA",
      category: "web development",
      link: "https://github.com/Moya06/Meme_AI"
    }
    // {
    //   id: 3,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // },
    // {
    //   id: 4,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // },
    // {
    //   id: 5,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // },
    // {
    //   id: 6,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // },
    // {
    //   id: 7,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // },
    // {
    //   id: 8,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // },
    // {
    //   id: 9,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // },
    // {
    //   id: 10,
    //   image: "",
    //   alt: "",
    //   title: "",
    //   category: "",
    //   link: "#"
    // }
  ];

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Lista de proyectos sin filtros */}
        <ul className="project-list">
          {projects.map(project => (
            <li
              key={project.id}
              className="project-item active"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
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
