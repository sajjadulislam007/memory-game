import React from 'react';
import Card_container from './Card_container';
import Header from './Header';

const Container = ({ shuffleCards, cards, handleChoice, choiceOne, choiceTwo }) => {
  return (
    <div className='container text-center'>
      <Header shuffleCards={shuffleCards} />
      <Card_container cards={cards} handleChoice={handleChoice} choiceOne/>
    </div>
  );
};

export default Container;
