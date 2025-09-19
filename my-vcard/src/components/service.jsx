import React from 'react';
// Importa las imágenes directamente
import iconDesign from '../assets/img/icon-design.svg';
import iconDev from '../assets/img/icon-dev.svg';
import iconApp from '../assets/img/icon-app.svg';
import iconPhoto from '../assets/img/icon-photo.svg';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: iconDesign, // Usa la variable importada
      alt: "design icon",
      title: "Web design",
      description: "The most modern and high-quality design made at a professional level."
    },
    {
      id: 2,
      icon: iconDev,
      alt: "Web development icon",
      title: "Web development",
      description: "High-quality development of sites at the professional level."
    },
    {
      id: 3,
      icon: iconApp,
      alt: "mobile app icon",
      title: "Mobile apps",
      description: "Professional development of applications for iOS and Android."
    },
    {
      id: 4,
      icon: iconPhoto,
      alt: "camera icon",
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level."
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
                src={service.icon} // Usa la variable importada
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