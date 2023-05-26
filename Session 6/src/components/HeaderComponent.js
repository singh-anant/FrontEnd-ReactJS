import { useState } from "react";

const loggedIn = () => {
  // API call to check authentication
  return true;
};
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
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items"> 
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

// Two ways
export default HeaderComponent;
