const Card = () => {
  return (
    <div className="w-[300px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden mb-4 mr-4">
      {/* Card Image */}
      <img
        src="restaurant-image.jpg"
        alt="Restaurant"
        className="w-full h-56 object-cover object-center"
      />
      {/* Card Info */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Restaurant Name
        </h2>
        <p className="text-gray-700">Restaurant description goes here.</p>
      </div>
    </div>
  );
};

export default Card;
