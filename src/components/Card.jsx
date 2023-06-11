import { useState, useEffect } from 'react';
const Card = ({
  name,
  imgUrl,
  isRestarting,
  setIsRestarting,
  shuffleChars,
  incrementScore,
  setScoreToZero,
}) => {
  const [clicked, setClicked] = useState(false);

  const changeScore = () => {
    if (!clicked) {
      incrementScore();
      setClicked(true);
    } else {
      setScoreToZero();
      setClicked(false);
      setIsRestarting(true);
    }
  };

  useEffect(() => {
    setClicked(false);
  }, [isRestarting]);

  return (
    <div
      className="card"
      onClick={() => {
        shuffleChars();
        changeScore();
      }}
    >
      <img src={imgUrl} alt="character" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
