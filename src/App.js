import './App.css';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Main />
        </>
      )}
      {/* <Loading />
      <Header /> */}
    </div>
  );
}

export default App;
