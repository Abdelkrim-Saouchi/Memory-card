import logoImg from '../assets/game-of-thrones-logo.png';

const Loading = () => {
  return (
    <div className="loader">
      <h1>Loading...</h1>
      <img src={logoImg} alt="logo" />
    </div>
  );
};

export default Loading;
