import logoImg from '../assets/game-of-thrones-logo.png';

const Loading = () => {
  //   fetch('https://thronesapi.com/api/v2/Characters', {
  //     mode: 'cors',
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((characters) => {
  //       console.log(characters);
  //     });
  return (
    <div className="loader">
      <h1>Loading...</h1>
      <img src={logoImg} alt="logo" />
    </div>
  );
};

export default Loading;
