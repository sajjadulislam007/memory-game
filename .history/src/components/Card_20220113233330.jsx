import React from 'react';

const Card = ({ cardItem, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    handleChoice(cardItem);
    if (!disabled) {
    }
  };

  return (
    <div className='col-lg-3 col-md-4 col-sm-12'>
      <div
        className={
          flipped ? 'cardContainer__card flipped' : 'cardContainer__card'
        }
      >
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
