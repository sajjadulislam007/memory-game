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
  return (
    <div className='App'>
      <Container />
    </div>
  );
}

export default App;
