import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

// Function for filtering the data
function fiterTheData(searchText, restaurants) {
  const Fdata = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return Fdata;
}

const BodyComponent = () => {
  // useState Hook-to create local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for Restaurant"
          value={searchText}
          onChange={(x) => {
            setSearchText(x.target.value);
            console.log(searchText);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // We want filter the data first
            const filterData = fiterTheData(searchText, restaurants);
            //  Update the data

            setRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default BodyComponent;
