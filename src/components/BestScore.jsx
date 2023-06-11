import { useState, useEffect } from 'react';

const BestScore = ({ score }) => {
  const [bestScore, setBestScore] = useState(score);

  useEffect(() => {
    if (bestScore < score || bestScore === score) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return <div className="score">Best Score: {bestScore} </div>;
};

export default BestScore;
