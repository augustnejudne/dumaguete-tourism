import React from 'react';
import { Fade } from 'react-reveal';
import {
  faMapMarkedAlt,
  faHotel,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';

import IconCard from '../ui/IconCard';

const cards = [
  {
    icon: faMapMarkedAlt,
    title: 'Tourist Spots',
    link: {
      to: '/tour',
      label: 'Learn more',
    },
  },
  {
    icon: faHotel,
    title: 'Hotels',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis facere unde a quo aperiam. Alias, sit voluptatem nisi libero.',
    link: {
      to: '/hotels',
      label: 'Learn more',
    },
  },
  {
    icon: faPizzaSlice,
    title: 'Restaurants',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis facere unde a quo aperiam. Alias, sit voluptatem nisi libero.',
    link: {
      to: '/restaurants',
      label: 'Learn more',
    },
  },
];

const Plan = () => {
  return (
    <section id="plan" className="py-5" style={{ background: '#f5f5f5' }}>
      <div className="container">
        <h2 className="text-center test">Plan Your Dumaguete Trip</h2>
        <div className="row">
          {cards.map((card, i) => {
            return (
              <Fade bottom key={i} delay={i * 100}>
                <div className="col-md-4">
                  <IconCard
                    icon={card.icon}
                    color={card.color}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plan;
