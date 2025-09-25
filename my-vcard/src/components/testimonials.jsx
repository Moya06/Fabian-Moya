import React, { useState } from 'react';
import '../assets/css/modal-animations.css';

// Importa todas las imágenes
import certification1 from '../assets/img/certification-1.png';
import certification2 from '../assets/img/certification-2.png';
import certification3 from '../assets/img/certification-3.png';
import certification4 from '../assets/img/certification-4.png';
import certification5 from '../assets/img/certification-5.png';
import certification6 from '../assets/img/certification-6.png';
import certification7 from '../assets/img/certification-7.png';
import quoteIcon from '../assets/img/icon-quote.png';

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      avatar: certification5,
      name: "PROGRAMMING ESSENTIALS IN PYTHON",
      subtitle: "CISCO NETWORKING ACADEMY",
      text: "Curso introductorio a la programación con Python, enfocándose en lógica, estructuras de datos, funciones, y buenas prácticas de desarrollo de software.",
      date: "Febrero 8, 2024 - Diciembre 13, 2024"
    },
    {
      id: 2,
      avatar: certification1,
      name: "IT ESSENTIALS",
      subtitle: "CISCO NETWORKING ACADEMY",
      text: "Fundamentos de hardware, software y redes, incluyendo diagnóstico de sistemas, instalación de componentes y soporte técnico básico profesional.",
      date: "Febrero 8, 2024 - Diciembre 13, 2024"
    },
    {
      id: 3,
      avatar: certification2,
      name: "CCNA1",
      subtitle: "CISCO NETWORKING ACADEMY",
      text: "Introducción al diseño y configuración de redes, protocolos, direccionamiento IP y administración de routers y switches con un enfoque práctico.",
      date: "Febrero 8, 2024 - Diciembre 13, 2024"
    },
    {
      id: 4,
      avatar: certification4,
      name: "CYBERSECURITY FUNDAMENTALS",
      subtitle: "CISCO NETWORKING ACADEMY",
      text: "Fundamentos de ciberseguridad, incluyendo análisis de riesgos, amenazas comunes, controles de seguridad y prácticas de protección de información.",
      date: "Febrero 8, 2024 - Diciembre 13, 2024"
    },
    {
      id: 5,
      avatar: certification3,
      name: "LINUX ESSENTIALS",
      subtitle: "CISCO NETWORKING ACADEMY",
      text: "Introducción a sistemas Linux, administración de usuarios, permisos, scripts básicos y manejo de servicios esenciales en entornos profesionales.",
      date: "Febrero 8, 2024 - Diciembre 13, 2024"
    },
    {
      id: 6,
      avatar: certification6,
      name: "YO LIDERO",
      subtitle: "UDCB",
      text: "Desarrollo de habilidades de liderazgo, comunicación efectiva, trabajo en equipo y toma de decisiones en contextos profesionales.",
      date: "Febrero 8, 2024 - Diciembre 13, 2024"
    },
    {
      id: 7,
      avatar: certification7,
      name: "PROGRAMA DE FORMACIÓN PARA EL TRABAJO",
      subtitle: "UDCB",
      text: "Programa orientado a competencias laborales, técnicas y profesionales, enfocado en preparación para el entorno laboral real.",
      date: "Febrero 8, 2024 - Diciembre 13, 2024"
    }
  ];

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setIsModalAnimating(true), 10);
  };

  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedTestimonial(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Certifications</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map(testimonial => (
            <li key={testimonial.id} className="testimonials-item">
              <div 
                className="content-card" 
                data-testimonials-item
                onClick={() => openModal(testimonial)}
                style={{ cursor: 'pointer' }}
              >
                <figure className="testimonials-avatar-box">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    data-testimonials-avatar 
                  />
                </figure>

                <h4 className="cert-title" data-testimonials-title>
                  {testimonial.name}
                </h4>
                <p className="cert-subtitle">{testimonial.subtitle}</p>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text.substring(0, 150)}...</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {isModalOpen && selectedTestimonial && (
        <div 
          className={`modal-container ${isModalAnimating ? 'active' : ''}`} 
          data-modal-container 
          onClick={handleOverlayClick}
        >
          <div className={`overlay ${isModalAnimating ? 'active' : ''}`} data-overlay></div>

          <section className={`testimonials-modal ${isModalAnimating ? 'active' : ''}`}>
            <button 
              className="modal-close-btn" 
              data-modal-close-btn
              onClick={closeModal}
              aria-label="Close modal"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img 
                  src={selectedTestimonial.avatar} 
                  alt={selectedTestimonial.name} 
                  width="80" 
                  data-modal-img 
                />
              </figure>

<img
  src={quoteIcon}
  alt="quote icon"
  style={{
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    marginRight: '6px',
    verticalAlign: 'middle'
  }}
/>
            </div>

            <div className="modal-content">
              <h4 className="cert-title modal-title" data-modal-title>
                {selectedTestimonial.name}
              </h4>
              <p className="cert-subtitle">{selectedTestimonial.subtitle}</p>

              <time>{selectedTestimonial.date}</time>

              <div data-modal-text>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Testimonials;
