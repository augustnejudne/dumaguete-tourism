import React from 'react';
import { Link } from 'react-router-dom';

/**
 * props:
 * slides: {image, heading, description, buttonLabel, link}
 * height
 */

const CarouselItem = ({
  index,
  image,
  heading,
  description,
  buttonLabel,
  link,
}) => {
  return (
    <div
      className={`carousel-item carousel-image-1 ${
        index === 0 ? 'active' : null
      }`}
      style={{
        height: '100%',
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="container">
        <div className="carousel-caption d-none d-sm-block text-right mb-5">
          <h1 className="display-3">{heading}</h1>
          <p
            className="lead"
            style={{
              padding: '5px 20px',
              display: 'inline-block',
              textShadow: '0 2px 5px #000',
            }}
          >
            {description}
          </p>
          <br />
          <Link to={link} className="btn btn-danger">
            {buttonLabel}
          </Link>
        </div>
        <div className="carousel-caption d-xs-block d-sm-none text-right mb-5">
          <h1 className="h3">{heading}</h1>
          <Link to={link} className="btn btn-danger btn-sm">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

const FullWidthCarousel = ({ slides, height }) => {
  return (
    <div id="my-carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((slide, i) => {
          return (
            <li
              data-target="#my-carousel"
              data-slide-to={i}
              className={i === 0 ? 'active' : null}
              key={i}
            />
          );
        })}
      </ol>
      <div className="carousel-inner" style={{height: height}}>
        {slides.map((slide, i) => {
          return (
            <CarouselItem
              key={i}
              index={i}
              image={slide.image}
              heading={slide.heading}
              description={slide.description}
              buttonLabel={slide.buttonLabel}
              link={slide.link}
            />
          );
        })}
      </div>

      <a
        href="#my-carousel"
        data-slide="prev"
        className="carousel-control-prev"
      >
        <span className="carousel-control-prev-icon" />
      </a>
      <a
        href="#my-carousel"
        data-slide="next"
        className="carousel-control-next"
      >
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  );
};

export default FullWidthCarousel;
