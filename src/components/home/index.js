import React from 'react';
import Layout from '../../HOC/Layout';

import Featured from './Featured';
import About from './About';
import Plan from './Plan';
import Popular from './Popular';

const Home = () => {
  return (
    <Layout>
      <Featured />
      <div className="container-fluid bg-danger text-center text-white py-3">
        <h3 className="baloo-bold">
          #DumagueteFiesta2019
        </h3>
      </div>
      <About />
      <Plan />
      <Popular />
    </Layout>
  );
};

export default Home;
