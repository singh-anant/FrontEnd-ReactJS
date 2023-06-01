import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";
import { ShimmerCategoryList } from "react-shimmer-effects";
import useRestaurentDetails from "../utils/useRestaurentDetails";
import useRestaurentMenu from "../utils/useRestaurentMenu";
// import { addItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurentMenu = () => {
  const { id } = useParams();
  const restaurentDetails = useRestaurentDetails(id);
  const restaurentMenu = useRestaurentMenu(id);
  // Hook
  const dispatch = useDispatch();
  // We will pass all the items
  const addFoodItem = (item) => {
    // Dispatching action and passing the payload
    dispatch(addItem(item));
  };
  // // console.log(id);
  // useEffect(() => {
  //   getRestaurentInfo();
  // }, []);
  // async function getRestaurentInfo() {
  //   const data = await fetch(RES_MENU_LIST + id);
  //   const json = await data.json();
  //   // console.log(id);
  //   // console.log(json.data?.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards);
  //   // setRestaurentDetails(json.data?.cards[0]?.card?.card?.info);
  //   // console.log(
  //   //   json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards
  //   // );
  //   // setRestaurentMenu(
  //   //   json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards[1]?.card
  //   //     ?.card?.itemCards
  //   // );
  //   // console.log(
  //   //   json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards[1]?.card
  //   //     ?.card?.itemCards
  //   // );
  //   // console.log(restaurentMenu.length);
  //   // restaurentMenu?.map((item) => {
  //   //   console.log(item?.card?.info?.name);
  //   // });
  // }
  return !restaurentMenu ? (
    <ShimmerCategoryList title items={6} categoryStyle="STYLE_SEVEN" />
  ) : (
    // <div>
    //   {/* <h1>{restaurentDetails.name}</h1>
    //   <h1>{restaurentDetails.avgRating}</h1>
    //   <img src={IMG_CDN_URL + restaurentDetails.cloudinaryImageId} alt="" /> */}
    // </div>
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurentDetails?.cloudinaryImageId}
          alt={restaurentDetails?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurentDetails?.name}</h2>
          <p className="restaurant-tags">
            {restaurentDetails?.cuisines.join(", ")}
          </p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurentDetails?.avgRating < 4
                  ? { backgroundColor: "red" }
                  : restaurentDetails?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurentDetails?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurentDetails?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurentDetails?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{restaurentMenu.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {restaurentMenu?.map((item) => (
              <div className="menu-item" key={item?.card?.info?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.card?.info?.name}</h3>
                  <p className="item-cost">
                    {item?.card?.info?.defaultPrice > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.card?.info?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.cloudinaryImageId && (
                    <img
                      className="menu-item-img"
                      src={
                        ITEM_IMG_CDN_URL + item?.card?.info?.cloudinaryImageId
                      }
                      alt={item?.card?.info?.name}
                    />
                  )}
                  <button
                    className="add-btn"
                    onClick={() => addFoodItem(item?.card?.info)}
                  >
                    {" "}
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
