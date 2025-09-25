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
      title: "Open Source Contributor | Onlydust",
      period: "2025 — Presente",
      tasks: [
        "Fixed incorrect routes and improved navigation flow.",
        "Fixed functional bugs to ensure correct behavior of key features."
      ]
    }
  ];

  // Datos de habilidades
 

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
<section className="skills-section">
  <h3 className="skills-title">My Skills</h3>

  <div className="skills-card">
    {/* Hard Skills */}
    <div className="skills-column">
         <h4 style={{ marginBottom: '12px' }}>Hard Skills</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={{ color: '#27AE60', fontSize: '15px', fontWeight: 'bold' }}>
            Frontend:
          </span>{' '}
          HTML5, CSS, Tailwind CSS, JavaScript, React
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={{ color: '#27AE60', fontSize: '15px', fontWeight: 'bold' }}>
            Backend:
          </span>{' '}
          Node.js, ASP.NET, C#, Python
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={{ color: '#27AE60', fontSize: '15px', fontWeight: 'bold' }}>
            Databases:
          </span>{' '}
          SQL Server, MongoDB
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={{ color: '#27AE60', fontSize: '15px', fontWeight: 'bold' }}>
            Operating Systems:
          </span>{' '}
          Linux, Windows
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={{ color: '#27AE60', fontSize: '15px', fontWeight: 'bold' }}>
            Cybersecurity:
          </span>{' '}
          IT Essentials, Cybersecurity Basics
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={{ color: '#27AE60', fontSize: '15px', fontWeight: 'bold' }}>
            Version Control:
          </span>{' '}
          Git, GitHub
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={{ color: '#27AE60', fontSize: '15px', fontWeight: 'bold' }}>
            Microsoft Office:
          </span>{' '}
          Word, PowerPoint, Excel
        </li>
      </ul>
    </div>
   

    {/* Soft Skills */}
    <div className="skills-column">
      <h4>Soft Skills</h4>
      <ul>
        <li>Empathy</li>
        <li>Kindness</li>
        <li>Respect</li>
        <li>Effective Communication</li>
        <li>Teamwork</li>
        <li>Adaptability</li>
        <li>Proactivity</li>
        {/* Habilidades adicionales recomendadas */}
        <li>Problem Solving</li>
        <li>Critical Thinking</li>
        <li>Time Management</li>
        <li>Continuous Learning</li>
        <li>Attention to Detail</li>
      </ul>
    </div>
  </div>
</section>



    </article>
  );
};

export default Resume;
