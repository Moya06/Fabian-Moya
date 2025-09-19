import React, { useState } from 'react';

// Importa la imagen del avatar
import myAvatar from '../assets/img/my-avatar.png';

const Sidebar = () => {
  const [isContactsVisible, setIsContactsVisible] = useState(false);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Richard hanrick" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">Richard hanrick</h1>
          <p className="title">Web developer</p>
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
              <a href="mailto:richard@example.com" className="contact-link">richard@example.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+1 (213) 352-2795</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2025-09-18">Sept 18, 2025</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
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
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;