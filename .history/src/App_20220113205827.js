import { useEffect, useState } from 'react';
import './assets/styles/main.scss';
import Container from './components/Container';

const cardImages = [
  { src: '/images/helmet-1.png', matched: false },
  { src: '/images/potion-1.png', matched: false },
  { src: '/images/ring-1.png', matched: false },
  { src: '/images/scroll-1.png', matched: false },
  { src: '/images/shield-1.png', matched: false },
  { src: '/images/sword-1.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [turnsLimit, setTurnsLimit] = useState(12);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // console.log(cards, turns);

  // handle Choise of two cards
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log(card);
  };
  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((singleCard) => {
            if (singleCard.src === choiceOne.src) {
              setScore(score + 1);
              return { ...singleCard, matched: true };
            } else {
              return singleCard;
            }
          });
        });
        resetTurn();
        // console.log('those cards match');
      } else {
        // console.log('those cards do not match');
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // console.log(cards);

  //Reset Turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //New game on the screen
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App'>
      <Container
        shuffleCards={shuffleCards}
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
        turns={turns}
        score={score}
      />
    </div>
  );
}

export default App;
