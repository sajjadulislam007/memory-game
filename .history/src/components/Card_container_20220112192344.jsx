import React from 'react';
import Card from './Card';

const Card_container = ({ cards, handleChoise }) => {
  return (
    <div className='cardContainer'>
      <div className='row'>
        {cards.map((cardItem) => (
          <Card
            key={cardItem.id}
            cardItem={cardItem}
            handleChoise={handleChoise}
          />
        ))}
      </div>
    </div>
  );
};

export default Card_container;
