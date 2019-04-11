import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';

const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque officia id ratione obcaecati aut assumenda mollitia voluptates sed, unde atque.';

const IconCard = ({
  icon,
  color = 'black',
  title,
  description = defaultDescription,
  link,
}) => {
  return (
    <Fragment>
      <div className="card mb-2 d-none d-md-block">
        <div className="card-body">
          <div className="text-center">
            <FontAwesomeIcon icon={icon} size="4x" color={color} />
          </div>
          <h5 className="text-center my-3">{title}</h5>
          <p className="card-text text-center">
            <Truncate
              lines={3}
              ellipsis={
                <span>
                  &nbsp;
                  <Link to={link.to}>. . .</Link>
                </span>
              }
            >
              {description}
            </Truncate>
          </p>
          <div className="text-center">
            <Link to={link.to} className="btn btn-sm btn-outline-danger">
              {link.label}
            </Link>
          </div>
        </div>
      </div>
      <div className="card mb-2 d-md-none">
        <div className="row no-gutters">
          <div
            className="col-3 d-flex align-items-center justify-content-center"
            style={{ overflow: 'hidden' }}
          >
            <FontAwesomeIcon icon={icon} size="3x" color={color} />
          </div>
          <div className="col-9">
            <h5 className="card-title pt-3">{title}</h5>
            <p className="card-text pb-3">
              <Truncate lines={3} ellipsis={<span>&nbsp; . . .</span>}>
                {description}
              </Truncate>
              <Link to={link.to} className="btn btn-sm btn-outline-danger">
                {link.label}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IconCard;
