import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../helper";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [suggestions, setSuggetions] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);
  const dispatch = useDispatch();

  // Concept of debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggetion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*
   *if key-i is pressed
   *- render the component
   *useEffect();
   *-start the 200ms timer

   *if key-ip is pressed
   *-destroy the component (useEffect return method also)
   *- render the component
   *useEffect();
   *-start the 200ms timer
All the other calls will get decline
   
   */

  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggetions(json[1]);

    // setSerachQuery(json);
  };
  const toggleMenuHandle = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-8 cursor-pointer"
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
          alt=""
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            // value={searchQuery}
            onChange={(e) => setSerachQuery(e.target.value)}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => setshowSuggestion(false)}
          />
          <button className="border border-gray-400 py-2 px-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔎 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
