import React from 'react';

const HotelCard = ({ img, title, description }) => {
  return (
    <div className="row mb-5 bg-light" style={{padding: '20px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'}}>
      <div className="col-md-3">
        <img src={img} alt={title} className="img-fluid mb-2" />
      </div>
      <div className="col-md-9 d-flex flex-column justify-content-center">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="text-right">
          <button className="btn btn-outline-danger ml-auto">Check in</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
