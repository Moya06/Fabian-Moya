// components/Navbar.jsx
import React from 'react';

function Navbar() {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item.id}>
            <button
              className="navbar-link"
              data-nav-link
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;