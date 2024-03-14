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
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
