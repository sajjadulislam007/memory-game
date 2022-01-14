import React from 'react';
import Card from './Card';

const Card_container = ({ cards }) => {

  return (
    <div className='cardContainer'>
      <div className='row'>
        {cards.map(cardItem => <Card key={cardItem} cardItem={cardItem} />)}
      </div>
    </div>
  );
};

export default Card_container;
