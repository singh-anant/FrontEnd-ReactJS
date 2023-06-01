import { useEffect, useState } from "react";
import { RES_MENU_LIST } from "../config";

const useRestaurentMenu = (id) => {
  const [restaurentMenu, setRestaurentMenu] = useState();
  useEffect(() => {
    getRestaurentInfo();
  }, []);
  async function getRestaurentInfo() {
    const data = await fetch(RES_MENU_LIST + id);
    const json = await data.json();
    // console.log(id);
    // console.log(json.data?.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards);
    setRestaurentMenu(
      json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    // console.log(
    //   json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards
    // );
    // setRestaurentMenu(
    //   json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card?.itemCards
    // );
    // console.log(
    //   json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card?.itemCards
    // );
    // console.log(restaurentMenu.length);
    // restaurentMenu?.map((item) => {
    //   console.log(item?.card?.info?.name);
    // });
  }
  return restaurentMenu;
};

export default useRestaurentMenu;
