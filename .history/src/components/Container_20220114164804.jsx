import React from 'react';
import Card_container from './Card_container';
import Header from './Header';

const Container = ({
  shuffleCards,
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
  turns,
  score,
  turnsLimit,
}) => {
  return (
    <div className='container text-center'>
      <Header
        shuffleCards={shuffleCards}
        turns={turns}
        score={score}
        turnsLimit={turnsLimit}
      />
      <Card_container
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
      />
      
    </div>
  );
};

export default Container;
