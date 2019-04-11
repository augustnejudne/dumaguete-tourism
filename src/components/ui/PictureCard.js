import React, { Fragment } from 'react';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';

const PictureCard = ({ img, title, description, background }) => {
  return (
    <Fragment>
      <Link
        to="/"
        className="card mb-3 d-none d-md-block shadow-on-hover"
        style={{ border: 'none', background: background, overflow: 'hidden' }}
      >
        <div
          style={{
            height: '200px',
            background: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">
            <Truncate lines={5} ellipsis={<span>&nbsp; . . .</span>}>
              {description}
            </Truncate>
          </p>
        </div>
      </Link>
      <Link
        to="/"
        className="card mb-2 d-md-none"
        style={{ border: 'none', background: background, overflow: 'hidden' }}
      >
        <div className="row no-gutters">
          <div
            className="col-5 d-flex align-items-center"
            style={{ overflow: 'hidden' }}
          >
            <div style={{height: '100%', width: '100%', background: `url(${img})`, backgroundSize: 'cover'}} />
          </div>
          <div className="col-7 pl-3">
            <h5 className="card-title pt-3">{title}</h5>
            <p
              className="card-text text-muted pb-3"
              style={{ fontSize: '.9rem' }}
            >
              <Truncate lines={4} ellipsis={<span><br/>&nbsp; . . .</span>}>
                {description}
              </Truncate>
            </p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PictureCard;
