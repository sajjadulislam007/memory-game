import React from 'react';

const Card = ({ cardItem }) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-12'>
      <div className='cardContainer__card'>
        <img src={cardItem} alt="tar" />
      </div>
    </div>
  );
};

export default Card;
