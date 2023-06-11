const Card = ({ name, imgUrl, shuffleChars }) => {
  return (
    <div className="card" onClick={shuffleChars}>
      <img src={imgUrl} alt="character" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
