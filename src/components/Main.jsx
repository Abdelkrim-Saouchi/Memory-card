import { useState, useEffect } from 'react';
import Card from './Card';
import shuffleArray from '../utilities/shuffleArray';

const Main = ({ chars, score, incrementScore, setScoreToZero }) => {
  const [characters, setCharacters] = useState(chars);
  const [isRestarting, setIsRestarting] = useState(false);

  const shuffleChars = () => {
    const shuffledChars = shuffleArray(characters);
    setCharacters(shuffledChars);
  };

  useEffect(() => {
    if (score === 0) setIsRestarting(false);
  }, [score]);

  const cards = characters.map((char) => (
    <Card
      key={char.id}
      name={char.fullName}
      imgUrl={char.imageUrl}
      isRestarting={isRestarting}
      setIsRestarting={setIsRestarting}
      shuffleChars={shuffleChars}
      incrementScore={incrementScore}
      setScoreToZero={setScoreToZero}
    />
  ));

  return (
    <main>
      <p className="instruction">
        *click card to gain points but not more than once per card
      </p>
      <div className="cards_container">{cards}</div>
    </main>
  );
};

export default Main;
