import React from 'react';

const Card = ({ cardItem, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(cardItem);
  };

  return (
    <div className='col-lg-3 col-md-4 col-sm-12'>
      <div className={flipped ? 'cardContainer__card' '' : cardContainer__card}>
        <img className='front' src={cardItem.src} alt='Card-img-front' />
        <img
          className='back'
          src='/images/cover.png'
          alt='Card-img-back'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
