import { useEffect, useState } from "react";
import React, { PropTypes } from "react";
// import PropTypes from "prop-types";
// import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { ALL_RES_LIST } from "../config";
// Function for filtering the data

const BodyComponent = () => {
  // useState Hook-to create local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(ALL_RES_LIST);
    const json = await data.json();
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // Early Return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={5} gap={30} />
  ) : (
    <>
      <div className="search-container p-5 m-2">
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
            const Data = filterData(searchText, allRestaurants);
            //  Update the data

            setfilteredRestaurants(Data);
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
