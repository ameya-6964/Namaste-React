import dummyImage from "../assets/images/popular/items/fish.png";

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={dummyImage} alt="" />
      <div className="card--items">
        <h1>Restarant Name</h1>
        <h3>Rating</h3>
        <h4>Cuisine</h4>
        <h5>Average Cost</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
