import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Verificar la validez del formulario cuando cambien los datos
  useEffect(() => {
    const { fullname, email, message } = formData;
    setIsFormValid(fullname.trim() !== '' && email.trim() !== '' && message.trim() !== '');
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    alert('Mensaje enviado (esto es una simulación)');
    // Limpiar formulario después del envío
    setFormData({
      fullname: '',
      email: '',
      message: ''
    });
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contacto</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400" 
            height="300" 
            loading="lazy"
            title="Ubicación en mapa"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Formulario de Contacto</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              className="form-input" 
              placeholder="Nombre completo" 
              required 
              value={formData.fullname}
              onChange={handleInputChange}
              data-form-input
            />

            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Correo electrónico" 
              required 
              value={formData.email}
              onChange={handleInputChange}
              data-form-input
            />
          </div>

          <textarea 
            name="message" 
            className="form-input" 
            placeholder="Tu mensaje" 
            required 
            value={formData.message}
            onChange={handleInputChange}
            data-form-input
            rows="5"
          ></textarea>

          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isFormValid} 
            data-form-btn
          >
            {/* Si estás usando Ionicons, necesitarás importarlo o usar una alternativa */}
            <span>Enviar mensaje</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;