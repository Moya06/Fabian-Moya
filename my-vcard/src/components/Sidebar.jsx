import React, { useState } from 'react';

// Importa la imagen del avatar
import myAvatar from '../assets/img/my-avatar.png';

const Sidebar = () => {
  const [isContactsVisible, setIsContactsVisible] = useState(false);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Fabián Moya" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Fabián Moya">Fabián Moya</h1>
          <p className="title">Full Stack Web Developer</p>
          <p className="title2">Software Engineering Student</p>
        </div>
        <button 
          className="info_more-btn" 
          data-sidebar-btn
          onClick={() => setIsContactsVisible(!isContactsVisible)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      
      <div className={`sidebar-info_more ${isContactsVisible ? 'active' : ''}`}>
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:fabianmoyawork@gmail.com" className="contact-link">fabianmoyawork@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel: + 506 87865514" className="contact-link">+506 8786-5514</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2025-09-18">April 6, 2006</time>
            </div>
          </li>
       <ul className="social-list">
  {/* <li className="social-item">
    <a href="#" className="social-link">
      <ion-icon className="socials-icons" name="logo-facebook"></ion-icon>
    </a>
  </li>
  <li className="social-item">
    <a href="#" className="social-link">
      <ion-icon className="socials-icons" name="logo-twitter"></ion-icon>
    </a>
  </li>
  <li className="social-item">
    <a href="#" className="social-link">
      <ion-icon className="socials-icons" name="logo-instagram"></ion-icon>
    </a>
  </li> */}
  <li className="social-item">
    <a href="https://www.linkedin.com/in/fabian-moya-06f0323/" target="_blank" rel="noopener noreferrer" className="social-link">
      <ion-icon className="socials-icons" name="logo-linkedin"></ion-icon>
    </a>
  </li>
  <li className="social-item">
  <a href="https://wa.me/50687865514" target="_blank" rel="noopener noreferrer" className="social-link">
    <ion-icon className="socials-icons" name="logo-whatsapp"></ion-icon>
  </a>
</li>

</ul>

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;