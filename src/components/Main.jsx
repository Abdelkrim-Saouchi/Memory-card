import Card from './Card';

const Main = ({ chars }) => {
  return (
    <main>
      <p className="instruction">
        *click card to gain points but not more than once per card
      </p>
      <div className="cards_container">
        {chars.map((char) => (
          <Card key={char.id} name={char.fullName} imgUrl={char.imageUrl} />
        ))}
      </div>
    </main>
  );
};

export default Main;
