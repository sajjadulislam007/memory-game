import React from 'react';
import Card_container from './Card_container';
import Header from './Header';

const Container = ({ shuffleCards, cards, handleChoice }) => {
  return (
    <div className='container text-center'>
      <Header shuffleCards={shuffleCards} />
      <Card_container cards={cards} handleChoice={handleChoice} />
    </div>
  );
};

export default Container;
