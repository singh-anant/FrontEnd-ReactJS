import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../utils/store";
import { logout } from "../utils/authSlice";

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      src="https://img.freepik.com/free-vector/hand-drawn-spice-logo-design_23-2149651930.jpg?w=2000"
      className="logo"
    />
  </a>
);

const HeaderComponent = () => {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();
  // We can have or create multiple context
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  // console.log(user);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/instamart" className="link">
            <li>instamart</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
          <Link to="/cart" className="link">
            <li>Cart-{cartItems.length}</li>
          </Link>
          <li>{isOnline ? "🟩" : "🟥"}</li>
          {user.name}
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedIn ? (
              <button className="logout-btn" onClick={() => dispatch(logout())}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
            )}
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Two ways
export default HeaderComponent;
