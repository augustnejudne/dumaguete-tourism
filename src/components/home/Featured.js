import React from 'react';
import FullWidthCarousel from '../ui/FullWidthCarousel';

import boulevard from '../../assets/img/boulevard.jpg';
import suHall from '../../assets/img/silliman-hall.jpg';
import bellTower from '../../assets/img/bell-tower.jpg';
import buglasan from '../../assets/img/buglasan.jpg';

const Featured = () => {
  const slides = [
    {
      image: bellTower,
      heading: 'Bell Tower',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, fuga.',
      buttonLabel: 'Visit Now',
      link: '/tourist-spots',
    },
    {
      image: buglasan,
      heading: 'Buglasan Festival',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, fuga.',
      buttonLabel: 'Visit Now',
      link: '/tourist-spots',
    },
    {
      image: boulevard,
      heading: 'Dumaguete Boulevard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, fuga.',
      buttonLabel: 'Visit Now',
      link: '/tourist-spots',
    },
    {
      image: suHall,
      heading: 'Silliman Hall',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, fuga.',
      buttonLabel: 'Visit Now',
      link: '/tourist-spots',
    },
  ];

  return (
    <section id="showcase">
      <FullWidthCarousel slides={slides} height='80vh' />
    </section>
  );
};

export default Featured;
