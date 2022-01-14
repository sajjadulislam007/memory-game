import React from 'react';
import Countdown from './Countdown';

const Header = ({ shuffleCards }) => {
  return (
    <div className='header text-center'>
      <h1 className='header__title'>Magic Memory</h1>
      <button onClick={shuffleCards} className='header__new-game'>
        New Game
      </button>
    </div>
  );
};

export default Header;
