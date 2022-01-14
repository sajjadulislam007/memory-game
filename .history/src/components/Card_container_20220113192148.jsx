import React from 'react';
import Card from './Card';

const Card_container = ({ cards, handleChoice, choiceOne, choiceTwo }) => {
  return (
    <div className='cardContainer'>
      <div className='row'>
        {cards.map((cardItem) => (
          <Card
            key={cardItem.id}
            cardItem={cardItem}
            handleChoice={handleChoice}
            flipped={cardItem === choiceOne || cardItem  choiceTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Card_container;
