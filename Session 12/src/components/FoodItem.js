import { ITEM_IMG_CDN_URL } from "../config";
const FoodItem = ({ name, desciption, imageId, price }) => {
  // console.log(props);
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card">
      <img src={ITEM_IMG_CDN_URL + imageId} />
      <h2>{name}</h2>
      <h3>{desciption}</h3>
      <h4>{price / 100}</h4>
      {/* <h3>{cuisines.join(",")}</h3> */}
      {/* <h4>{lastMileTravelString} minutes</h4> */}
    </div>
  );
};

export default FoodItem;
