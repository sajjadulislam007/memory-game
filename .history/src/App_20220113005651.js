import { useEffect, useState } from 'react';
import './assets/styles/main.scss';
import Container from './components/Container';

const cardImages = [
  { src: '/images/helmet-1.png' },
  { src: '/images/potion-1.png' },
  { src: '/images/ring-1.png' },
  { src: '/images/scroll-1.png' },
  { src: '/images/shield-1.png' },
  { src: '/images/sword-1.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [ChoiseTwo, setChoiseTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // console.log(cards, turns);

  // handle Choise of two cards
  const handleChoice = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
    console.log(card);
  };
  // compare two selected cards
  useEffect(() => {
    // if (choiseOne && ChoiseTwo) {

    //   if (choiseOne.src === setChoiseTwo.src) {
    //     console.log('they are matched');
    //     resetTurns();
    //   } else {
    //     console.log('They are not matched');
    //     resetTurns();
    //   }
    // }

    if (choiceOne && choiseTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log('those cards match');
        resetTurn();
      } else {
        console.log('those cards do not match');
        resetTurn();
      }
    }
  }, [choiseOne, ChoiseTwo]);

  //Reset Turns
  const resetTurns = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className='App'>
      <Container
        shuffleCards={shuffleCards}
        cards={cards}
        handleChoice={handleChoice}
      />
    </div>
  );
}

export default App;
