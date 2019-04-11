import React, { Fragment } from 'react';
import Nav from '../components/nav-footer/Nav';
import Footer from '../components/nav-footer/Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
        { children }
      <Footer/>
    </Fragment>
  );
};

export default Layout;