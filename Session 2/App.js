import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {
    id: "head1",
  },
  "Hello Everyone 1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "head2",
  },
  "Hello Everyone 2"
);

const mainHead = React.createElement(
  "div",
  {
    id: "mainhead",
  },
  [heading1, heading2]
);
// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Putting heading inside root//passing a react element inside the root
root.render(mainHead);
