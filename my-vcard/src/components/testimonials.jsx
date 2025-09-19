import React, { useState } from 'react';
import '../assets/css/modal-animations.css';

// Importa todas las imágenes
import avatar1 from '../assets/img/avatar-1.png';
import avatar2 from '../assets/img/avatar-2.png';
import avatar3 from '../assets/img/avatar-3.png';
import avatar4 from '../assets/img/avatar-4.png';
import quoteIcon from '../assets/img/icon-quote.svg';

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Datos de los testimonios con las imágenes importadas
  const testimonials = [
    {
      id: 1,
      avatar: avatar1, // Usa la variable importada
      name: "Daniel lewis",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-06-14"
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Jessica miller",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-05-20"
    },
    {
      id: 3,
      avatar: avatar3,
      name: "Emily evans",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-04-15"
    },
    {
      id: 4,
      avatar: avatar4,
      name: "Henry william",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-03-10"
    }
  ];

  // Abrir modal con el testimonio seleccionado
  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
    // Deshabilitar scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    // Iniciar animación de entrada
    setTimeout(() => {
      setIsModalAnimating(true);
    }, 10);
  };

  // Cerrar modal
  const closeModal = () => {
    // Iniciar animación de salida
    setIsModalAnimating(false);
    
    // Cerrar modal después de la animación
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedTestimonial(null);
      // Habilitar scroll del body cuando el modal se cierra
      document.body.style.overflow = 'auto';
    }, 300); // Duración de la animación
  };

  // Cerrar modal al hacer clic fuera del contenido
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

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
                    src={testimonial.avatar} // Usa la variable importada
                    alt={testimonial.name} 
                    width="60" 
                    data-testimonials-avatar 
                  />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>
                  {testimonial.name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text.substring(0, 150)}...</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal de testimonios */}
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
                  src={selectedTestimonial.avatar} // Usa la variable importada
                  alt={selectedTestimonial.name} 
                  width="80" 
                  data-modal-img 
                />
              </figure>

              <img src={quoteIcon} alt="quote icon" /> {/* Usa la variable importada */}
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {selectedTestimonial.name}
              </h4>

              <time dateTime={selectedTestimonial.date}>
                {new Date(selectedTestimonial.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>

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