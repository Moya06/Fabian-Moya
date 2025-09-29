import React from 'react';
// Imports the images directly
import iconDesign from '../assets/img/icon-design.png';
import iconDev from '../assets/img/icon-dev.png';
// import iconApp from '../assets/img/icon-app.png';
// import iconPhoto from '../assets/img/icon-photo.png';
import icondatabase from '../assets/img/icon-Database.png';
import iconskills from '../assets/img/icon-skills.png';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: iconDesign, // Uses the imported variable
      alt: "design icon",
      title: "Frontend Development",
      description: "Experience creating modern and responsive interfaces using HTML, CSS, Tailwind CSS, JavaScript, and React."
    },
    {
      id: 2,
      icon: iconDev,
      alt: "Web development icon",
      title: "Backend Development",
      description: "Implementation of business logic with Node.js, ASP.NET, and C#, connecting APIs and efficiently managing data."
    },
    {
      id: 3,
      icon: icondatabase,
      alt: "Database Management icon",
      title: "Database Management",
      description: "Design and querying of databases with SQL Server and MongoDB for dynamic web applications."
    },
    {
      id: 4,
      icon: iconskills,
      alt: "Skills icon",
      title: "Soft Skills & Teamwork",
      description: "Empathy, effective communication, and proactivity to collaborate on software development projects."
    }
  ];

  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>
      <ul className="service-list">
        {services.map(service => (
          <li key={service.id} className="service-item">
            <div className="service-icon-box">
              <img
                src={service.icon} // Uses the imported variable
                alt={service.alt}
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>  
  );
};

export default Services;

// #eab753