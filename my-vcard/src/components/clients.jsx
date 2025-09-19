import React from 'react';
import logo1color from '../assets/img/logo-1-color.png';
import logo2color from '../assets/img/logo-2-color.png';
import logo3color from '../assets/img/logo-3-color.png';
import logo4color from '../assets/img/logo-4-color.png';
import logo5color from '../assets/img/logo-5-color.png';
import logo6color from '../assets/img/logo-6-color.png';

const Clients = () => {
  // Datos de los clientes (podrían venir de una API o prop)
  const clients = [
    {
      id: 1,
      logo: logo1color,
      alt: "Client logo 1",
      link: "#"
    },
    {
      id: 2,
      logo: logo2color,
      alt: "Client logo 2",
      link: "#"
    },
    {
      id: 3,
      logo: logo3color,
      alt: "Client logo 3",
      link: "#"
    },
    {
      id: 4,
      logo: logo4color,
      alt: "Client logo 4",
      link: "#"
    },
    {
      id: 5,
      logo: logo5color,
      alt: "Client logo 5",
      link: "#"
    },
    {
      id: 6,
      logo: logo6color,
      alt: "Client logo 6",
      link: "#"
    }
  ];

  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>

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