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
    </div>
  );
};

// Two ways
export default HeaderComponent;
