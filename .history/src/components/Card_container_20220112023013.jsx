import React from 'react';
import Card from './Card';

const Card_container = ({ cards }) => {

  return (
    <div className='cardContainer'>
      <div className='row'>
        {cards.map((item) = {
          
        })}
      </div>
    </div>
  );
};

export default Card_container;
