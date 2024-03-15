import dummyImage from "../assets/images/popular/items/fish.png";

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={dummyImage} alt="" />
      <div className="card--items">
        <h1 className="card--item__name">Meghana Foods</h1>
        <div className="card--items__rating">
          <h3>Rating</h3>
          <span className="rating-green">4.5</span>
        </div>
        <h4 className="cuisines">
          Biryani, Mughal, Chinese, Biryani, Mughal, Chinese
        </h4>
        <h5 className="cost">Cost : ₹ 45 / Person</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
