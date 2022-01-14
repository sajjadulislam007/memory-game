import React from 'react';

const Header = ({ shuffleCards, turns, score, turnsLimit }) => {
  return (
    <div className='header text-center'>
      <h1 className='header__title'>Magic Memory</h1>
      <button onClick={shuffleCards} className='header__new-game'>
        New Game
      </button>
      <p className='turn_score'>
        <span className='turn'>
          Trurns:{' '}
          <strong>
            {turns >= turnsLimit ? shuffleCards() : turns}/{turnsLimit}
          </strong>{' '}
        </span>{' '}
        <span className='score'>
          Score: <strong>{score}</strong>{' '}
        </span>
      </p>
    </div>
  );
};

export default Header;
