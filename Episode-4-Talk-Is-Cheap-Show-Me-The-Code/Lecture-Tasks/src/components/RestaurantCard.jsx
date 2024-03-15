const RestaurantCard = ({ data }) => {
  const { cost, name, rating, imageUrl, cuisine } = data;
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <div className="card--items">
        <h1 className="card--item__name">{name}</h1>
        <div className="cuisines">
          <h4>Cuisines</h4>
          <ul className="cuisine-list">
            {cuisine.map((cuisineItem, index) => (
              <li key={index} className="cuisine-item">
                {cuisineItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="card--items__rating">
          <h3>Rating</h3>
          <span className="rating-green">{rating}</span>
        </div>
        <div className="cost">
          <h5>Cost : ₹ {cost} / Person</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
