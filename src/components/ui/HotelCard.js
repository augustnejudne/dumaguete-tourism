import React, { Fragment } from 'react';

const HotelCard = ({ img, title, description }) => {
  return (
    <Fragment>
      <div
        className="row mb-5 bg-light d-none d-md-flex"
        style={{ padding: '20px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
      >
        <div className="col-md-3">
          <img src={img} alt={title} className="img-fluid mb-2" />
        </div>
        <div className="col-md-9 d-flex flex-column justify-content-center">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="text-right">
            <button className="btn btn-outline-danger ml-auto">Check in</button>
          </div>
        </div>
      </div>
      <div className="row mb-5 d-md-none">
        <div className="card">
          <img src={img} alt={title} className="card-img-top"/>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelCard;
