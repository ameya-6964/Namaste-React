import dummyImage from "../assets/images/popular/items/fish.png";

const RestaurantCard = ({ data }) => {
  console.log(data);
  const { cost, name, rating, imageUrl, cuisine } = data;
  return (
    <div className="card">
      <img src={dummyImage} alt="" />
      <div className="card--items">
        <h1 className="card--item__name">{name}</h1>
        <div className="card--items__rating">
          <h3>Rating</h3>
          <span className="rating-green">{rating}</span>
        </div>
        <h4 className="cuisines">
          <h4>Cuisines</h4>
          <ul className="cuisine-list">
            {cuisine.map((cuisineItem, index) => (
              <li key={index} className="cuisine-item">
                {cuisineItem}
              </li>
            ))}
          </ul>
        </h4>
        <h5 className="cost">Cost : ₹ {cost} / Person</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
