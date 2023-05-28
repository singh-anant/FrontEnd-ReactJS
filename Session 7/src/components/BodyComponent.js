import { useEffect, useState } from "react";
import React, { PropTypes } from "react";
// import PropTypes from "prop-types";
// import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from "react-router-dom";

// Function for filtering the data
function fiterTheData(searchText, restaurants) {
  const Fdata = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return Fdata;
}

const BodyComponent = () => {
  // useState Hook-to create local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // Early Return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={3} gap={30} />
  ) : (
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
            const filterData = fiterTheData(searchText, allRestaurants);
            //  Update the data

            setfilteredRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>Oops!No restro matches</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id}>
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default BodyComponent;
