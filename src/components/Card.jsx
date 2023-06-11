const Card = ({ name, imgUrl }) => {
  console.log(imgUrl);
  return (
    <div className="card">
      <img src={imgUrl} alt="character" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
