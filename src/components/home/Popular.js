import React from 'react';
import { Fade } from 'react-reveal'
import PictureCard from '../ui/PictureCard';
import apo from '../../assets/img/popular/apo.jpg';
import forestCamp from '../../assets/img/popular/forestCamp.jpg';
import mtTalinis from '../../assets/img/popular/mtTalinis.jpg';
import pulangBato from '../../assets/img/popular/pulangBato.jpg';

const cards = [
  {
    img: apo,
    title: 'Apo Island',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, distinctio ex placeat totam dicta fugit eius nostrum sequi facere quia.',
  },
  {
    img: forestCamp,
    title: 'Forest Camp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, distinctio ex placeat totam dicta fugit eius nostrum sequi facere quia.',
  },
  {
    img: mtTalinis,
    title: 'Mount Talinis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, distinctio ex placeat totam dicta fugit eius nostrum sequi facere quia.',
  },
  {
    img: pulangBato,
    title: 'Pulang Bato',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, distinctio ex placeat totam dicta fugit eius nostrum sequi facere quia.',
  },
];

const renderCards = () => {
  return cards.map((card, i) => {
    return (
      <Fade key={i} bottom delay={i*100}>
        <div className="col-md-6 col-lg-3">
          <PictureCard img={card.img} title={card.title} description={card.description} background={'#eee'} />
        </div>
      </Fade>
    )
  })
}

const Popular = () => {
  return (
    <section id="popular" className="py-5">
      <div className="container">
        <h2 className="text-center">Popular Tours</h2>
        <div className="row">
        {
          renderCards()
        }
        </div>
      </div>
    </section>
  );
};

export default Popular;
