import logoImg from '../assets/throne-logo.png';
const Header = ({ children }) => {
  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="throne logo" />
        <h1>Thrones Memo Game</h1>
      </div>
      {children}
    </header>
  );
};

export default Header;
