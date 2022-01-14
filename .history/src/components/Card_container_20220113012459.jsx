import React from 'react';
import Card from './Card';

const Card_container = ({ cards, handleChoice }) => {
  return (
    <div className='cardContainer'>
      <div className='row'>
        {cards.map((cardItem) => (
          <Card
            key={cardItem.id}
            cardItem={cardItem}
            handleChoice={handleChoice}
            flipedCard= false;
          />
        ))}
      </div>
    </div>
  );
};

export default Card_container;
