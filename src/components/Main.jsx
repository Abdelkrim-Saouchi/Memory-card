import { useState } from 'react';
import Card from './Card';
import shuffleArray from '../utilities/shuffleArray';

const Main = ({ chars }) => {
  const [characters, setCharacters] = useState(chars);

  const shuffleChars = () => {
    const shuffledChars = shuffleArray(characters);
    setCharacters([...shuffledChars]);
  };

  const cards = characters.map((char) => (
    <Card
      key={char.id}
      name={char.fullName}
      imgUrl={char.imageUrl}
      shuffleChars={shuffleChars}
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
