import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))}
    </>
  );
};

export default RestaurantList;
