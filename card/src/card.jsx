// card.jsx

function Card({ title, description, image }) {
  return (
    <div className="p-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit">
      <div className="bg-white p-4 rounded-lg">
        <img src={image} alt="card" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;