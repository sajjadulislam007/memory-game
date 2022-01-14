import { useState } from 'react';
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
  const [cardsx, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards = shuffledCards;
    setTurns(0);
  };
  // console.log(setCards, setTurns);

  return (
    <div className='App'>
      <Container shuffleCards={shuffleCards} />
    </div>
  );
}

export default App;
