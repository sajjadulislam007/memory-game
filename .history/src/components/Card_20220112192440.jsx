import React from 'react';

const Card = ({ cardItem, handleChoise }) => {

  const handleClick = (card) => {
    handleChoise(card)
  }

  return (
    <div className='col-lg-3 col-md-4 col-sm-12'>
      <div className='cardContainer__card'>
        <img className='front' src={cardItem.src} alt='Card-img-front' />
        <img className='back' src='/images/cover.png' alt='Card-img-back' onClick={()}/>
      </div>
    </div>
  );
};

export default Card;
