import React from "react";
import ReactDOM from "react-dom/client";

const head = <h1>Hello World</h1>;
const Title = () => {
  return <h2>Just Testing Functionl component w/0 return function</h2>;
};

const MainHead = () => {
  return (
    <div>
      {head}
      {Title()}
      {console.log(Title())}
      <Title />
    </div>
  );
};

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Putting heading inside root//passing a react element inside the root
root.render(MainHead());
