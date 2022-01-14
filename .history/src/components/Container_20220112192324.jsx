import React from 'react';
import Card_container from './Card_container';
import Header from './Header';

const Container = ({ shuffleCards, cards, handleChoise }) => {
  return (
    <div className='container text-center'>
      <Header shuffleCards={shuffleCards} />
      <Card_container cards={cards} handleChoise={handleChoise} />
    </div>
  );
};

export default Container;
