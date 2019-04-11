import React, { Fragment } from 'react';

const ParallaxFeature = ({ img, title, description }) => {
  const bgOverlay = '#00000044';
  return (
    <Fragment>
      <div
        style={{
          height: '70vh',
          width: '100%',
          background: `linear-gradient(${bgOverlay}, ${bgOverlay}),url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
        className="bg-white"
          style={{
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            height: '15px',
            width: '100px',
            position: 'absolute',
            transform: 'translateX(-50%)',
            top: '-1px',
            left: '50%',
          }}
        />
        <h3 className="bg-light text-center d-inline-block py-1 px-3">{title}</h3>
      </div>
      <div className="py-5 bg-light">
        <div style={{width: '70%', margin: '0 auto'}}>
            <p>
              {description}
            </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ParallaxFeature;
