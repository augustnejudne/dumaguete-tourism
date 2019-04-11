import React from 'react';

const PageHeader = ({ title, children }) => {
  // const style = {};
  return (
    <div className="container-fluid py-5 text-white bg-danger">
      <div className="container">
        {/*medium to large*/}
        <h2 className="display-4 d-none d-md-block baloo-bold">{title}</h2>
        {/*small screens*/}
        <h2 className="d-block d-md-none baloo-bold">{title}</h2>
        <div className="row">
          <div className="col lead">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
