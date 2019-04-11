import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';

class Nav extends Component {
  navLinks = [
    { to: '/', name: 'Home' },
    { to: '/tour', name: 'Tourist Spots' },
    { to: '/hotels', name: 'Hotels' },
    { to: '/restaurants', name: 'Restaurants' },
  ];

  renderNavLinks = () => {
    return this.navLinks.map(({to, name}, i) => {
      return <NavLink to={to} name={name} key={i} />;
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="baloo-bold" style={{fontSize: '1.5rem'}}>
              Dumaguete
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {this.renderNavLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
