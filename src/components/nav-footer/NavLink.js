import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, name }) => {
  return (
    <li className={`nav-item ${window.location.pathname === to ? 'active' : null}`} style={{padding: '0 1rem'}}>
      <Link to={to} className="nav-link">{name}</Link>
    </li>
  );
};

export default NavLink;