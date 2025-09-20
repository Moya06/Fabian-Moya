import React from 'react';

const Resume = () => {
  // Datos de educación
  const education = [
    {
      id: 1,
      title: "Fidelitas University",
      period: "CURRENT 2025",
      description: "SOFTWARE DEVELOPMENT ENGINEERING"
    },
    {
      id: 2,
      title: "CEDES DON BOSCO TECHNICAL PROFESSIONAL COLLEGE",
      period: "2019-2024",
      description: "HIGH SCHOOL"
    },
    {
      id: 3,
      title: "CEDES DON BOSCO TECHNICAL PROFESSIONAL COLLEGE",
      period: "2022-2024",
      description: "WEB DEVELOPMENT TECHNICIAN"
    }
  ];

  // Datos de experiencia (con lista de puntos)
  const experience = [
    {
      id: 1,
      title: "Software Developer Intern | AST_Software",
      period: "January 2025 - July 2025",
      tasks: [
        "• Developed dynamic and attractive web interfaces using HTML and CSS",
        "• Implemented backend logic in C# and ASP.NET for data extraction through SQL queries.",
        "• Added features according to requirements discussed inplanning meetings."
      ]
    },
    {
      id: 2,
      title: "Web Development Internship | MOPT",
      period: "October 2024 - November 2024",
      tasks: [
        "• Improved user experience (UX) by implementing responsive styles with CSS.",
        "• Developed CRUD functionalities connected to a database, allowing viewing, modifying, deleting, and storing records.",
        "• Collaborated on enhancing the graphical interface and integrating frontend with backend."
      ]
    },
    {
      id: 3,
      title: "Open Source Contributor | VolunChain-Backend",
      period: "2023 — Presente",
      tasks: [
        "Fixed incorrect routes and improved navigation flow.",
        "Fixed functional bugs to ensure correct behavior of key features."
      ]
    }
  ];

  // Datos de habilidades
  const skills = [
    { id: 1, name: "Frontend Developmentg", percentage: 95 },
    { id: 2, name: " Backend Development", percentage: 85 },
    { id: 3, name: "Database Management", percentage: 80 },
    { id: 4, name: "Operating Systems:", percentage: 80 },
    { id: 5, name: "Cybersecurity", percentage: 70 },
    { id: 6, name: "Version Control:", percentage: 90 },
  ];  

  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Sección de Educación */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map(item => (
            <li key={item.id} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Sección de Experiencia */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map(item => (
            <li key={item.id} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <ul className="timeline-text list-disc pl-5">
                {item.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Sección de Habilidades */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map(skill => (
            <li key={skill.id} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
