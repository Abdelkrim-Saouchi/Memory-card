import './App.css';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [selectedChars, setSelectedChars] = useState([]);
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const setScoreToZero = () => {
    setScore(0);
  };

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters', {
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      })
      .then((characters) => {
        const chosenChars = characters.slice(0, 16);
        setSelectedChars(chosenChars);
        setLoading(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header score={score} />
          <Main
            chars={selectedChars}
            score={score}
            incrementScore={incrementScore}
            setScoreToZero={setScoreToZero}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
