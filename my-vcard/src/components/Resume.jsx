import React from 'react';

const Resume = () => {
  // Datos de educación
  const education = [
    {
      id: 1,
      title: "University school of the arts",
      period: "2007 — 2008",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      id: 2,
      title: "New york academy of art",
      period: "2006 — 2007",
      description: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
    },
    {
      id: 3,
      title: "High school of art and design",
      period: "2002 — 2004",
      description: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
    }
  ];

  // Datos de experiencia
  const experience = [
    {
      id: 1,
      title: "Creative director",
      period: "2015 — Present",
      description: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
    },
    {
      id: 2,
      title: "Art director",
      period: "2013 — 2015",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      id: 3,
      title: "Web designer",
      period: "2010 — 2013",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    }
  ];

  // Datos de habilidades
  const skills = [
    { id: 1, name: "Web design", percentage: 80 },
    { id: 2, name: "Graphic design", percentage: 70 },
    { id: 3, name: "Branding", percentage: 90 },
    { id: 4, name: "WordPress", percentage: 50 }
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
              <p className="timeline-text">{item.description}</p>
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