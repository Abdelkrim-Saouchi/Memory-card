import logoImg from '../assets/throne-logo.png';
import Score from './Score';
import BestScore from './BestScore';

const Header = ({ score }) => {
  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="throne logo" />
        <h1>Thrones Memo Game</h1>
      </div>
      <Score score={score} />
      <BestScore score={score} />
    </header>
  );
};

export default Header;
