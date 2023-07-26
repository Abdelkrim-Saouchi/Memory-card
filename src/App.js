import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Main from './components/Main';

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
    let ignore = false;

    const fetchData = () => {
      fetch('https://thronesapi.com/api/v2/Characters', {
        mode: 'cors',
      })
        .then((response) => {
          return response.json();
        })
        .then((characters) => {
          if (!ignore) {
            const chosenChars = characters.slice(0, 16);
            setSelectedChars(chosenChars);
            setLoading(false);
          }
        })
        .catch((error) => {
          ignore = true;
          throw new Error(error);
        });
    };

    fetchData();

    return () => (ignore = true);
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
