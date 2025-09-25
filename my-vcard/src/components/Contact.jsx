import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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

  // Función para mostrar modal personalizado
  const showCustomAlert = (message) => {
    setModalMessage(message);
    setShowModal(true);
    // REMOVIMOS el auto-cierre después de 3 segundos
  };

  // Función PRINCIPAL que SÍ FUNCIONA - Solo WhatsApp
  const sendToWhatsApp = (data) => {
    const yourPhoneNumber = '50687865514';
    
    const whatsappMessage = `¡Hola! Nuevo mensaje de contacto:

📋 Información del contacto:
• Nombre: ${data.fullname}
• Email: ${data.email}
• Mensaje: ${data.message}

📅 Fecha: ${new Date().toLocaleString('es-CR')}

Este mensaje fue enviado desde el formulario de contacto`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${yourPhoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid || isLoading) return;

    setIsLoading(true);

    try {
      // Esto SÍ FUNCIONA - WhatsApp inmediato
      sendToWhatsApp(formData);
      
      // Usar modal personalizado en lugar de alert
      showCustomAlert('¡Redirigiendo a WhatsApp! Completa el envío del mensaje allí.');
      
      // Limpiar formulario después de éxito
      setTimeout(() => {
        setFormData({
          fullname: '',
          email: '',
          message: ''
        });
      }, 1000);
      
    } catch (error) {
      console.error('Error:', error);
      showCustomAlert('Error al preparar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Estilos FIJOS para el modal (más minimalista)
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--eerie-black-2)',
    color: '#1a1a1a',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(100, 100, 100, 0.15)',
    zIndex: 1000,
    maxWidth: '90%',
    width: '300px',
    textAlign: 'center',
    border: '1px solid #e0e0e0'
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    color: '#666',
    fontSize: '20px',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s'
  };

  const okButtonStyles = {
    backgroundColor: '#1e8449',
    textAlign: 'center',
    color: '#1a1a1a',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '20px',
    width: '100%',
    transition: 'background-color 0.2s'
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contacto</h2>
      </header>

      {/* Modal personalizado - MÁS MINIMALISTA */}
      {showModal && (
        <>
          <div style={overlayStyles} onClick={() => setShowModal(false)}></div>
          <div style={modalStyles}>
            <button 
              style={closeButtonStyles}
              onClick={() => setShowModal(false)}
              onMouseOver={(e) => e.target.style.backgroundColor = '#838383ff'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ×
            </button>
            <div style={{ marginTop: '10px' }}>
              <div style={{ 
                fontSize: '40px', 
                marginBottom: '15px'
              }}>
                💬
              </div>
              <h3 style={{ 
                margin: '0 0 15px 0', 
                fontSize: '18px',
                fontWeight: '600',
                color: 'white'
              }}>
                Listo para WhatsApp
              </h3>
              <p style={{ 
                margin: 0, 
                lineHeight: '1.5',
                fontSize: '14px',
                color: '#666'
              }}>
                {modalMessage}
              </p>
              <button 
                style={okButtonStyles}
                onClick={() => setShowModal(false)}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1e8449'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1e8449'}
              >
                Okay
              </button>
            </div>
          </div>
        </>
      )}

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.552861925033!2d-84.034995!3d9.913583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3f74c7ecbf5%3A0x5df6bd27419c9f1b!2sCurridabat%2C%20San%20Jos%C3%A9%20Province%2C%20Curridabat!5e0!3m2!1sen!2scr!4v1647608789441!5m2!1sen!2scr"
            width="100%" 
            height="400" 
            loading="lazy"
            title="Ubicación en Curridabat, San José, Costa Rica"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Formulario de Contacto</h3>
        <p className="form-subtitle" style={{ color: 'var(--vegas-gold)', fontWeight: '500', marginBottom: '20px', fontSize: '14px' }}>
          ✓ Los datos se enviarán directamente por WhatsApp
        </p>

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
              disabled={isLoading}
            />

            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Correo electrónico" 
              required 
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>

          <textarea 
            name="message" 
            className="form-input" 
            placeholder="Tu mensaje" 
            required 
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            disabled={isLoading}
          ></textarea>

            <button 
    className="form-btn" 
    type="submit" 
    disabled={!isFormValid || isLoading}
    style={{
        backgroundColor: isFormValid && !isLoading ? '#1a1a1a' : '#1a1a1a ',
        color: isFormValid && !isLoading ? '#1e8449' : '#999',
        cursor: isFormValid && !isLoading ? 'pointer' : 'not-allowed',
        width: '100%',
        padding: '10px',
        fontSize: '13px',
        border: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease'
    }}
    onMouseOver={(e) => {
        if (isFormValid && !isLoading) {
            e.target.style.opacity = '0.7';
            e.target.style.transform = 'scale(1.05)';
        }
    }}
    onMouseOut={(e) => {
        if (isFormValid && !isLoading) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'scale(1)';
        }
    }}
    onMouseDown={(e) => {
        if (isFormValid && !isLoading) {
            e.target.style.opacity = '0.5';
            e.target.style.transform = 'scale(0.95)';
        }
    }}
    onMouseUp={(e) => {
        if (isFormValid && !isLoading) {
            e.target.style.opacity = '0.7';
            e.target.style.transform = 'scale(1.05)';
        }
    }}
>
    {isLoading ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'}
</button>
        </form>
      </section>
    </article>
  );
};

export default Contact;


