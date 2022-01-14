import React from 'react';

const Header = ({ shuffleCards }) => {
  return (
    <div className='header text-center'>
      <h1 className='header__title'>Magic Memory</h1>
      <button onC className='header__new-game'>New Game</button>
    </div>
  );
};

export default Header;
