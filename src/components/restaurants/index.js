import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Layout from '../../HOC/Layout';
import PageHeader from '../ui/PageHeader';

import cafeMamia from '../../assets/img/restaurants/cafe-mamia.jpg';
import gabbysBistro from '../../assets/img/restaurants/gabbys-bistro.jpg';
import gerrysGrill from '../../assets/img/restaurants/gerrys-grill.jpg';
import labas from '../../assets/img/restaurants/labas.jpg';
import mooonCafe from '../../assets/img/restaurants/mooon-cafe.jpg';
import pastaKing from '../../assets/img/restaurants/pasta-king.jpg';
import sansRival from '../../assets/img/restaurants/sans-rival.jpg';
import tierraCafe from '../../assets/img/restaurants/tierra-cafe.jpg';

const restaurants = [
  {
    img: cafeMamia,
    title: 'Cafe Mamia',
    address: '14 San Jose St. corner Sta. Catalina St., Dumaguete',
  },
  {
    img: gabbysBistro,
    title: "Gabby's Bistro",
    address: 'E Rovira Dr, Bantayan, Dumaguete',
  },
  {
    img: gerrysGrill,
    title: "Gerry's Grill",
    address: 'Rizal Boulevard, Dumaguete',
  },
  {
    img: labas,
    title: 'Lab-as',
    address: 'Flores Avenue, Dumaguete',
  },
  {
    img: mooonCafe,
    title: 'Mooon Cafe',
    address: '7 Silliman Ave, Dumaguete',
  },
  {
    img: pastaKing,
    title: 'Pasta King',
    address: 'Sta. Catalina Steet, 5 Dr V. Locsin St, Dumaguete',
  },
  {
    img: sansRival,
    title: 'Sans Rival',
    address: ' San Jose St, Dumaguete',
  },
  {
    img: tierraCafe,
    title: 'Tierra Cafe',
    address: 'Tierra Alta Residential Resort, Palinpinon, Valencia',
  },
];

const renderRestaurants = (h, setH) => {
  return restaurants.map(({ img, title, address }, i) => {
    const hovered = h === i;
    return (
      <div className="col-lg-6" key={i} style={{ overflow: 'hidden' }}>
        <Fade
          left={i % 2 !== 0 ? true : false}
          right={i % 2 === 0 ? true : false}
          delay={i * 100}
        >
          <div
            className="restaurant-container"
            onMouseEnter={() => setH(i)}
            onMouseLeave={() => setH(null)}
          >
            <div
              className="restaurant-bg"
              style={{
                background: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPostion: 'center center',
                transform: `scale(${hovered ? '1.1' : '1'})`,
              }}
            />
            <div
              className="restaurant-overlay"
              style={{
                opacity: hovered ? 0 : 0.3,
              }}
            />
            <h4 className="restaurant-title text-white text-center">{title}</h4>
            <p className="restaurant-address text-white text-center d-inline mx-5 p-1">
              {address}
            </p>
          </div>
        </Fade>
      </div>
    );
  });
};

const Restaurants = () => {
  const [h, setH] = useState(null);
  return (
    <Layout>
      <PageHeader title="Restaurants">
        <p>
          Dumaguete is best known for its creamy and mouth-watering Silvanas.
          But if you have no intention of eating Silvanas for the entire trip
          duration, you can satisfy your appetite in Dumaguete's diverse
          delicious and diverse food industry.
        </p>
      </PageHeader>
      <div className="container">
        <div className="row no-gutters">{renderRestaurants(h, setH)}</div>
      </div>
    </Layout>
  );
};

export default Restaurants;
