import React from 'react';

const SingleCard = ({ cardTitle, cardDesc, btnText, url }) => {
  return (
    <div className="col-4">
      <div className="card" style={{ width: '18 rem' }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardDesc}</p>
          <a href="#" className="btn btn-success">
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
