import React from 'react';
import logo1color from '../assets/img/logo-1-color.png';
import logo2color from '../assets/img/logo-2-color.png';
import logo3color from '../assets/img/logo-3-color.png';
import logo4color from '../assets/img/logo-4-color.png';
import logo5color from '../assets/img/logo-5-color.png';
import logo6color from '../assets/img/logo-6-color.png';  
import logo7color from '../assets/img/logo-7-color.png';  
import logo8color from '../assets/img/logo-8-color.png';  
import logo9color from '../assets/img/logo-9-color.png';  
import logo10color from '../assets/img/logo-10-color.png';  
import logo11color from '../assets/img/logo-11-color.png';  
import logo12color from '../assets/img/logo-12-color.png';  
import logo13color from '../assets/img/logo-13-color.png';  

const Clients = () => {
  const clients = [
    { id: 1, logo: logo1color, alt: "Client logo 1", link: "#" },
    { id: 2, logo: logo7color, alt: "Client logo 7", link: "#" },
    { id: 3, logo: logo6color, alt: "Client logo 6", link: "#" },
    { id: 4, logo: logo9color, alt: "Client logo 9", link: "#" },
    { id: 5, logo: logo2color, alt: "Client logo 2", link: "#" },
    { id: 6, logo: logo8color, alt: "Client logo 3", link: "#" },
    { id: 7, logo: logo13color, alt: "Client logo 4", link: "#" },
    { id: 8, logo: logo5color, alt: "Client logo 5", link: "#" },
    { id: 9, logo: logo12color, alt: "Client logo 8", link: "#" },
    { id: 10, logo: logo4color, alt: "Client logo 10", link: "#" },
    { id: 11, logo: logo10color, alt: "Client logo 11", link: "#" },
    { id: 12, logo: logo3color, alt: "Client logo 12", link: "#" },
    { id: 13, logo: logo11color, alt: "Client logo 13", link: "#" }
  ];

  return (
    <section className="clients">
      <h3 className="h3 clients-title">Technologies</h3>

      <ul className="clients-list has-scrollbar">
        {clients.map(client => (
          <li key={client.id} className="clients-item">
            <a href={client.link}>
              <img src={client.logo} alt={client.alt} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
