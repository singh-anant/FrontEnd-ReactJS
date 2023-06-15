import React from "react";

const Buttons = ({ name }) => {
  return (
    <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{name}</button>
  );
};

const ButtonList = () => {
  return (
    <div className="flex">
      <Buttons name="All" />
      <Buttons name="Gaming" />
      <Buttons name="Football" />
      <Buttons name="News" />
      <Buttons name="Cooking" />
      <Buttons name="Gaming" />
      <Buttons name="Songs" />
      <Buttons name="Tech" />
    </div>
  );
};

export default ButtonList;
