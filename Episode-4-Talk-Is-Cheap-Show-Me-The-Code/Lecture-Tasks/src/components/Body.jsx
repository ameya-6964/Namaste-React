import { restaurants } from "../data/data.js";
import RestaurantList from "./RestaurantList.jsx";

const Body = () => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Enter Restaurant Name"
        />
        <button className="search__button"> Search Restaurant</button>
        <div className="buttons">
          <button className="buttons__top">Top Rated Restaurants</button>
          <button className="buttons__reset"> Reset</button>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <RestaurantList restaurants={restaurants} />
        </div>
      </div>
    </div>
  );
};

export default Body;
