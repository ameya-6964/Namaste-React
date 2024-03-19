const RestaurantCard = ({ data }) => {
  const { cost, name, rating, imageUrl, cuisine } = data;
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <div className="card__items">
        <h1 className="card__item__name">{name}</h1>
        <div className="cuisines">
          <h4 className="cuisines__title">Cuisines</h4>
          <ul className="cuisines__list">
            {cuisine.map((cuisineItem, index) => (
              <li key={index} className="cuisines__item">
                {cuisineItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="card__items__rating">
          <h3 className="card__items__rating__title">Rating</h3>
          <span className="card__items__rating__value rating-green">
            {rating}
          </span>
        </div>
        <div className="cost">
          <h5 className="cost__title">Cost : ₹ {cost} / Person</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
