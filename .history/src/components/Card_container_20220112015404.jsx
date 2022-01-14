import React from 'react';
import Card from './Card';

const Card_container = ({ shuffleCards }) => {
  return (
    <div className='cardContainer'>
      <div className='row'>
        <Card />
      </div>
    </div>
  );
};

export default Card_container;
