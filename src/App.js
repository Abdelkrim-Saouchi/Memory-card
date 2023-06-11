import './App.css';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [selectedChars, setSelectedChars] = useState([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters', {
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      })
      .then((characters) => {
        const chosenChars = characters.slice(0, 12);
        console.log(chosenChars);
        setSelectedChars(chosenChars);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Main chars={selectedChars} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
