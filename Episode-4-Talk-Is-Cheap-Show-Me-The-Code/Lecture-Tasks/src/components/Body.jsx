import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../data/data.js";

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
          <button className="top">Top Rated Restaurants</button>
          <button className="reset"> Reset</button>
        </div>
      </div>
      <div className="body">
        <div className="container">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} data={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
